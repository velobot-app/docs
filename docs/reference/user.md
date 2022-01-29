---
title: User
---

import AuthenticationBadge from "../../src/components/AuthenticationBadge"

# User

## Schema
| Key | Type | Unit | Description |
|-|-|-|-|
| `id` | integer | | |
| `first_name` | string | | **Required** |
| `last_name` | string | | **Required** |
| `email` | string | | **Required, Unique** |
| `public` | boolean | | |
| `sex` | string | | **Required**. Must be one of `female` or `male` |

## API
### List users <AuthenticationBadge />
List all users with public profiles. Private users are included if friends
with the authenticated user.
```
GET /users
```
#### Parameters
| Name | Type | In | Description |
|-|-|-|-|
#### Response
```
200 OK
```
```json
{
  "count": 1,
  "users": [
    {
      "id": 1,
      "activities_url": "https://api.everymansland.com/users/1/activities",
      "first_name": "Jane",
      "last_name": "Roe",
      "public": true,
      "sex": "female"
    }
  ]
}
```
---
### Get user <AuthenticationBadge />
Get a public user with the given ID. Private users are unavailable unless
friends with the authenticated user.
```
GET /users/{user}
```
#### Parameters
| Name | Type | In | Description |
|-|-|-|-|
| `user` | integer | path | User `id` |
#### Response
```
200 OK
```
```json
{
  "id": 1,
  "activities_url": "https://api.everymansland.com/users/1/activities",
  "first_name": "Jane",
  "last_name": "Roe",
  "sex": "female"
}
```
---
### Add friend <AuthenticationBadge required />
Send a friend request to, or accept any received friend request from the
specified user. Does nothing if a friend request has already been sent, or
the user is already a friend. This endpoint is idempotent, and returns no
content.
```
PUT /users/{user}/friend
```
#### Parameters
| Name | Type | In | Description |
|-|-|-|-|
| `user` | integer | path | User `id` |
#### Response
```
204 No Content
```
---
### Remove friend <AuthenticationBadge required />
Reject any friend request received from the specified user, or remove them
from friends. Does nothing if there is no pending friend request, or the user
is not a friend. This endpoint is idempotent, and returns no content.
```
DELETE /users/{user}/friend
```
#### Parameters
| Name | Type | In | Description |
|-|-|-|-|
| `user` | integer | path | User `id` |
#### Response
```
204 No Content
```
---
### Get authenticated user <AuthenticationBadge required />
```
GET /user
```
#### Response
```
200 OK
```
```json
{
  "id": 1,
  "activities_url": "https://api.everymansland.com/users/1/activities",
  "first_name": "Jane",
  "last_name": "Roe",
  "sex": "female"
}
```
---
### Update authenticated user <AuthenticationBadge required />
```
PATCH /user
```
#### Parameters
| Name | Type | In | Description |
|-|-|-|-|
| `first_name` | string | body | |
| `last_name` | string | body | |
| `sex` | string | body | |
| `weight` | decimal | body | |
| `height` | integer | body | |
| `cycling_ftp` | integer | body | |
#### Response
##### Success
```json
200 OK

{
  "id": 1,
  "activities_url": "https://api.everymansland.com/users/1/activities",
  "first_name": "Jane",
  "last_name": "Roe",
  "sex": "female"
}
```
##### Invalid value
Invalid value provided for:
* `cycling_ftp`
* `height`
* `public`
* `sex`
* `weight`
```json
422 Unprocessable Entity

{
  "errors": [...]
}
```
