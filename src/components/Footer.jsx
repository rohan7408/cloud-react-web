import React from "react";
import {
  FaDribbble,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full mt-24 bg-slate-900 text-gray-300 py-2 px-2">
      <div className="max-w-[1240px] mx-auto grid grid-cols-2  md:grid-cols-6 broder-b-2 border-gray-600 py-8">
        <div>
          <h6 className="font-bold uppercase pt-2">Solutions</h6>
          <ul>
            <li className="py-1">Marketing</li>
            <li className="py-1">Analytics</li>
            <li className="py-1">Commerce</li>
            <li className="py-1">Data</li>
            <li className="py-1">Cloud</li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold uppercase pt-2">Support</h6>
          <ul>
            <li className="py-1">Pricing</li>
            <li className="py-1">Documentation</li>
            <li className="py-1">Guides</li>
            <li className="py-1">API</li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold uppercase pt-2">Company</h6>
          <ul>
            <li className="py-1">About</li>
            <li className="py-1">Blog</li>
            <li className="py-1">Jobs</li>
            <li className="py-1">Team</li>
            <li className="py-1">Partners</li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold uppercase pt-2">Legal</h6>
          <ul>
            <li className="py-1">Claim</li>
            <li className="py-1">Polices</li>
            <li className="py-1">Terms</li>
            <li className="py-1">Conditions</li>
          </ul>
        </div>

        <div className="col-span-2 pt-8 md:pt-2">
          <p className="font-bold uppercase">Subcribe to our newsletter</p>
          <p className="py-4">
            The latest news, articles and resources sent to your inbox
          </p>
          <form className="flex flex-col sm:flex-row" action="">
            <input
              className="w-full p-2 mr-4 rounded-md mb-4"
              type="email"
              name=""
              id=""
              placeholder="Enter Your Email"
            />
            <button className="p-2 mb-4 ">Subcribe</button>
          </form>
        </div>
      </div>

      <div className="flex flex-col max-w-[1240px] px-2 py-4 m-auto justify-between sm:flex-row text-center text-gray-500">
        <p className="py-4">2023 Rohan Poudel, LLC, ALL RIGHTS RESERVED</p>
        <div className="flex justify-between sm:w-[300px] pt-4 text-2xl">
          <FaFacebook />
          <FaGithub />
          <FaTwitter />
          <FaInstagram />
          <FaDribbble />
        </div>
      </div>
    </div>
  );
};

export default Footer;
