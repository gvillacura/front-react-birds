import React, { useRef } from "react";
import "./header.css";
import { Icon } from "@iconify/react";
import searchLine from "@iconify-icons/ri/search-line";
import alignRight from "@iconify-icons/ri/align-right";
import closeCircleLine from "@iconify-icons/ri/close-circle-line";

const Header = () => {
  const menu = useRef(null);

  const openMenu = () => {
    menu.current.classList.remove("hide");
  };

  const closeMenu = () => {
    menu.current.classList.add("hide");
  };

  return (
    <header className="header">
      <div className="search-container">
        <div>
          <Icon icon={searchLine} />
        </div>{" "}
        <input type="text" />
      </div>
      <div className="search-mobile-container">
        <div>
          <Icon icon={searchLine} />
        </div>{" "}
        <input type="text" />
      </div>
      <div className="menu-icon-container" onClick={openMenu}>
        <Icon icon={alignRight} />
      </div>
      <div ref={menu} className="hide">
        <Icon icon={closeCircleLine} onClick={closeMenu} />
      </div>
    </header>
  );
};

export default Header;
