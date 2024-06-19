import React from "react";
import { IoMdCheckmark } from "react-icons/io";

const Footer = () => {
  return (
    <div className="py-4 border-t-2 border-t-gray-600">
      <div className=" justify-between pr-3 md:flex text-xs md:text-sm">
        <div className="items-start">
          <label className="text-white font-bold">Company Name</label>
          <ul className="py-3 text-sm">
            <li className="pt-2">About us</li>
            <li className="pt-2">Careers</li>
          </ul>
        </div>
        <div className="items-start">
          <label className="text-white font-bold">View Website in</label>
          <ul className="py-3 text-sm">
            <li className="pt-2 flex text-center items-center gap-2">
              <IoMdCheckmark /> English
            </li>
          </ul>
        </div>
        <div className="items-start">
          <label className="text-white font-bold">Need Help?</label>
          <ul className="py-3 text-sm">
            <li className="pt-2">Visit Help Center</li>
            <li className="pt-2">Share Feedback</li>
          
          </ul>
        </div>
        <div className="items-start">
          <label className="text-white font-bold">Connect with Us</label>
          <ul className="py-3 text-sm">
            <li className="pt-2">About us</li>
            <li className="pt-2">About us</li>
            <li className="pt-2">About us</li>
          </ul>
        </div>
      </div>

      <div className="footer-copyright text-center py-3">
        © 2020 Copyright:
        <a href="https://mdbootstrap.com/"> MDBootstrap.com</a>
      </div>
    </div>
  );
};

export default Footer;
