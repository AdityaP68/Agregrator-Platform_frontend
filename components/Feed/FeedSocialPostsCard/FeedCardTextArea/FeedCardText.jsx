import React, { useState } from "react";
import styles from "./FeedCardText.module.scss";
import { truncateString } from "../../../../utils/stringHelpers";
import AppretiationPostText from "./AppretiationPostText";

function FeedCardText({ isAppretiationPost, appriciationText }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const text = `We are constantly amazed by the dedication and passion of the Muskaan team,
   as well as their volunteers and supporters. Their willingness to go above and beyond to 
   help those in need is truly remarkable, and we are grateful for all that they do.`;

  const truncatedText = truncateString(text, 150);
  const shouldTruncate = truncatedText !== text;

  return (
    <div className={styles.postContent}>
      {isAppretiationPost ? (
        <>
          {isExpanded ? text : truncatedText}
          {shouldTruncate && (
            <button
              className={styles.readMoreBtn}
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? "Read Less" : "Read More"}
            </button>
          )}
        </>
      ) : (
        <AppretiationPostText>
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
