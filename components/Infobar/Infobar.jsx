import React from "react";
import styles from "./Infobar.module.scss";
import CollapsableList from "../CollapsableList/CollapsableList";
// import SquareIconCard from '../Cards/ListCard'
import ListCard from "../Cards/ListCard";
import NGOListCard from "../Cards/NGOListCard";
import ngo1 from "../../public/images/feed/ngo1.png";
import ngo2 from "../../public/images/feed/ngo2.jpeg";
import ngo3 from "../../public/images/feed/ngo3.jpeg";
import ngo4 from "../../public/images/feed/ngo4.png";
import ngo9 from "../../public/images/feed/ngo9.png";

function Infobar() {
  return (
    <div className={styles.infobarContainer}>
      <div className={styles.filler}></div>
      <CollapsableList title={"Top Communities"}>
        <ListCard cardSize={"sm"} iconType={"square"} imgsrc={ngo1}>
          Save a life
        </ListCard>
        <ListCard cardSize={"sm"} iconType={"square"} imgsrc={ngo2}>
          GirlChild Education
        </ListCard>
        <ListCard cardSize={"sm"} iconType={"square"} imgsrc={ngo3}>
          StrayDogs Care
        </ListCard>
        <ListCard cardSize={"sm"} iconType={"square"} imgsrc={ngo4}>
          Homeless Refuge
        </ListCard>
        <ListCard cardSize={"sm"} iconType={"square"} imgsrc={ngo9}>
          Oldage Homes
        </ListCard>
      </CollapsableList>
      <CollapsableList title={"Suggested People"}>
        <ListCard iconType={"circle"} cardSize={"sm"} imgsrc={ngo1}>
          Save a life
        </ListCard>
        <ListCard iconType={"circle"} cardSize={"sm"} imgsrc={ngo2}>
          GirlChild Education
        </ListCard>
        <ListCard iconType={"circle"} cardSize={"sm"} imgsrc={ngo3}>
          StrayDogs Care
        </ListCard>
        <ListCard iconType={"circle"} cardSize={"sm"} imgsrc={ngo4}>
          Homeless Refuge
        </ListCard>
        <ListCard iconType={"circle"} cardSize={"sm"} imgsrc={ngo9}>
          Oldage Homes
        </ListCard>
      </CollapsableList>
      <CollapsableList title={"Suggested NGOs"}>
        <NGOListCard
          imgsrc={ngo2}
          username={"homeless shelter"}
          description={
            "Providing shelter, hope, and support for homeless individuals."
          }
        />
        <NGOListCard
          imgsrc={ngo2}
          username={"OldAge care"}
          description={
            "Dedicated to providing compassionate elderly care services."
          }
        />

        {/* <NGOListCard /> */}
      </CollapsableList>
    </div>
  );
}

export default Infobar;
