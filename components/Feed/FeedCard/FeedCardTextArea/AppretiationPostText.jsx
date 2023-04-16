import React from "react";
import styles from "./AppretiationPostText.module.scss"

function AppretiationPostText({ children, referenceCampaign }) {
  return (
    <>
    <h4 className={styles.subHeadings}>Appretiation Post: </h4>
      <p>{children}</p>
    <h4 className={styles.subHeadings}>In Response To: </h4>
    {referenceCampaign}
    </>
  );
}

export default AppretiationPostText;
