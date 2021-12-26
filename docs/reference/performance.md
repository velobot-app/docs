---
---

import AuthenticationBadge from "../../src/components/AuthenticationBadge"
import Kcal from "../../src/components/units/Kcal"
import Km from "../../src/components/units/Km"
import Kmh from "../../src/components/units/Kmh"
import Sec from "../../src/components/units/Sec"
import Watts from "../../src/components/units/Watts"

# Performance
Exposes sport-specific performance metrics.

## Cycling
### Get activity history <AuthenticationBadge required />
Show high level activity stats
```
GET /performance/cycling/activities
```

#### Schema
| Name | Type | Unit | Description |
|-|-|-|-|
| `average_speed` | decimal | <Kmh /> | |
| `calories` | integer | <Kcal /> | |
| `count` | integer | | Number of activities in the given history period |
| `distance` | decimal | <Km /> | |
| `duration` | integer | <Sec /> | |
| `elevation_gain` | decimal | <Km /> | |
| `power` | integer | <Watts /> | Average power weighted by activity duration |

#### Parameters
| Name | Type | In | Description |
|-|-|-|-|
| `h` | string | query | Can be one of `1w, 4w, 1m, 3m, 6m, 1y`. If empty, returns best powers for all recorded activites.<br />Defaults to `1w` |

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
