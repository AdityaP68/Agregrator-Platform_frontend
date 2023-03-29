import React from "react";
import styles from "./PostsCard.module.scss";

function PostsCard() {
  return (
    <div className={styles.postsCardWrapper}>
      <div className={styles.postHeader}>
        <div className={styles.namecard}>
          <div className={styles.profileImg}></div>
          <div className={styles.details}>
            <p className={styles.authorName}>Alison Burgers</p>
            <p className={styles.username}>{'@'}alladin897</p>
          </div>
        </div>
      </div>
      
      <div className={styles.postContent}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum, cupiditate fugiat, facere laborum dicta culpa inventore laudantium sint libero autem delectus impedit mollitia accusamus tempora id necessitatibus at quos accusantium esse incidunt asperiores voluptates? Optio vel autem unde alias facere?
      </div>
      
      <div className={styles.postFooter}>
        
      </div>
    </div>
  );
}

export default PostsCard;
