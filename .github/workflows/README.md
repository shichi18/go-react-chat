# workflows

| ファイル | 内容 |
| --- | --- |
| `ci.yml` | PR と main への push で、`server/` の `go vet` / `go test -race`、`web/` の `npm run lint` / `npm run build` を回す |
