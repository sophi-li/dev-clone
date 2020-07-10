import React from "react";

import styles from "./TitleTagContainer.module.css";

const TitleTagContainer = ({ timeTag }) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>{timeTag.title}</div>
      <div className={styles.tagContainer}>
        {timeTag.tag_list.map((elem) => (
          <div className={styles.tag}>
            <span className={styles.pound}>#</span>
            {elem}
          </div>
        ))}
      </div>
      <div className={styles.reactionContainer}>
        <div className={styles.reactions}>
          {timeTag.positive_reactions_count} reactions
        </div>
        <div className={styles.comments}>{timeTag.comments_count} comments</div>
      </div>
    </div>
  );
};

export default TitleTagContainer;
