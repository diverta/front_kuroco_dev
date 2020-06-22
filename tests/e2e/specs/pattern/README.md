## Authentication

| cookie / token | pattern  | scenario                                                  | to call endpoints  | configuration in management screen                            | expected |
| -------------- | -------- | --------------------------------------------------------- | ------------------ | ------------------------------------------------------------- | -------- |
| token          | Login    | with x-rcms-token, requests login -> token -> preInfo        | login, token, preInfo | apply token, the related endpoints are all existed & enabled  | no 401   |
| token          | No Login | with x-rcms-token, requests token -> preInfo                 | token, preInfo        | apply token, the related endpoints are all existed & enabled  | no 401   |
| cookie         | Login    | without x-rcms-token, requests login -> preInfo(with cookie) | login, preInfo        | cancel token, the related endpoints are all existed & enabled | no 401   |
| cookie         | No Login | without x-rcms-token, requests preInfo(with cookie)          | preInfo               | cancel token, the related endpoints are all existed & enabled | no 401   |

originally design

- Token API + Login API both exist (standard usecase when site has membership)
- Token API only : anonymous token required (use_token enabled but all APIs are public - no members therefore no login needed)
- Login API only - no Token API ( if use_token is disabled and the site has membership)
- Neither (if use_token is disabled and the site has no membership)

you can configure above settings by enable/disable features at management screen.

- to apply/cancel Token: API LIST -> API Basic setting -> use_token
- to apply/cancel Login: API LIST -> Update of .../login endpoint -> enable/disable

if you change configuration, you need to refresh generated sourcecodes and e2e instance.  
`npm run update:kuroco && npm run test:e2e`
