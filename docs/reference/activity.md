---
---

import AuthenticationBadge from "../../src/components/AuthenticationBadge"
import Sec from "../../src/components/units/Sec"
import Watts from "../../src/components/units/Watts"

# Activity
## Overview
An `Activity` is an event or session tracked through EML. It can represent an
outdoors workout, a leisurely hike on a forest trail, or a fishing trip. Each
of these different activities provides EML with various data that can be
analyzed.

For example, cycling activities typically include a wealth of physiological
and geographic metrics such as power, heartrate, speed, altitude and more,
depending on what sensors and devices are connected to your bike computer. On
the other hand, tracking generic activity with a multi-sport watch might only
capture your location and heartrate.
### Activity submission
`Activities` are created in EML by submitting a `FIT` file. This can be done
manually by uploading the file, or by giving EML access to your data from a
fitness platform like Garmin Connect.
:::caution
Fitness platform integrations are currently not supported. Activities must be
created manually by uploading a FIT file to EML.
:::
### Social engagement
Users can attach photos, comment on their own, or others' activities, so long
as they have permission to do so.
#### Visibility
Activities have a `visibility` level that affects who can view it and any
associated data. This only affects individual activities; aggregates will
include data from all activities regardless of `visibility` setting.

* `hidden`: Only the submitter
* `shared`: Friends and groups
* `published`: Any user or visitor
#### Comments
Comments can be disabled on individual activities, applying to all users that
have access to the activity. Users can also opt to disable comments on all
future activities by default.
### Analysis
Depending on the data associated with an `Activity`, users can analyze their
performance in an individual activity, or across time.

## Schema
| Key | Type | Unit | Description |
|-|-|-|-|
| `id` | integer | | |
| `sport` | string | | One of the [supported sport types](/docs/sport-types) |
| `power_curve` | array | [<Sec />, <Watts />] | Draws the power curve for the activity. Items are themselves arrays with two items: the first is the time offset from activity start and the second is highest average power for that period, e.g. `[3600, 230]` describes a 1-hour critical power of 230 watts |
| `started_at` | timestamp | | The start of the activity |
| `condition` | object | | Current condition of the subject at the start of the activity |

## API
### List activities <AuthenticationBadge />
Lists activities. When not authenticated, only published activities are
returned. As an authenticated user, the results include:
* Published activities
* Your own activities
* Your friends' non-hidden activities

```
GET /activities
```

#### Parameters
| Name | Type | In | Description |
|-|-|-|-|
| `sort` | string | query | Can be one of `started_at`, `created_at`, <br/>Defaults to `started_at` |
| `direction` | string | query | Can be `asc` or `desc`.<br/>Defaults to `desc` |
| `sport` | string | query | Filters by the `sport`. Can be one of the [supported sport types](/docs/sport-types) |
| `page` | integer | query | Can be any positive non-zero number |
| `limit` | integer | query | Number of results to return per page |

#### Response
```
200 OK
```
```json
{
  "count": 1,
  "page": 1,
  "activities": [
    {
      "id": 1,
      "condition": {
        "cycling_ftp": 180,
        "weight": 67.5
      },
      "power_curve": [[1, 800], [5, 600], [10, 400]],
      "snapshots_url": "https://api.everymansland.com/activities/1/snapshots",
      "sport": "cycling",
      "started_at": "2021-12-14T11:12:03Z"
    }
  ]
}
```

### Get an activity <AuthenticationBadge />
Retrieve data for a specific activity. Just like listing, non-authenticated
users may only retrieve published activities, and authenticated users can
access:
* Published activities
* Your own activities
* Your friends' non-hidden activities

```
GET /activities/{activity}
```
#### Parameters
| Name | Type | In | Description |
|-|-|-|-|
| `activity` | string | path | |
#### Response
```
200 OK
```
```json
{
  "id": 1,
    "condition": {
      "cycling_ftp": 180,
      "weight": 67.5
    },
  "power_curve": [[1, 800], [5, 600], [10, 400]],
  "snapshots_url": "https://api.everymansland.com/activities/1/snapshots",
  "sport": "cycling",
  "started_at": "2021-12-14T11:12:03Z"
}
```

### Update an activity <AuthenticationBadge required />
Only the authenticated user's activities may be updated
```
PATCH /activities/{activity}
```
#### Parameters
| Name | Type | In | Description |
|-|-|-|-|
| `activity` | string | path | |
| `power_curve` | array | body | |
| `sport` | string | body | |
| `started_at`| timestamp | body | |
| `visibility` | string | body | Can be one of `hidden`, `shared`, or `published`
#### Response
```
200 OK
```
```json
{
  "id": 1,
    "condition": {
      "cycling_ftp": 180,
      "weight": 67.5
    },
  "power_curve": [[1, 800], [5, 600], [10, 400]],
  "snapshots_url": "https://api.everymansland.com/activities/1/snapshots",
  "sport": "cycling",
  "started_at": "2021-12-14T11:12:03Z"
}
```

### Create an activity <AuthenticationBadge required />
Create an activity for the authenticated user with the provided FIT file. The
response will have very little data, as files are processed in a background
job to extract data, generate `Snapshots`, etc.
```
POST /activities
```
#### Parameters
| Name | Type | In | Description |
|-|-|-|-|
| `file` | string | body | The FIT file to be processed |
#### Response
```
201 Created
```
```json
{
  "id": 1
}
```

### Delete an activity <AuthenticationBadge required />
Only the authenticated user's activities may be deleted
```
DELETE /activities/{activity}
```
#### Parameters
| Name | Type | In | Description |
|-|-|-|-|
| `activity` | string | path | |
#### Reponse
```
204 No Content
```
