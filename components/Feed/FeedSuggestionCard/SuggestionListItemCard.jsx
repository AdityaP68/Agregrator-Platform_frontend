import React from "react";
import styles from "./SuggestionListItemCard.module.scss";
import { truncateString } from "../../../utils/stringHelpers";

function SuggestionListItemCard({ name, username }) {
  return (
    <li className={styles.suggestionListItem}>
      <div className={styles.iconWrapper}>
        <span className={styles.icon}></span>
      </div>
      <div className={styles.title}>
        <p>{truncateString(name,22)}</p>
        <small>{"@" + username}</small>
      </div>
    </li>
  );
}

export default SuggestionListItemCard;
