import React from "react";
import styles from "./FeedCard.module.scss";
import CardText from "./FeedCardTextArea/CardText";
import FeedCardMedia from "./FeedCardLayout/FeedCardMedia";
import SocialBtns from "./FeedCardLayout/SocialBtns";
import FeedCardHeader from "./FeedCardLayout/FeedCardHeader";
import DonationCard from "./FeedCardLayout/DonationCard";

function PostsCard({
  isAppretiationPost,
  appretiationReference,
  progress,
  media,
  postTitle,
  requestDonation
}) {
  return (
    <div className={styles.postsCardWrapper}>
      <FeedCardHeader />

      <CardText
        isAppretiationPost={isAppretiationPost}
        appretiationReference={appretiationReference}
        progress={progress}
        postTitle={postTitle}
        requestDonation={requestDonation}
      />
      {media && <FeedCardMedia />}
      <div className={styles.postFooter}>
        <SocialBtns />
      </div>
    </div>
  );
}

export default PostsCard;
