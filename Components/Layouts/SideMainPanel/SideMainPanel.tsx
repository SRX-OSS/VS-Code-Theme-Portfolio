import Link from "next/link";
import { useState } from "react";
import { AvatarIcon, Copyicon } from "../../SVG/IconsSVG";
import styles from "../Layout.module.css";

interface ISideMainPanel {
  mainActiveSideButton: boolean;
  toggleSideMainMenu: () => void;
}

export const SideMainPanel: React.FC<ISideMainPanel> = (props: any) => {
  const [selectedSideTab, setselectedSideTab] = useState("main");

  return (
    <div className="side-header text-center">
      <ul className="side-header-menu text-center relative h-full ">
        <li
          className={`${
            props.mainActiveSideButton && selectedSideTab === "main"
              ? "active"
              : ""
          } ${styles.faicons}`}
          title="Sidebar"
          onClick={() => {
            props.toggleSideMainMenu();
            setselectedSideTab("main");
          }}
        >
          <Copyicon width={25} height={25} />
        </li>

        <Link href="/">
          <li
            className={`${styles.faicons}  `}
            style={{ position: "absolute", bottom: "0" }}
            title="About"
          >
            <div className={`cursor-pointer`} title="About">
              <AvatarIcon width={30} height={30} />
            </div>
          </li>
        </Link>
      </ul>
    </div>
  );
};
