import React from "react";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import PlaceIcon from "@mui/icons-material/Place";
import ImageIcon from "@mui/icons-material/Image";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";
import styles from "./CreatePost.module.scss";
import Image from "next/image";
import logoImg from '../../public/images/user.png'

function CreatePost({ modalState }) {
  return (
    <div className={styles.container}>
      <div className={styles.textareaRow}>
        <div className={styles.userImgWrapper}>
          <div className={styles.userImg} >
            <Image src={logoImg} height={45} alt={'logo'} />
          </div>
        </div>
        <div className={styles.textEditorContainer}>
          <div
            className={styles.inputWrapper}
            onClick={() => {
              console.log("clicked");
              modalState((v) => !v);
            }}
          >
            <input type={"text"} placeholder="Start posting in this group" />
          </div>
          <div className={styles.editorOptions}></div>
        </div>
      </div>
      <div className={styles.attachmentOptionsRow}>
        <div className={styles.optionsWrapper}>
          <div className={styles.options}>
            <CameraAltIcon />
          </div>
          <div className={styles.options}>
            <ImageIcon />
          </div>
          <div className={styles.options}>
            <AttachFileIcon />
          </div>
          <div className={styles.options}>
            <PlaceIcon />
          </div>
          <div className={styles.options}>
            <SentimentVerySatisfiedIcon />
          </div>
        </div>
        <div className={styles.postBtnWrapper}>
          <button>Post</button>
        </div>
      </div>
    </div>
  );
}

export default CreatePost;
