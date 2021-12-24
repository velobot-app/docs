import React from "react"
import clsx from "clsx"
import styles from "./AuthenticationBadge.module.css"

const AuthenticationBadge = ({ required }) => {
  return (
    <div className={clsx(styles.badge, { [styles.required]: required })}>
      {required ? "Auth required" : "Auth optional"}
    </div>
  )
}

export default AuthenticationBadge
