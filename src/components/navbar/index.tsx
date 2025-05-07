import { useState } from "react";
import { Button } from "@/components/ui/button";
import logoMotion from "@/assets/images/motion-logo.png";
import { Icon } from "@iconify/react";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white flex items-center justify-between px-2 lg:px-16 shadow-md h-18 fixed top-0 z-10 w-full">
      {/* Hamburger icon - Hiện dưới lg */}
      <div className="lg:hidden">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <Icon
            icon={isMenuOpen ? "mdi:close" : "mdi:menu"}
            width="24"
            height="24"
            className="text-black_202937"
          />
        </button>
      </div>

      {/* Logo */}
      <div className="flex justify-center lg:justify-start flex-1 lg:flex-none">
        <div className="absolute left-10 top-3 lg:static lg:left-auto lg:top-auto">
          <img src={logoMotion} alt="logo" />
        </div>
      </div>

      {/* Nav Menu - chỉ hiện ở lg+ */}
      <div className="hidden lg:flex flex-row gap-4 items-center">
        <ul className="flex flex-row gap-4 text-black_202937 font-inter font-bold text-base leading-[150%]">
          <li>Home</li>
          <li>Fuel Card</li>
          <li>Factoring</li>
          <li>Fleet Management</li>
        </ul>
      </div>

      {/* Button group */}
      <div className="flex flex-row gap-4">
        <Button variant="blueOutline">Get Started</Button>
        <Button variant="default">Login</Button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md p-4 flex flex-col items-start gap-2 lg:hidden z-20">
          <ul className="flex flex-col gap-2 text-black_202937 font-inter font-bold text-base leading-[150%]">
            <li>Home</li>
            <li>Fuel Card</li>
            <li>Factoring</li>
            <li>Fleet Management</li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
