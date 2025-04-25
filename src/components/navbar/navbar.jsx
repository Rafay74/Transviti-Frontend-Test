import React, { useState } from "react";
import { NAVBAR_ITEMS } from "../../data";
import logo from "../../assets/images/logo.svg";
import search from "../../assets/images/search.svg";
import avatar from "../../assets/images/avatar.svg";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <nav className="flex items-center justify-between px-4 sm:px-6 md:px-10 lg:px-20 h-20 bg-white shadow relative z-50">
        <div className="flex items-center gap-4 sm:gap-8">
          <img src={logo} loading="lazy" alt="logo" />

          <div className="hidden lg:flex items-center gap-6">
            {NAVBAR_ITEMS.map((menu, index) => (
              <div
                key={index}
                className={`hover:cursor-pointer ${
                  index === 0
                    ? "text-primary font-semibold"
                    : "text-textSecondary"
                }`}
              >
                {menu.label}
              </div>
            ))}
          </div>
        </div>

        
        <div className="flex items-center gap-2 sm:gap-3 md:gap-4 space-y-0">

      
          <div className="relative w-28 sm:w-40 md:w-48 lg:w-64 rounded-[8px] overflow-hidden">
            <span className="absolute inset-y-0 left-3 flex items-center">
              <img
                src={search}
                loading="lazy"
                alt="search"
                className="w-4 h-4"
              />
            </span>
            <input
              type="search"
              placeholder="Search"
              aria-label="Search"
              className="pl-10 pr-4 py-2 w-full bg-secondary text-sm outline-none placeholder:text-gray-400"
            />
          </div>

          <button className="bg-primary px-2.5 py-1.5 text-white rounded-lg text-xs sm:px-4 sm:py-2 sm:text-base text-sm">
  Resume Builder
</button>

          

          <img
            src={avatar}
            loading="lazy"
            alt="avatar"
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full object-contain hover:cursor-pointer"
          />

          <button
            className="lg:hidden focus:outline-none"
            onClick={() => setIsDrawerOpen(true)}
          >
            <svg
              className="w-6 h-6 text-primary"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </nav>

      {isDrawerOpen && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-40 z-40"
            onClick={() => setIsDrawerOpen(false)}
          />
          <div className="fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 p-6 flex flex-col gap-6">
            <div className="flex justify-end">
              <button onClick={() => setIsDrawerOpen(false)}>
                <svg
                  className="w-6 h-6 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            {NAVBAR_ITEMS.map((menu, index) => (
              <div
                key={index}
                className={`text-textSecondary hover:cursor-pointer ${
                  index === 0 ? "font-semibold text-primary" : ""
                }`}
              >
                {menu.label}
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;
