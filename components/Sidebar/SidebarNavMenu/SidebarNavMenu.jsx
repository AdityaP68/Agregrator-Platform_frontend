import React, { useState, useMemo } from "react";
import { useRouter } from "next/router";
import GridViewIcon from "@mui/icons-material/GridView";
import ExploreIcon from "@mui/icons-material/Explore";
import SettingsIcon from "@mui/icons-material/Settings";
import GroupsIcon from "@mui/icons-material/Groups";
import StorefrontIcon from "@mui/icons-material/Storefront";
import styles from "./SidebarNavMenu.module.scss";
import NavLink from "./NavLink";

function SidebarNavMenu() {
  const router = useRouter();
  const activeLink = useMemo(() => {
    return router.pathname;
  }, [router.pathname]);

  return (
    <div className={styles.menu}>
      <NavLink
        active={`${activeLink === "/"}`}
        route={"/"}
        icon={<GridViewIcon className="sidebar-icon" />}
      >
        feed
      </NavLink>
      <NavLink
        active={`${activeLink.includes("/discover")}`}
        route={"/discover"}
        icon={<ExploreIcon className="sidebar-icon" />}
      >
        discover
      </NavLink>
      <NavLink
        active={`${activeLink.includes("/communities")}`}
        route={"/communities"}
        icon={<GroupsIcon className="sidebar-icon" />}
      >
        community
      </NavLink>
      <NavLink
        active={`${activeLink === "/market"}`}
        route={"/market"}
        icon={<StorefrontIcon className="sidebar-icon" />}
      >
        marketplace
      </NavLink>
      <NavLink
        active={`${activeLink === "/settings"}`}
        route={"/settings"}
        icon={<SettingsIcon className="sidebar-icon" />}
      >
        settings
      </NavLink>
    </div>
  );
}

export default SidebarNavMenu;
