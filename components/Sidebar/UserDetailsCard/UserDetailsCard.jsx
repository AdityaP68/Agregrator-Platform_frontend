import React from "react";
import styles from "./UserDetailsCard.module.scss";
import Image from "next/image";
import blueTickImg from "../../../public/images/bluetick.png";
import userImg from "../../../public/images/user.png";

function UserDetailsCard({user}) {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardItemRow1}>
        <div className={styles.profileImgWrapper}>
          <div className={styles.profileImg}>
            <Image src={userImg} height={37} alt={""} />
          </div>
          <div className={styles.greendot} />
        </div>

        <div className={styles.userdetails}>
          <p>
            {`${user?.firstName} ${user?.lastName}`}
            <span className={styles.verifiedTick}>
              <Image src={blueTickImg} height={14} alt={"blue tick"} />
            </span>
          </p>
          <span className={styles.username}>@{user?.username}</span>
        </div>
      </div>
      <div className={styles.cardItemRow2}>
        <div className={styles.userStatsItem}>
          <span className={styles.stat}>5.5k</span>
          <p className={styles.statType}>followers</p>
        </div>
        <div className={styles.userStatsItem}>
          <span className={styles.stat}>5.5k</span>
          <p className={styles.statType}>following</p>
        </div>
        <div className={styles.userStatsItem}>
          <span className={styles.stat}>5.5k</span>
          <p className={styles.statType}>posts</p>
        </div>
      </div>
    </div>
  );
}

export default UserDetailsCard;
