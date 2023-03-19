import React from "react";
import styles from "./PostsCard.module.scss";

function PostsCard() {
  return (
    <div className={styles.postsCardWrapper}>
      <div className={styles.authorDetailsRow}></div>
      <div className={styles.postContentWrapper}></div>
      <div className={styles.postsSocials}></div>
    </div>
  );
}

export default PostsCard;
