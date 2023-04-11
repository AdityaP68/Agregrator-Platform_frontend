import React from "react";
import styles from "./FeedSuggestionCard.module.scss";
import SuggestionListItemCard from "./SuggestionListItemCard";
import { truncateString } from "../../../utils/stringHelpers";

function FeedSuggestionCard() {
  return (
    <div className={styles.suggestionCardWrapper}>
      <h6 className={styles.listHeading}>Trending Right Now</h6>
      <ul className={styles.suggestionList}>
        <SuggestionListItemCard
          name={"Brighter Future Foundation"}
          username={"testUser1234"}
        />
        <SuggestionListItemCard
          name={"HopeWorks Global"}
          username={"testUser1234"}
        />
        <SuggestionListItemCard
          name={"Compassion for All Organization"}
          username={"testUser1234"}
        />
        <SuggestionListItemCard
          name={"Global Empowerment Network"}
          username={"testUser1234"}
        />
        <SuggestionListItemCard
          name={"Community Catalysts Association"}
          username={"testUser1234"}
        />
        <SuggestionListItemCard
          name={"Hope for Tomorrow Foundation"}
          username={"testUser1234"}
        />
        <SuggestionListItemCard
          name={"Health Access Advocacy Group"}
          username={"testUser1234"}
        />
        <SuggestionListItemCard
          name={"Global Empowerment Network"}
          username={"testUser1234"}
        />
      </ul>
    </div>
  );
}

export default FeedSuggestionCard;
