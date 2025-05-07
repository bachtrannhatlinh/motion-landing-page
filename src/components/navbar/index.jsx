import React from "react";
import { Button } from "@/components/ui/button";
import logoMotion from "@/assets/images/motion-logo.png";

const NavBar = () => {
  return (
    <nav className="bg-white flex flex-row justify-between items-center px-16 shadow-md h-18">
      <div>
        <ul className="flex flex-row gap-4 text-black_202937 font-inter font-bold text-base leading-[150%]">
          <li>Home</li>
          <li>Fuel Card</li>
          <li>Factoring</li>
          <li>Fleet Management</li>
        </ul>
      </div>
      <div>
        <img src={logoMotion} alt="logo" />
      </div>
      <div className="flex flex-row gap-4">
        <Button variant="blueOutline">Get Started</Button>
        <Button variant="default">Login</Button>
      </div>
    </nav>
  );
};

export default NavBar;
