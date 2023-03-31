import React from "react";
import styles from "./Infobar.module.scss";
import CollapsableList from "../CollapsableList/CollapsableList";
// import SquareIconCard from '../Cards/ListCard'
import ListCard from "../Cards/ListCard";
import NGOListCard from "../Cards/NGOListCard";

function Infobar() {
  return (
    <div className={styles.infobarContainer}>
        <div className={styles.filler}></div>
      <CollapsableList title={"Top Communities"}>
        <ListCard cardSize={"sm"} iconType={"square"}>
          Save a life
        </ListCard>
        <ListCard cardSize={"sm"} iconType={"square"}>
          GirlChild Education
        </ListCard>
        <ListCard cardSize={"sm"} iconType={"square"}>
          StrayDogs Care
        </ListCard>
        <ListCard cardSize={"sm"} iconType={"square"}>
          Homeless Refuge
        </ListCard>
        <ListCard cardSize={"sm"} iconType={"square"}>
          Oldage Homes
        </ListCard>
      </CollapsableList>
      <CollapsableList title={"Suggested People"}>
        <ListCard iconType={"circle"} cardSize={"sm"}>
          Save a life
        </ListCard>
        <ListCard iconType={"circle"} cardSize={"sm"}>
          GirlChild Education
        </ListCard>
        <ListCard iconType={"circle"} cardSize={"sm"}>
          StrayDogs Care
        </ListCard>
        <ListCard iconType={"circle"} cardSize={"sm"}>
          Homeless Refuge
        </ListCard>
        <ListCard iconType={"circle"} cardSize={"sm"}>
          Oldage Homes
        </ListCard>
      </CollapsableList>
      <CollapsableList title={"Suggested NGOs"}>
        <NGOListCard />
        <NGOListCard />
        {/* <NGOListCard /> */}
      </CollapsableList>
    </div>
  );
}

export default Infobar;
