import React from 'react'

import styles from './Footer.module.css'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>Clone of dev.to</div>
      <a href="https://github.com/sophi-li/dev-clone" target="__blank">
        Source code
      </a>
    </div>
  )
}

export default Footer
