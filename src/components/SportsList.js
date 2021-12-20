import React, { useState } from "react"
import clsx from "clsx"
import PropTypes from "prop-types"
import styles from "./SportsList.module.css"

const SportsList = ({ sports }) => {
  const [visible, setVisible] = useState(false)

  return (
    <>
      <span
        className={styles.trigger}
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
      >
        {`${sports.length} sport${sports.length !== 1 ? "s" : ""}`}
      </span>
      <div className={clsx(styles.list, {
        [styles.visible]: visible
      })}>
        {sports.join(", ")}
      </div>
    </>
  )
}

SportsList.propTypes = {
  sports: PropTypes.arrayOf(PropTypes.oneOf([
    "cycling",
    "running",
    "walking",
    "fishing"
  ])).isRequired
}

export default SportsList
