import React from "react";
import styles from "./FeedCardText.module.scss";
import { truncateString } from "../../../utils/stringHelpers";

function FeedCardText() {
  const text = `Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
    Harum, cupiditate fugiat, facere laborum dicta culpa inventore laudantium sint 
    libero autem delectus impedit mollitia accusamus tempora id necessitatibus at quos 
    accusantium esse incidunt asperiores voluptates? Optio vel autem unde alias facere?`;
  return <div className={styles.postContent}>{truncateString(text, 230)}</div>;
}

export default FeedCardText;
