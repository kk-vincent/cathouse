import React from "react";
import { Link } from "react-router-dom";
import "../../style/Hero/FontStyle.css";
import "../../style/Hero/overflow.scss";

const Nav_lin = () => {
  return (
    <div className="flex justify-between px-10 pt-10 pb-5">
      <h1 className="items-center text-xl font-black text-[40px]">
        <ins>Cat_House</ins>
      </h1>

      <ul className="flex items-center gap-8 text-xs just-me-again-down-here-regular text-[32px]">
        <li className="nav-hover">
          <Link to="/">HOME</Link>
        </li>
        <li className="nav-hover">
          <Link to="/About">ABOUT</Link>
        </li>
        <li className="nav-hover">
          <Link to="/Menu">MENU</Link>
        </li>
        <li className="border-2 border-[var(--color-border)] rounded-full px-2 py-1 nav-hover-login ">
          <Link to="/Login">
            <i className="bi bi-box-arrow-in-right mx-3"></i>
            <span className="mx-2">LOGIN</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav_lin;
