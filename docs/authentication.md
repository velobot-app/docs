---
sidebar_position: 2
---

import AuthenticationBadge from "../src/components/AuthenticationBadge"

# Authentication
Some requests that require authentication, e.g. viewing a private activity or
adding a comment. For others, it is optional. Requests are authenticated by
providing an access token in the `Authorization` header, i.e.
```
Authorization: bearer {access_token}
```

Access tokens are signed and encrypted JWTs generated from the
[session API](/docs/reference/session).

## Requests
Requests that require authentication include an <AuthenticationBadge required />
label in the API reference. Requests that may require authentication, or have
different behavior when authenticated instead show <AuthenticationBadge />

## Errors
Unless otherwise specified, all requests (regardless of whether authentication
is required) can result in the following errors. The requests that require
authentication will always result in an error if the access token is invalid,
expired, or missing. Requests that do not require authentication will only
result in errors if such a token is actually provided in the `Authorization`
header, even though the request would otherwise succeed. Accordingly, it's
best to refrain from providing an access token unless necessary.
### Invalid access token
```
401 Unauthorized

{
  "errors": [...]
}
```
### Blacklisted access token
i.e. the user has logged out
```
401 Unauthorized

{
  "errors": [...]
}
```
### No authentication provided
```
401 Unauthorized

{
  "errors": [...]
}
```
