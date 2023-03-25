import { useState } from "react";
import styles from "./Home.module.scss";
import HomeLayout from "../components/Layouts/HomeLayout";
import CreatePost from "../components/CreatePost/CreatePost";
import PostsCard from "../components/Posts/PostsCard";
import Modal from "../components/UI/Modal";

export default function Home() {
  const [modalState, setModalState] = useState(false);
  return (
    <>
      {modalState && <Modal modalState={setModalState} />}
      <HomeLayout>
        <div className={styles.contentWrapper}>
          <CreatePost modalState={setModalState} />
          <PostsCard />
          <PostsCard />
          <PostsCard />
        </div>
      </HomeLayout>
    </>
  );
}
