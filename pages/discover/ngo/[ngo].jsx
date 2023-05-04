import React, { useState } from "react";
import HomeLayout from "../../../components/Layouts/HomeLayout";
import CommunityHeader from "../../../components/Community/CommunityHeader";
import FeedCard from "../../../components/Feed/FeedSocialPostsCard/FeedCard";
import CreatePost from "../../../components/CreatePost/CreatePost";
import styles from "./NGOPage.module.scss";
import { useCookies } from "react-cookie";
import TransactionLogs from "../../../components/NGOPage/TransactionLogs";

function NGOPage() {
  const cookies = useCookies();
  const posts = [1, 2, 3, 4, 5];
  const [listState, setListState] = useState("posts");
  //console.log(cookies[0].user)
  return (
    <HomeLayout>
      <div className={styles.contentWrapper}>
        <CommunityHeader user={cookies[0].user} setListState={setListState} />
        {listState === "posts" ? (
          posts.map((val) => <FeedCard key={val} user={cookies[0].user} />)
        ) : (
          <TransactionLogs />
        )}
      </div>
    </HomeLayout>
  );
}

export default NGOPage;
