import React from "react";
import styles from "./FeedCard.module.scss";
import FeedCardText from "./FeedCardText";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FeedCardMedia from "./FeedCardMedia";
import SocialBtns from "./SocialBtns";

function PostsCard() {
  return (
    <div className={styles.postsCardWrapper}>
      <div className={styles.postHeader}>
        <div className={styles.namecard}>
          <div className={styles.profileImg}></div>
          <div className={styles.details}>
            <p className={styles.authorName}>Alison Burgers</p>
            <p className={styles.username}>{"@"}alladin897</p>
          </div>
        </div>
        <div className={styles.viewMoreBtn}>
          <MoreHorizIcon className={styles.moreBtn}/>
        </div>
      </div>
      <FeedCardText />
      <FeedCardMedia />

      <div className={styles.postFooter}>
        <SocialBtns />
      </div>
    </div>
  );
}

export default PostsCard;
