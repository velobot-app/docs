---
title: Snapshot
---

import Bpm from "../../src/components/units/Bpm"
import Km from "../../src/components/units/Km"
import Kmh from "../../src/components/units/Kmh"
import Rpm from "../../src/components/units/Rpm"
import Watts from "../../src/components/units/Watts"
import C from "../../src/components/units/C"
import Sec from "../../src/components/units/Sec"

# Snapshot
`Snapshots` are sparse collections of data associated with an `Activity`.

## Schema
| Key | Type | Unit | Description |
|-|-|-|-|
| `id` | integer | | |
| `altitude` | decimal | <Km /> | Distance above sea-level in km |
| `cadence` | integer | <Rpm /> | Revolutions, steps, strokes, etc. per minute |
| `cumulative_distance` | decimal | <Km /> | Cumulative distance in km |
| `heart_rate` | integer | <Bpm /> | Heart rate in bpm |
| `location` | geojson | | Spherical coordinates (latitude &amp; longitude) |
| `power` | integer | <Watts /> | Current power in watts |
| `rider_position` | string | | One of `seated` or `standing` |
| `speed` | decimal | <Kmh /> | Speed in km/h |
| `t` | integer | <Sec /> | Time offset from start of activity |
| `temperature` | integer | <C /> | Temperature in C |
| `timestamp` | timestamp | | |

## API
### List snapshots
Retrieve all snapshots with an associated activity
```
GET /activities/{activity}/snapshots
```
#### Parameters
| Name | Type | In | Description |
|-|-|-|-|
| `activity` | string | path | |
| `t` | integer | query | Can be any non-negative integer. Returns snapshots at least `t` seconds after the `started_at` value of the `Activity` |
| `limit` | integer | query | Can be between 1 and 100 inclusively.<br />Defaults to 25 |
#### Response
```
200 OK
```
```json
{
  "count": 1,
  "snapshots": [
    {
      "id": 1,
      "activity_url": "https://api.everymansland.com/activities/1",
      "altitude": 80,
      "cadence": 90,
      "cumulative_distance": 68.4,
      "heart_rate": 158,
      "location": {
        "type": "Point",
        "coordinates": [
          -96.729674,
          32.815745
        ]
      },
      "power": 172,
      "rider_position": "seated",
      "speed": 27.8,
      "temperature": 21
    }
  ]
}
```
