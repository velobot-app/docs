import React, { memo } from "react"
import Unit from "./Unit"

const Bpm = () => (
  <Unit abbrev="bpm" description="beats per minute" />
)

export default memo(Bpm)
