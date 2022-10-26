import React from "react";
import Logo from "../../assets/logo.svg";
import InstaIcon from "../../assets/icon-instagram.svg";
import PinterestIcon from "../../assets/icon-pinterest.svg";
import TwitterIcon from "../../assets/icon-twitter.svg";
import FacebookIcon from "../../assets/icon-facebook.svg";

const Footer = () => {
  return (
    <div className="grid grid-cols-1 justify-center bg-darkViolet pt-12 text-center child:mb-8 md:grid-cols-5 md:flex-row md:px-12">
      <div className="fill-current mx-auto fill-white">
        <img className="fill-current fill-white" src={Logo} alt="logo" />
      </div>

      <div>
        <h2 className="font-bold text-white">Features</h2>
        <ul className="child:text-gray">
          <li>Link Shortening</li>
          <li>Branded Links</li>
          <li>Analytics</li>
        </ul>
      </div>

      <div>
        <h2 className="font-bold text-white">Resources</h2>
        <ul className="child:text-gray">
          <li>Blog</li>
          <li>Developers</li>
          <li>Supports</li>
        </ul>
      </div>

      <div>
        <h2 className="font-bold text-white">Company</h2>
        <ul className="child:text-gray">
          <li>About</li>
          <li>Our Team</li>
          <li>Careers</li>
          <li>Contact</li>
        </ul>
      </div>

      <div>
        <ul className="flex justify-between px-24 md:flex-col md:px-12 md:child:mb-2 lg:flex-row lg:child:mb-0">
          <li>
            <img src={FacebookIcon} alt="facebook icon" />
          </li>
          <li>
            <img src={TwitterIcon} alt="twitter icon" />
          </li>
          <li>
            <img src={PinterestIcon} alt="pinterest icon" />
          </li>
          <li>
            <img src={InstaIcon} alt="instagram icon" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
