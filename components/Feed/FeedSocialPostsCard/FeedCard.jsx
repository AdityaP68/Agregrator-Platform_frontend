import React from "react";
import styles from "./FeedCard.module.scss";
import FeedCardText from "./FeedCardTextArea/FeedCardText";

import FeedCardMedia from "./FeedCardLayout/FeedCardMedia";
import SocialBtns from "./FeedCardLayout/SocialBtns";
import FeedCardHeader from "./FeedCardLayout/FeedCardHeader";


function PostsCard({isAppretiationPost}) {
  return (
    <div className={styles.postsCardWrapper}>
      <FeedCardHeader/>

      <FeedCardText isAppretiationPost={isAppretiationPost} />
      {!isAppretiationPost && <FeedCardMedia />}

      <div className={styles.postFooter}>
        <SocialBtns />
      </div>
    </div>
  );
}

export default PostsCard;
