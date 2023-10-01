import React, { useState } from "react";
import { useSelector } from "react-redux";
import doggoHubImage from "../assets/images/doggohub.jpg";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const Navbar = () => {
  const Links = [
    { name: "HOME", link: "/" },
    { name: "HISTORY", link: "/history" },
    { name: "CART", link: "/cart" },
  ];

  const [open, setOpen] = useState(false);

  const cartItems = useSelector((state) => state.cart?.items);

  const cartItemCount = cartItems?.length;

  return (
    <div className="shadow-md w-full fixed top-0 left-0 z-10">
      <div className="md:flex items-center justify-center bg-white py-4 md:px-10 px-7">
        {/* logo section */}
        <Link to="/">
          <div className="font-bold text-2xl cursor-pointer flex items-center gap-1">
            <img
              src={doggoHubImage}
              alt="DoggoHub"
              width="40px"
              height="40px"
            />
            <span className="text-blue-600">DoggoHub</span>
          </div>
        </Link>
        {/* Menu icon */}
        <div
          onClick={() => setOpen(!open)}
          className="absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7"
        >
          {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
        </div>
        {/* linke items */}
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-12" : "top-[-490px]"
          }`}
        >
          {Links.map((link, index) => (
            <li key={index} className="md:ml-8 md:my-0 my-7 font-semibold">
              <Link
                to={link.link}
                className="text-gray-800 hover:text-blue-400 duration-500"
              >
                {link.name}
                {link.name === "CART" && cartItemCount > 0 && (
                  <span className="text-red-500 ml-1 rounded-full bg-gray-200 px-2 py-1">
                    {cartItemCount}
                  </span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
