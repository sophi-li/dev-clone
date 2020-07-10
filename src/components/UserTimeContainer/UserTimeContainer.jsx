import React from "react";

import moment from "moment";

import styles from "./UserTimeContainer.module.css";

const UserTimeContainer = ({ userTime }) => {
  const { user, created_at } = userTime;

  let time = created_at.substring(0, 10);

  return (
    <div className={styles.container}>
      <div>
        <img
          className={styles.profileImage}
          src={user.profile_image_90}
          alt="profile avatar"
        />
      </div>
      <div className={styles.nameTimeContainer}>
        <div className={styles.name}>{user.name}</div>
        <div className={styles.time}>{time}</div>
      </div>
    </div>
  );
};

export default UserTimeContainer;
