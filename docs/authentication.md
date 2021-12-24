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
label in the API reference. Requests that may require authentication instead
show <AuthenticationBadge />. These requests handle authentication in varying
ways, by e.g. excluding data or raising an error. These behaviors should be
described in the request's reference entry.

## Errors
Unless otherwise specified, all requests (regardless of whether authentication
is required) can result in the following errors. The requests that require
authentication will always result in an error if the access token is invalid,
expired, or missing. Requests that do not require authentication will only
result in errors if such a token is actually provided in the `Authorization`
header, even though the request would otherwise succeed. Accordingly, it's
best to refrain from providing an access token unless the request requires
authentication.
### Invalid access token
```
401 Unauthorized

{
  "errors": [...]
}
```
### Blacklisted access token
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
