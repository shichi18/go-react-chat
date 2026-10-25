# workflows

| ファイル | 内容 |
| --- | --- |
| `ci.yml` | PR と main への push で、`server/` の `gofmt` / `go vet` / `go test -race`、`web/` の `npm run format:check` / `npm run lint` / `npm run build` を回す |
