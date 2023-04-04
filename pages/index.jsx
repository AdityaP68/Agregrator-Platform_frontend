import { useState } from "react";
import styles from "./Home.module.scss";
import HomeLayout from "../components/Layouts/HomeLayout";
import CreatePost from "../components/CreatePost/CreatePost";
import FeedCard from "../components/Feed/FeedCard/FeedCard";
import Modal from "../components/UI/Modal";

export default function Home() {
  const [modalState, setModalState] = useState(false);
  return (
    <>
      {modalState && <Modal modalState={setModalState} />}
      <HomeLayout>
        <div className={styles.contentWrapper}>
          <div className={styles.feedColumn}>
            <CreatePost modalState={setModalState} />
            <FeedCard />
            <FeedCard />
            <FeedCard />
            <FeedCard />
            <FeedCard />
          </div>
          <div className={styles.feedSuggestColumn}>
            <div className={styles.item}/>
          </div>
        </div>
      </HomeLayout>
    </>
  );
}
