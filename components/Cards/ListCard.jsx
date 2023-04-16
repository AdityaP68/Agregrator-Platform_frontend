import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./ListCard.module.scss";

function ListCard({ iconType, cardSize, children, imgsrc }) {
  return (
    <Link href={"#"}>
      <div
        className={
          (cardSize === "sm" && styles.linkWrapperSM) ||
          (cardSize === "md" && styles.linkWrapperMD)
        }
      >
        <div
          className={
            (iconType === "circle" && styles.circularLinkIcon) ||
            (iconType === "square" && styles.squareLinkIcon)
          }
        >
          <Image src={imgsrc} height={25} alt={""}/>
        </div>
        <p className={styles.linkTitle}>{children}</p>
      </div>
    </Link>
  );
}

export default ListCard;
