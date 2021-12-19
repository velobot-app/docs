import React, { useState } from "react"
import clsx from "clsx"
import PropTypes from "prop-types"
import styles from "./Unit.module.css"

const Unit = ({ abbrev, description }) => {
  const [visible, setVisible] = useState(false)

  return (
    <>
      <span
        className={styles.abbrev}
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
      >
        {abbrev}
      </span>
      <div className={clsx(styles.description, {
        [styles.visible]: visible
      })}>
        {description}
      </div>
    </>
  )
}

Unit.propTypes = {
  abbrev: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}

export default Unit
