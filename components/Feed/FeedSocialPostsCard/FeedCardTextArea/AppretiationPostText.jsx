import React from "react";
import styles from "./AppretiationPostText.module.scss"
import DonationCard from "../FeedCardLayout/DonationCard";

function AppretiationPostText({ children, referenceCampaign, progress }) {
  return (
    <>
    <h4 className={styles.subHeadings}>Appretiation Post: </h4>
      <p>{children}</p>
    <h4 className={styles.subHeadings}>In Response To: </h4>
    <DonationCard progress={progress}/>
    </>
  );
}

export default AppretiationPostText;
