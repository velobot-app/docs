---
sidebar_position: 3
---

# Units
Every Man's Land stores a wide variety of data, and to avoid any confusion,
the units for each are stored as follows, without exception:

* **Weight:** kilograms (kg)
* **Distance:** kilometers (km)
* **Power:** watts (W)
* **Speed:** kilometers per hour (km/h)
* **Cadence:** revolutions/steps/strokes/etc. per minute (rpm, spm, ...)
* **Fluid volume:** liters (L)
* **Energy:** kilocalories (kcal or Cal)
* **Temperature:** degrees Celsius (C)
* **Heart rate:** beats per minute (bpm)
* **Duration:** seconds (s)

Geographic data (such as location) is transmitted as GeoJSON.

:::note
Altitude is stored as a distance, i.e. in kilometers (km)!
:::

Users can still elect to view their data in metric or imperial systems (for
relevant data points), but the API always uses the units.
