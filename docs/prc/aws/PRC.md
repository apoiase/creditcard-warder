# PRC — AWS (creditcard-warder)

- [x] **AWS1** **Sem deploy** — não há `serverless.yml`, Dockerfile, `.tf` ou qualquer IaC no
  repo. Confirmado por busca na árvore.
- [x] **AWS2** Cruzamento com snapshots Steampipe da rodada (lambdas/cfn-stacks/s3/sqs/
  apigwrest/apigwv2/eventrules/sns/dynamodb): **zero ocorrências** de "creditcard" — não existe
  recurso AWS próprio com esse nome.
- [x] **AWS3** É consumido como **dependência de código** (npm) por `apoia.se` (monolito, prod)
  e `apoiase-client` — não como serviço/endpoint separado. Ver `docs/prc/scan/2026-07-14-scan.md`.
- [ ] **AWS4** `apoiase-context-layer` (`infrastructure/overview.md`) lista este repo no
  subgrafo "Serverless — Cobrança" — divergência a corrigir no próximo review do context-layer
  (fora do escopo desta PR, que não edita esse repo).
