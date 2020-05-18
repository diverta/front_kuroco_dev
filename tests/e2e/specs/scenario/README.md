## Authentication

| cookie / token | pattern  | scenario                                                  | to call endpoints  | configuration in management screen                            | expected |
| -------------- | -------- | --------------------------------------------------------- | ------------------ | ------------------------------------------------------------- | -------- |
| token          | Login    | requests login -> token -> apis                           | login, token, apis | apply token, the related endpoints are all existed & enabled  | no 401   |
| token          | No Login | requests token -> apis                                    | token, apis        | apply token, the related endpoints are all existed & enabled  | no 401   |
| cookie         | Login    | without x-rcms-token, requests login -> apis(with cookie) | login, apis        | cancel token, the related endpoints are all existed & enabled | no 401   |
| cookie         | No Login | requests apis(with cookie)                                | apis               | cancel token, the related endpoints are all existed & enabled | no 401   |

originally design

- Token API + Login API both exist (standard usecase when site has membership)
- Token API only : anonymous token required (use_token enabled but all APIs are public - no members therefore no login needed)
- Login API only - no Token API ( if use_token is disabled and the site has membership)
- Neither (if use_token is disabled and the site has no membership)
