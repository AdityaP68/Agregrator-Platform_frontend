import React, { useEffect, useState } from "react";
import HomeLayout from "../../../components/Layouts/HomeLayout";
import CommunityHeader from "../../../components/Community/CommunityHeader";
import FeedCard from "../../../components/Feed/FeedSocialPostsCard/FeedCard";
import CreatePost from "../../../components/CreatePost/CreatePost";
import styles from "./NGOPage.module.scss";
import { useCookies } from "react-cookie";
import TransactionLogs from "../../../components/NGOPage/TransactionLogs";
import { useRouter } from "next/router";
import axios from "axios";

function NGOPage() {
  const router = useRouter();
  const { ngo } = router.query;
  console.log("this is ngo ID", ngo);
  const [postList, setPostList] = useState([]);
  const [ngoUser, setNgoUser] = useState();

  const [listState, setListState] = useState("posts");

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`http://localhost:9000/users/${ngo}`);
        //console.log("check the following response", response?.data?.user);
        setNgoUser(response?.data?.user);
      } catch (error) {
        console.log(error);
      }
    };

    const fetchPosts = async () => {
      try {
        const response = await axios.get(`http://localhost:9000/posts/${ngo}`);
        //console.log("check the following response plz", response?.data?.posts);
        setPostList(response?.data?.posts);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUser();
    fetchPosts();
  }, []);

  console.log("this is the new one", ngoUser);

  return (
    <HomeLayout>
      <div className={styles.contentWrapper}>
        <CommunityHeader user={ngoUser} setListState={setListState} />
        {listState === "posts" ? (
          postList.map((post, idx) => (
            <FeedCard postData={post} key={idx} user={ngoUser} />
          ))
        ) : (
          <TransactionLogs />
        )}
      </div>
    </HomeLayout>
  );
}

export default NGOPage;
