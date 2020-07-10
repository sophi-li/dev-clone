import React from 'react'

import styles from './TitleTagContainer.module.css'

const TitleTagContainer = ({ timeTag }) => {
  const {
    url,
    title,
    tag_list,
    positive_reactions_count,
    comments_count,
  } = timeTag

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <a className={styles.titleLink} href={url}>
          {title}
        </a>
      </div>
      <div className={styles.tagContainer}>
        {tag_list.map((elem) => (
          <div className={styles.tag}>
            <span className={styles.pound}>#</span>
            {elem}
          </div>
        ))}
      </div>
      <div className={styles.reactionContainer}>
        <div className={styles.reactions}>
          {positive_reactions_count} reactions
        </div>
        <div className={styles.comments}>{comments_count} comments</div>
      </div>
    </div>
  )
}

export default TitleTagContainer
