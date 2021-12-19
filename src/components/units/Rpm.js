import React, { memo } from "react"
import Unit from "./Unit"

const Rpm = () => (
  <Unit abbrev="rpm" description="revolutions per minute (or strokes, steps, etc.)" />
)

export default memo(Rpm)
