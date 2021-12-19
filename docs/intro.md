---
sidebar_position: 1
---

# Introduction
The EML API is accessed over HTTPS from https://api.everymansland.com. All
data is transmitted as JSON. The MIME type is `application/vnd.eml.v1+json`,
and should be explicitly set in the `Accept` header for requests.
```
Accept: application/vnd.eml.v1+json
```
:::note
Some endpoints (e.g. file upload and downloads) accept nor return JSON, and
consequently do not use the MIME type shown above.
:::
