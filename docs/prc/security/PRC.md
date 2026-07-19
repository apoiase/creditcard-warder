# PRC — Security (creditcard-warder)

- [x] **SEC1** Secret scanning no PR (gitleaks, `.github/workflows/quality-gates.yml`, criado
  neste rollout).
- [x] **SEC2** SAST no PR (Semgrep, `p/javascript` + `p/security-audit`).
- [x] **SEC3** SCA no PR (Trivy fs).
- [x] **SEC9** `gitleaks detect` local (working tree + histórico completo, 59 commits) rodou e
  **não encontrou nenhum secret** — nada a registrar no `.gitleaksignore` da raiz da task, nada
  a rotacionar.
- [x] **SEC-PCI** Repo tem escopo PCI (validação de número de cartão): `test/test.js` usa
  números de cartão de **teste públicos padrão da indústria de pagamentos** (mesmos exemplos
  usados por Stripe/Braintree/etc — ex. `4024007175430676` para Visa), **não são PANs reais**.
  Confirmado manualmente (não são credenciais/dados sensíveis reais) e não flagados pelo
  gitleaks local; deixar registrado aqui para o caso de outro scanner externo acusar
  falso-positivo no futuro (mesmo padrão adotado em `sentinel-ai`).
- [ ] **SEC10** Devdeps desatualizadas (`xo@0.15.0` de 2016, `rollup@^0.66.2`, `mocha@^3.2.0`,
  `testling` descontinuado) — sem Renovate/Dependabot configurado (bloqueado org-wide por auth
  upstream, ver CLAUDE.md da task raiz); recomendação aberta, sem urgência dado runtime deps
  mínimas (`lodash.find`, `luhn`) e código estável.
- [x] **SEC11** Repo consumido por dois repos vivos em produção (`apoia.se`, `apoiase-client`)
  — qualquer alteração de lógica de validação exige coordenação com esses times antes de
  publicar nova versão no npm (não é enforced por CI, é anotação de risco).
