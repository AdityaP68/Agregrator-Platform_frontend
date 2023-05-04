import React, { useEffect, useState } from "react";
import styles from "./FeedCard.module.scss";
import CardText from "./FeedCardTextArea/CardText";
import FeedCardMedia from "./FeedCardLayout/FeedCardMedia";
import SocialBtns from "./FeedCardLayout/SocialBtns";
import FeedCardHeader from "./FeedCardLayout/FeedCardHeader";
import DonationCard from "./FeedCardLayout/DonationCard";
import axios from "axios";

function PostsCard({
  isAppretiationPost,
  appretiationReference,
  media,
  requestDonation,
  postData,
}) {
  //console.log("this is postData", postData);
  const [author, setAuthor] = useState();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          `http://localhost:9000/users/${postData?.created_by}`
        );
        //console.log("check the following response", response?.data?.user);
        setAuthor(response?.data?.user);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUser();
  }, []);

  return (
    <div className={styles.postsCardWrapper}>
      <FeedCardHeader author={author} />

      <CardText
        isAppretiationPost={isAppretiationPost}
        appretiationReference={appretiationReference}
        requestDonation={requestDonation}
        postData={postData}
        author={author}
      />
      {media && <FeedCardMedia />}
      <div className={styles.postFooter}>
        <SocialBtns />
      </div>
    </div>
  );
}

export default PostsCard;
