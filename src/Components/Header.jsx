import React, { useState } from "react";
import classes from "./../CSSmodules/Header.module.css";

const Header = () => {
  const [menu, setMenu] = useState(false);

  const menuhandler = () => {
    setMenu((prev) => !prev);
  };
  return (
    <div>
      <div className={classes.header}>
        <div>PORTFOLIO</div>

        <button onClick={menuhandler}>MENU</button>
      </div>
    </div>
  );
};

export default Header;
