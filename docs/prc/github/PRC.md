# PRC — Repositório / CI (creditcard-warder)

Repo GitHub (SoT).

- [x] **GH1** Branch `big-picture/NA-598-creditcard-warder` a partir de `master` (default do
  repo).
- [x] **GH2** `.github/workflows/quality-gates.yml` consultivo (secret-scan/SAST/SCA,
  `continue-on-error` em todo step, nunca bloqueia PR).
- [x] **GH3** Sem workflow/deploy pré-existente a preservar — repo não tinha `.github/` antes
  deste rollout.
- [ ] **GH4** Reviewers do PR = time (não definidos nesta rodada) — add reviewer manual.
- [ ] **GH5** Devdeps antigas (`xo@0.15.0`, `rollup@^0.66.2`, `mocha@^3.2.0`, `testling`
  descontinuado) — sem Renovate/Dependabot configurado; recomendação aberta, sem urgência.
- [x] **GH6** Repo tem 2 forks/remotes visíveis no clone local (`origin` = apoiase,
  `upstream` = `arielpchara/creditcard-info`, autor original) — histórico preservado, sem ação.
