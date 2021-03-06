---
title: Session
---

import AuthenticationBadge from "../../src/components/AuthenticationBadge"

# Session

## API
### Create a session
i.e. log in
```
POST /session
```
#### Parameters
#### Response
##### Success
```json
201 Created

{
  "jwt": "..."
}
```
##### Invalid email
Commonly because no user exists with the provided email
```
401 Unauthorized
```
##### Incorrect password
```
401 Unauthorized
```
---
### Refresh a session <AuthenticationBadge required />
Creating a session provides a short-lived (1 hour) JWT. When this JWT expires,
a new one must be generated, authenticated by a refresh token cookie that
accompanies the initial JWT. Refresh tokens are valid for much longer, but
once they (and their current JWT) expire, the user will have to log in again.
```
PATCH /session
```
#### Response
##### Success
```json
200 OK

{
  "jwt": "..."
}
```
##### Blacklisted access token
i.e. the user has logged out
```
401 Unauthorized
```
##### Invalid access token
```
401 Unauthorized
```
##### Invalid refresh token
```
401 Unauthorized
```
---
### Destroy a session <AuthenticationBadge required />
i.e. log out. Doing so blacklists the provided `access_token` so that future
requests using it are not authorized.
```
DELETE /session
```
#### Response
##### Success
```
204 No Content
```
##### Blacklisted access token
i.e. the user has logged out
```
401 Unauthorized
```
##### Invalid access token
```
401 Unauthorized
```
