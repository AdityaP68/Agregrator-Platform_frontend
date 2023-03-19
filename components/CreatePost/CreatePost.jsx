import React from "react";
import styles from "./CreatePost.module.scss";

function CreatePost() {
  return (
    <div className={styles.container}>
      <div className={styles.userImgWrapper}>
        <div className={styles.userImg}/>
      </div>
      <div className={styles.textEditorContainer}>
        <div className={styles.inputWrapper}>
          <input type={"text"} placeholder="Start posting in this group" />
        </div>
        <div className={styles.editorOptions}></div>
      </div>
    </div>
  );
}

export default CreatePost;
