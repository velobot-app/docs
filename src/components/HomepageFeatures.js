import React from "react"
import PropTypes from "prop-types"
import clsx from "clsx"
import styles from "./HomepageFeatures.module.css"
import mountain from "../../static/img/undraw_docusaurus_mountain.svg"
import tree from "../../static/img/undraw_docusaurus_tree.svg"

const FeatureList = [
  {
    title: "Your Active Companion",
    Svg: mountain,
    description: (
      <>
        Every Man&apos;s Land is a hub for athletes, explorers, and adventurers.
        Capture, analyze, and share your achievements with the world!
      </>
    ),
  },
  {
    title: "Fitness Platform Sync",
    Svg: tree,
    description: (
      <>
        Integrate with your favorite fitness platforms and apps, so you can
        immediately view and share your activities.
      </>
    ),
  },
]

const Feature = ({ Svg, title, description }) => {
  return (
    <div className={clsx("col col--6")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}

Feature.propTypes = {
  Svg: PropTypes.any,
  title: PropTypes.string,
  description: PropTypes.string,
}

const HomepageFeatures = () => {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default HomepageFeatures
