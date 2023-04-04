import React from "react";
import styles from "./SocialBtns.module.scss";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import MessageIcon from "@mui/icons-material/Message";
import ShareIcon from "@mui/icons-material/Share";

function SocialBtns() {
  return (
    <div className={styles.socialBtnsWrapper}>
      <div className={styles.socialBtns}>
        <ThumbUpIcon className={styles.socialIcon} />
        <p>Like</p>
      </div>
      <div className={styles.socialBtns}>
        <MessageIcon className={styles.socialIcon} />
        <p>Comment</p>
      </div>
      <div className={styles.socialBtns}>
        <ShareIcon className={styles.socialIcon} />
        <p>Share</p>
      </div>
    </div>
  );
}

export default SocialBtns;
