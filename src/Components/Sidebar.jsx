import React from "react";
import { NavLink } from "react-router-dom";
import Image from "../assets/Images/my-avatar1.png";

const Sidebar = () => {
  return (
    <div className="sticky top-0 left-0 font-yujiMai bg-gray-800 text-white h-screen flex flex-col md:w-64 w-full p-4">
      <div>
        {/* Profile Picture */}
        <div className="max-w-[150px] mx-auto my-3">
          <img src={Image} alt="" className="rounded-[8%] mx-auto" />
        </div>

        {/* Profile Details */}
        <div className="text-left px-4">
          <h2 className="text-2xl font-bold mt-4">Md Anas Khan</h2>
          {/* Social Links */}
          <div>
            <ul className="flex justify-center space-x-6 mt-4 text-2xl">
              <li>
                <a href="https://www.facebook.com/honerabla.boyshanto" target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-facebook hover:text-gray-100"></i>
                </a>
              </li>
              <li>
                <a href="https://x.com/MdAnas0001" target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-twitter hover:text-gray-100"></i>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/md-anas-khan-b2122119b/" target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-linkedin hover:text-gray-100"></i>
                </a>
              </li>
              <li>
                <a href="https://github.com/MdAnaskhan0" target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-github hover:text-gray-100"></i>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/an_as0000/" target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-instagram hover:text-gray-100"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="p-4 text-gray-400 cursor-pointer mt-4">
        <ul className="space-y-4 text-lg">
          <li>
            <NavLink
              to="/"
              className="hover:text-gray-100 transition duration-500 ease-in-out flex items-center"
            >
              <i className="fa-solid fa-house mr-4"></i>Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className="hover:text-gray-100 transition duration-500 ease-in-out flex items-center"
            >
              <i className="fa-solid fa-user mr-4"></i>About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/resume"
              className="hover:text-gray-100 transition duration-500 ease-in-out flex items-center"
            >
              <i className="fa-solid fa-file mr-4"></i>Resume
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/portfolio"
              className="hover:text-gray-100 transition duration-500 ease-in-out flex items-center"
            >
              <i className="fa-solid fa-file-code mr-4"></i>Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              className="hover:text-gray-100 transition duration-500 ease-in-out flex items-center"
            >
              <i className="fa-solid fa-server mr-4"></i>Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="hover:text-gray-100 transition duration-500 ease-in-out flex items-center"
            >
              <i className="fa-solid fa-envelope mr-4"></i>Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
