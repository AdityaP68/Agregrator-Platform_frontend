import React from "react";
import Image from "next/image";
import ngo11 from "../../../../public/images/feed/ngo11.png";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import styles from "../FeedCard.module.scss";

function FeedCardHeader({ author }) {
  console.log("author", author);
  return (
    <div className={styles.postHeader}>
      <div className={styles.namecard}>
        <div className={styles.profileImg}>
          <Image src={ngo11} height={32} alt={""} />
        </div>
        <div className={styles.details}>
          <p
            className={styles.authorName}
          >{`${author?.firstName} ${author?.lastName}`}</p>
          <p className={styles.username}>{"@" + author?.username}</p>
        </div>
      </div>
      <div className={styles.viewMoreBtn}>
        <MoreHorizIcon className={styles.moreBtn} />
      </div>
    </div>
  );
}

export default FeedCardHeader;
