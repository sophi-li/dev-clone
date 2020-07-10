import React from "react";

import UserTimeContainer from "../UserTimeContainer";
import TitleTagContainer from "../TitleTagContainer";

import styles from "./Articles.module.css";

const Articles = ({ articles }) => {
  const { cover_image } = articles;
  return (
    <div className={styles.colorContainer}>
      <div className={styles.container}>
        {cover_image !== null ? (
          <img className={styles.image} src={cover_image} alt="cover" />
        ) : (
          <div></div>
        )}
        <UserTimeContainer userTime={articles} />
        <TitleTagContainer timeTag={articles} />
      </div>
    </div>
  );
};

export default Articles;
