import React, { useState } from "react";
import styles from "./CardText.module.scss";
import { truncateString } from "../../../../utils/stringHelpers";
import AppretiationPostText from "./AppretiationPostText";
import DonationCard from "../FeedCardLayout/DonationCard";
import FeedCardMedia from "../FeedCardLayout/FeedCardMedia";

function FeedCardText({
  isAppretiationPost,
  progress,
  requestDonation,
  postData,
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const text = postData?.description || "no description";

  const truncatedText = truncateString(text, 150);
  const shouldTruncate = truncatedText !== text;

  return (
    <div className={styles.postContent}>
      {!isAppretiationPost ? (
        <>
          <h4 className={styles.postTitle}>{postData?.title || "NO TITLE"}</h4>
          {isExpanded ? text : truncatedText}
          {shouldTruncate && (
            <button
              className={styles.readMoreBtn}
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? "Read Less" : "Read More"}
            </button>
          )}
          {requestDonation && <DonationCard style={{ marginTop: "1.5rem" }} />}
        </>
      ) : (
        <AppretiationPostText progress={progress}>
          {isExpanded ? text : truncatedText}
          {shouldTruncate && (
            <button
              className={styles.readMoreBtn}
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? "Read Less" : "Read More"}
            </button>
          )}
        </AppretiationPostText>
      )}
    </div>
  );
}

export default FeedCardText;
