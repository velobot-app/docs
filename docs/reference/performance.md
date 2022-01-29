---
---

import AuthenticationBadge from "../../src/components/AuthenticationBadge"
import Bpm from "../../src/components/units/Bpm"
import Kcal from "../../src/components/units/Kcal"
import Km from "../../src/components/units/Km"
import Kmh from "../../src/components/units/Kmh"
import M from "../../src/components/units/M"
import Rpm from "../../src/components/units/Rpm"
import Sec from "../../src/components/units/Sec"
import Watts from "../../src/components/units/Watts"

# Performance
Exposes sport-specific performance metrics.

## Cycling
### Get condition history <AuthenticationBadge required />
Retrieve historic rider condition from uploaded activities.
```
GET /performance/cycling/condition
```
#### Schema
| Name | Type | Unit | Description |
|-|-|-|-|
| `activity_url` | string | | Link to the activity that recorded this condition |
| `date` | date | | Date of the activity, or for manual entries, the date of entry |
| `ftp` | integer | <Watts /> | |
| `weight` | decimal | <Kg /> | |
#### Parameters
| Name | Type | In | Description |
|-|-|-|-|
| `group` | string | query | Can be one of `week`, `month`, or `year`. If empty, returns best powers for all recorded activites.<br />Defaults to `week` |
#### Response
```
200 OK
```
```
{
  "conditions": [
    {
      "activity_url": "https://api.everymansland.com/activities/1",
      "date": "2020-11-24",
      "ftp": 175,
      "weight": 72.1
    },
    {
      "activity_url": "https://api.everymansland.com/activities/2",
      "date": "2020-11-27",
      "ftp": 175,
      "weight": 72.2
    },
    {
      "date": "2020-11-28",
      "ftp": 175,
      "weight": 71.4
    },
    {
      "activity_url": "https://api.everymansland.com/activities/3",
      "date": "2020-12-11",
      "ftp": 204,
      "weight": 70.7
    },
    {
      "activity_url": "https://api.everymansland.com/activities/4",
      "date": "2020-12-14",
      "ftp": 204,
      "weight": 70.1
    },
    {
      "date": "2020-12-30",
      "ftp": 217
      "weight": 68.3
    }
  ]
}
```

### Get activity history <AuthenticationBadge required />
Show high level activity stats. Averages are weighted by moving time.
```
GET /performance/cycling/activities
```

#### Schema
| Name | Type | Unit | Description |
|-|-|-|-|
| `average_cadence` | integer | <Rpm /> | Average cadence weighted by activity moving time |
| `average_heart_rate` | integer | <Bpm /> | Average cadence weighted by activity moving time |
| `average_normalized_power` | integer | <Watts /> | Average normalized power weighted by activity moving time |
| `average_power` | integer | <Watts /> | Average power weighted by activity moving time |
| `average_speed` | decimal | <Kmh /> | Average speed weighted by activity moving time |
| `calories_burned` | integer | <Kcal /> | |
| `count` | integer | | Number of activities in the given history period |
| `distance` | decimal | <Km /> | |
| `elevation_gain` | integer | <M /> | Cumulative elevation gain |
| `elevation_loss` | integer | <M /> | Cumulative elevation loss |
| `epoch` | timestamp | | Time period start, if a `group` parameter is provided |
| `moving_time` | integer | <Sec /> | Cumulative activity moving time |

#### Parameters
| Name | Type | In | Description |
|-|-|-|-|
| `group` | string | query | Can be one of `week`, `month`, or `year`. If empty, returns best powers for all recorded activites.<br />Defaults to `week` |

#### Response
```
200 OK
```
```json
{
  "average_speed": 22.3,
  "calories": 13367,
  "count": 15,
  "distance": 643.801,
  "duration": 103932,
  "elevation_gain": 4.68,
  "power": 153
}
```

### Get power curve <AuthenticationBadge required />
Show power curve for the authenticated user's cycling activities during the
time period, selecting best available critical powers
```
GET /performance/cycling/power-curve
```

#### Parameters
| Name | Type | In | Description |
|-|-|-|-|
| `h` | string | query | Can be one of `1w, 2w, 3w, 4w, 1m, 2m, 3m, 6m, 1y`. If blank, returns best powers for all recorded activites |

#### Response
```
200 OK
```
```json
[
  {
    "duration": 1,
    "power": 930,
    "activity_url": "https://api.everymansland.com/activities/1"
  },
  {
    "duration": 2,
    "power": 871,
    "activity_url": "https://api.everymansland.com/activities/1"
  },
  {
    "duration": 5,
    "power": 789,
    "activity_url": "https://api.everymansland.com/activities/1"
  },
  {
    "duration": 10,
    "power": 590,
    "activity_url": "https://api.everymansland.com/activities/1"
  },
  {
    "duration": 20,
    "power": 475,
    "activity_url": "https://api.everymansland.com/activities/1"
  },
  {
    "duration": 30,
    "power": 428,
    "activity_url": "https://api.everymansland.com/activities/1"
  },
  {
    "duration": 60,
    "power": 325,
    "activity_url": "https://api.everymansland.com/activities/1"
  },
  {
    "duration": 120,
    "power": 250,
    "activity_url": "https://api.everymansland.com/activities/1"
  },
  {
    "duration": 300,
    "power": 212,
    "activity_url": "https://api.everymansland.com/activities/1"
  },
  {
    "duration": 600,
    "power": 187,
    "activity_url": "https://api.everymansland.com/activities/1"
  },
  {
    "duration": 1200,
    "power": 182,
    "activity_url": "https://api.everymansland.com/activities/1"
  },
  {
    "duration": 1800,
    "power": 206,
    "activity_url": "https://api.everymansland.com/activities/1"
  },
  {
    "duration": 3600,
    "power": 175,
    "activity_url": "https://api.everymansland.com/activities/1"
  },
  {
    "duration": 7200,
    "power": 171,
    "activity_url": "https://api.everymansland.com/activities/1"
  }
]
```

### Get critical power history <AuthenticationBadge required />
Retrieves historic critical power values for the authenticated user
```
GET /performance/cycling/critical-power
```

#### Parameters
| Name | Type | In | Description |
|-|-|-|-|
| `group` | string | query | **Required**. Can be one of `1w, 2w, 3w, 4w, 1m, 2m, 3m, 6m, 1y`. Returns best critical power for the given value history period<br />Defaults to `4w` |
| `duration` | integer | query | **Required**. Can be any positive integer. Returns best critical powers for the given value duration.<br />Defaults to `1` |

#### Response
```
200 OK
```
```json
[
  {
    "epoch": "2021-09-26",
    "power": 184
  },
  {
    "epoch": "2021-10-24",
    "power": 198
  },
  {
    "epoch": "2021-11-21",
    "power": 207
  }
]
```
