import React from "react";
import styles from "./Infobar.module.scss";
import CollapsableList from "../CollapsableList/CollapsableList";
// import SquareIconCard from '../Cards/ListItemCard'
import ListItemCard from "../Cards/ListItemCard";
import NGOListItemCard from "../Cards/NGOListItemCard";

function Infobar() {
  return (
    <div className={styles.infobarContainer}>
        <div className={styles.filler}></div>
      <CollapsableList title={"Top Communities"}>
        <ListItemCard cardSize={"sm"} iconType={"square"}>
          Save a life
        </ListItemCard>
        <ListItemCard cardSize={"sm"} iconType={"square"}>
          GirlChild Education
        </ListItemCard>
        <ListItemCard cardSize={"sm"} iconType={"square"}>
          StrayDogs Care
        </ListItemCard>
        <ListItemCard cardSize={"sm"} iconType={"square"}>
          Homeless Refuge
        </ListItemCard>
        <ListItemCard cardSize={"sm"} iconType={"square"}>
          Oldage Homes
        </ListItemCard>
      </CollapsableList>
      <CollapsableList title={"Suggested People"}>
        <ListItemCard iconType={"circle"} cardSize={"sm"}>
          Save a life
        </ListItemCard>
        <ListItemCard iconType={"circle"} cardSize={"sm"}>
          GirlChild Education
        </ListItemCard>
        <ListItemCard iconType={"circle"} cardSize={"sm"}>
          StrayDogs Care
        </ListItemCard>
        <ListItemCard iconType={"circle"} cardSize={"sm"}>
          Homeless Refuge
        </ListItemCard>
        <ListItemCard iconType={"circle"} cardSize={"sm"}>
          Oldage Homes
        </ListItemCard>
      </CollapsableList>
      <CollapsableList title={"Suggested NGOs"}>
        <NGOListItemCard />
        <NGOListItemCard />
        <NGOListItemCard />
      </CollapsableList>
    </div>
  );
}

export default Infobar;
