import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./Home.module.scss";
import HomeLayout from "../components/Layouts/HomeLayout";
import CreatePost from "../components/CreatePost/CreatePost";
import FeedCard from "../components/Feed/FeedSocialPostsCard/FeedCard";
import Modal from "../components/UI/Modal";
import FeedSuggestionCard from "../components/Feed/FeedSuggestionCard/FeedSuggestionCard";

export default function Home() {
  const [modalState, setModalState] = useState(false);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("http://localhost:9000/posts");
        setPosts(response.data.posts);
        console.log(posts);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPosts();
  }, []);
  return (
    <>
      {modalState && <Modal modalState={setModalState} />}
      <HomeLayout>
        <div className={styles.contentWrapper}>
          <div className={styles.feedColumn}>
            <CreatePost modalState={setModalState} />
            {posts.map((postData, idx) => (
              <FeedCard
                key={idx}
                postData={postData}
                isAppretiationPost={""}
                appretiationReference={""}
                progress={""}
              />
            ))}
            <FeedCard
              isAppretiationPost={true}
              appretiationReference={""}
              progress={100}
            />
            {/* <FeedCard
              isAppretiationPost={true}
              appretiationReference={""}
              progress={40}
            />  */}
            
            {/* <FeedCard media={true} postTitle={"Weekly Goals Achieved"} /> */}
            <FeedCard requestDonation={true} postTitle={"Need Urgent Help"} />
            {/* <FeedCard />
            <FeedCard /> */}
          </div>
          <div className={styles.feedSuggestColumn}>
            <FeedSuggestionCard />
          </div>
        </div>
      </HomeLayout>
    </>
  );
}
