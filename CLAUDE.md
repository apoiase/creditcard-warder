# creditcard-warder

Biblioteca JS standalone (publicada no npm como `creditcard-warder`) que identifica a bandeira
de um cartão de crédito a partir do número (tabela de regex por BIN — Elo, Hipercard, Aura,
Visa Electron, Maestro, Forbrugsforeningen, Dankort, Visa, Mastercard, Amex, Dinersclub,
Discover, Unionpay, JCB) e valida o número via checksum de Luhn (delega pro pacote `luhn`).
Sem servidor, sem banco, sem recurso AWS próprio — puro código de validação.

> **Estado (NA-598, 2026-07-14):** não é um serviço deployado nem um satélite serverless —
> é uma **lib dependência**, consumida via `require`/`import` por dois repos vivos:
> `apoia.se` (monolito, server-side em `modules/mundipagg/subscription.js` + client-side via
> bundle vendorizado em `public/lib/`) e `apoiase-client` (formulário de cartão, React). O
> `apoiase-context-layer` lista este repo no subgrafo "Serverless — Cobrança" da topologia —
> **divergência**: não há compute próprio a validar; ver `docs/prc/scan/2026-07-14-scan.md`.

## Comandos

```bash
npm test              # xo (lint) + mocha --ui tdd (test/test.js)
npm run build          # rollup --config → dist/creditcard-warder.min.js (UMD, browser)
npm run watch          # rollup --config --watch
```

Sem deploy — não há pipeline de deploy, CI existente ou infraestrutura a orquestrar.

## Arquitetura

Um único arquivo de lógica (`index.js`):
- **`CredircardWarder`** (constructor, nome com typo interno — não é parte da API pública) —
  guarda o número e a tabela `rules` (14 bandeiras + fallback `other`).
- **`getRule()`** — usa `lodash.find` para achar a primeira regra cujo regex bate com o número;
  cai em `other` se nada bater.
- **`getBrand()`** — API pública; retorna o `type` da regra encontrada.
- **`validate()`** — API pública; delega para `luhn.validate()` (não implementa Luhn aqui).

Empacotado de duas formas: `package.json` publica no npm (consumo Node/bundlers); `bower.json` +
`rollup.config.js` geram `dist/creditcard-warder.min.js` (UMD) para uso direto em browser —
esse é o artefato que o monolito `apoia.se` vendoriza em `public/lib/`.

## Contexto de domínio

Detecção de bandeira + validação de número de cartão é etapa do fluxo de **checkout/cobrança**
(Apoio via cartão de crédito) — ver `apoiase-context-layer` →
`engineering/billing-operations.md` e `infrastructure/overview.md` (topologia "Serverless —
Cobrança", onde este repo aparece listado — ver nota de divergência acima e no scan).

## Convenções

- Commits em português natural com `NA-598` no texto durante o rollout; branch
  `big-picture/NA-598-creditcard-warder`.
- Repo GitHub (SoT). Merge **só pela UI do GitHub** com review humano (nunca via API/gh merge).
- CI: `.github/workflows/quality-gates.yml` 100% **consultivo** (nunca bloqueia; não há deploy
  a preservar).

## Knowledge graph

- `.understand-anything/knowledge-graph.json` (montado à mão — repo pequeno, ~900 palavras,
  sem pipeline de subagents)
- `graphify-out/graph.json` + `GRAPH_REPORT.md` (50 nós do `package.json`; graphify concluiu
  que o corpus cabe num único contexto e não exigiu grafo do código)

## Segurança (ver docs/prc/)

- Sem secret no HEAD (`gitleaks detect`, working tree + 59 commits de histórico) — nada a
  ignorar/rotacionar.
- `test/test.js` usa números de cartão de **teste públicos** (mesmos BINs de exemplo usados na
  indústria de pagamentos, ex. Stripe/Braintree) — não são PANs reais; relevante por ser um
  repo de escopo PCI (validação de cartão), documentado em `docs/prc/security/PRC.md` (SEC9)
  para não confundir com secret real caso outro scanner acuse.
- Devdeps desatualizadas (`xo@0.15.0` de 2016, `rollup@^0.66.2`, `mocha@^3.2.0`) — débito de
  higiene, sem urgência (repo estável, tabela de bandeiras não muda com frequência).
