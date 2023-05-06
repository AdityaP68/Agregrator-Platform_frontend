import HomeLayout from "../../components/Layouts/HomeLayout";
import SecondaryLayout from "../../components/Layouts/SecondaryLayout";
import LandingSection from "../../components/Discover/Landing/Landing";
import SearchResultList from "../../components/Discover/SearchResults/SearchResultList";
import styles from "./index.module.scss";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Index() {
  const [searchName, setSearchName] = useState("");
  const [ngoList, setNgoList] = useState([]);

  useEffect(() => {
    const fetchNGO = async () => {
      try {
        const response = await axios.get(
          `http://localhost:9000/users/ngo/search?name=${searchName}`
        );
        //console.log(response.data.users);
        setNgoList(response.data.users)
      } catch (error) {
        console.log(error);
      }
    };
    fetchNGO();
  }, []);

  //console.log("this is the list", ngoList)
  console.log(searchName)

  return (
    <SecondaryLayout>
      <div className={styles.contentWrapper}>
        <LandingSection setSearchName={setSearchName}/>
        <SearchResultList ngoList={ngoList}/>
      </div>
    </SecondaryLayout>
  );
}
