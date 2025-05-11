import logoMotion from "@/assets/images/motion-logo.png";
import { Icon } from "@iconify/react";

const Footer = () => {
  return (
    <div className="gap-20 py-20 px-2 lg:px-16 bg-white ">
      <div className="flex flex-row justify-between items-center mb-20">
        <img src={logoMotion} alt="logo" className="h-auto object-cover"/>
        <ul className="hidden lg:flex flex-row gap-8 text-black_202937 font-inter font-bold text-base leading-[150%]">
          <li>Home</li>
          <li>Fuel Card</li>
          <li>Factoring</li>
          <li>Fleet Management</li>
        </ul>
        <div className="flex flex-row gap-1">
          <Icon
            icon="mdi:facebook"
            width="24"
            height="24"
            className="text-black_202937"
          />
          <Icon
            icon="mdi:instagram"
            width="24"
            height="24"
            className="text-black_202937"
          />
          <Icon
            icon="mdi:twitter"
            width="24"
            height="24"
            className="text-black_202937"
          />
          <Icon
            icon="mdi:linkedin"
            width="24"
            height="24"
            className="text-black_202937"
          />
          <Icon
            icon="mdi:youtube"
            width="24"
            height="24"
            className="text-black_202937"
          />
        </div>
      </div>
      <div className="border-t border-black_202937 pt-10">
        <ul className="grid grid-cols-2 lg:grid-cols-1 justify-items-start gap-4 text-black_202937 font-inter text-base leading-[150%] text-14 lg:flex lg:flex-row lg:items-center lg:justify-center">
          <li>© 2024 Motion. All rights reserved.</li>
          <li>Privacy Policy</li>
          <li>Terms of Service</li>
          <li>Cookies Settings</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
