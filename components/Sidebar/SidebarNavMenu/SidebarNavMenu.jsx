import React, { useState, useMemo } from "react";
import { useRouter } from "next/router";
import styles from "./SidebarNavMenu.module.scss";
import NavLink from "./NavLink";

function SidebarNavMenu() {
  const router = useRouter();
  const activeLink = useMemo(() => {
    return router.pathname;
  }, [router.pathname]);


  return (
    <div className={styles.menu}>
      <NavLink active={`${activeLink === "/"}`} route={"/"}>
        feed
      </NavLink>
      <NavLink active={`${activeLink.includes("/discover")}`} route={"/discover"}>
        discover
      </NavLink>
      <NavLink
        active={`${activeLink.includes("/communities")}`}
        route={"/communities"}
      >
        community
      </NavLink>
      <NavLink active={`${activeLink === "/market"}`} route={"/market"}>
        marketplace
      </NavLink>
      <NavLink active={`${activeLink === "/settings"}`} route={"/settings"}>
        settings
      </NavLink>
    </div>
  );
}

export default SidebarNavMenu;
