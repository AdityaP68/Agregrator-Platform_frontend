import React from "react";
import Image from "next/image";
import styles from "./Sidebar.module.scss";
import UserDetailsCard from "./UserDetailsCard/UserDetailsCard";
import logoImg from "../../public/images/logo3.png";
import SidebarNavMenu from "./SidebarNavMenu/SidebarNavMenu";

function Sidebar({user}) {
  
  return (
    <div className={styles.container}>
      <div className={styles.sidebarContentWrapper}>
        <div className={styles.logo}>
          <Image src={logoImg} height={40} alt={"aggregrator"} />
          <span className={styles.logoTitle}>Aggregator</span>
        </div>
        <UserDetailsCard user={user}/>
        <SidebarNavMenu/>
      </div>
    </div>
  );
}

export default Sidebar;
