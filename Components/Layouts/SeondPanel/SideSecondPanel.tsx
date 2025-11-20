import React, { useEffect, useState } from "react";
import { DownIcon, RightIcon } from "../../SVG/IconsSVG";
import SidePanelSubLink from "./SidePanelSubLink";
import { useMediaQuery } from "react-responsive";
import { useRouter } from "next/router";

// -------------------------------------------
// Types
// -------------------------------------------
interface MenuItem {
  name: string;
  link: string;
  file: string;
  icon: JSX.Element;
}

interface MenuGroup {
  title: string;
  stateKey: string;
  items: MenuItem[];
}

interface SideSecondPanelProps {
  closeSideMenu: () => void;
}

// -------------------------------------------
// Menu Config (Cleaner & Scalable)
// -------------------------------------------
const MENU_GROUPS: MenuGroup[] = [
  {
    title: "About",
    stateKey: "aboutOpen",
    items: [
      {
        name: "index.html",
        link: "/",
        file: "index.html",
        icon: <span className="icons8-html-5"></span>,
      },
      {
        name: "experience.css",
        link: "/Experience",
        file: "experience.css",
        icon: <span className="icons8-css3"></span>,
      },
      {
        name: "skills.js",
        link: "/Skills",
        file: "skills.js",
        icon: <span className="icons8-javascript"></span>,
      },
      {
        name: "projects.ts",
        link: "/Projects",
        file: "projects.ts",
        icon: <span className="icons8-typescript"></span>,
      },
    ],
  },
  {
    title: "Side Projects",
    stateKey: "projectsOpen",
    items: [
      { name: "Ayedot.js", link: "/Projects/1", file: "1", icon: <span className="icons8-nodejs"></span> },
      { name: "Ayefan.js", link: "/Projects/2", file: "2", icon: <span className="icons8-react"></span> },
      { name: "Onwos.ts", link: "/Projects/3", file: "3", icon: <span className="icons8-angularjs"></span> },
      { name: "fireflow.js", link: "/Projects/4", file: "4", icon: <span className="icons8-react"></span> },
      { name: "Shortlit.js", link: "/Projects/5", file: "5", icon: <span className="icons8-nodejs"></span> },
      { name: "Xport.js", link: "/Projects/6", file: "6", icon: <span className="icons8-react"></span> },
    ],
  },
  {
    title: "Contact",
    stateKey: "contactOpen",
    items: [
      {
        name: "Email.tsx",
        link: "/Email",
        file: "Email",
        icon: <span className="icons8-gmail"></span>,
      },
    ],
  },
  {
    title: "Misc",
    stateKey: "miscOpen",
    items: [
      { name: "Hobbies.cpp", link: "/Hobbies", file: "Hobbies", icon: <span className="icons8-cplusplus"></span> },
      { name: "Blogs.py", link: "/Blogs", file: "Blogs", icon: <span className="icons8-typescript"></span> },
      { name: "Gaming.sln", link: "/Gaming", file: "Gaming", icon: <span className="icons8-c-sharp"></span> },
      { name: "Anime.jsx", link: "/Anime", file: "Anime", icon: <span className="icons8-react"></span> },
      { name: "Learning.ts", link: "/Learning", file: "Learning", icon: <span className="icons8-angularjs"></span> },
      { name: "Startup.js", link: "/Startup", file: "Startup", icon: <span className="icons8-nodejs"></span> },
    ],
  },
];

// -------------------------------------------
// Component
// -------------------------------------------
export const SideSecondPanel: React.FC<SideSecondPanelProps> = ({ closeSideMenu }) => {
  const router = useRouter();
  const pathSegment = router.asPath.split("/").pop() || "index.html";

  const [activeSubLink, setActiveSubLink] = useState<string>("");

  useEffect(() => {
    setActiveSubLink(pathSegment);
  }, [pathSegment]);

  const isMobile = useMediaQuery({ query: "(max-width: 943px)" });

  // Collapsible state
  const [openStates, setOpenStates] = useState<Record<string, boolean>>({
    aboutOpen: true,
    projectsOpen: true,
    contactOpen: true,
    miscOpen: true,
  });

  const toggleGroup = (key: string) => {
    setOpenStates((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  // Handle Navigation
  const handleClick = (link: string) => {
    router.push(link);
    if (isMobile) closeSideMenu();
  };

  return (
    <div className="menu-option overflow-hidden">
      <h5 className="myweight">EXPLORER</h5>

      <div className="mb-5 pb-5 scrollbar" style={{ height: "84%", overflowY: "scroll" }}>
        {MENU_GROUPS.map((group) => (
          <div key={group.title} className="menu-drop pt-1 pb-1">
            {/* Group Header */}
            <div className="box-click">
              <div className="flex pl-1 cursor-pointer" onClick={() => toggleGroup(group.stateKey)}>
                <div className="myweight flex-min topPadd">
                  {openStates[group.stateKey] ? <DownIcon /> : <RightIcon />}
                </div>
                <span className="myweight flex-auto">{group.title}</span>
              </div>

              {/* Collapse Content */}
              {openStates[group.stateKey] && (
                <div className="show-pre">
                  <ul>
                    {group.items.map((item) => (
                      <li
                        key={item.file}
                        onClick={() => handleClick(item.link)}
                        className={`smallSide ${activeSubLink === item.file ? "active" : ""}`}
                      >
                        <SidePanelSubLink name={item.name} link={item.link} icon={item.icon} />
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      {!isMobile && (
        <ul className="bottom-links pl-2">
          <li className="border-b border-gray-500">
            <span className="text-gray-400">All Rights Reserved.</span>
          </li>
          <li>
            <span className="text-gray-400">Ⓒ Copyright 2023.</span>
          </li>
        </ul>
      )}
    </div>
  );
};

export default SideSecondPanel;
