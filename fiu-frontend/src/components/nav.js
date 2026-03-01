"use client";

import Link from "next/link";
import { useState } from "react";

export default function Nav() {
  const [teamsOpen, setTeamsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = () => {
    setMenuOpen(false);
    setTeamsOpen(false);
  };

  return (
    <nav className="w-[95%] sm:w-[90%] md:w-[85%] lg:w-[80%] mx-auto border-b border-black font-sans px-4 sm:px-8 md:px-20 py-2 md:py-3">
      
      <div className="flex items-center justify-between md:hidden w-full">
        <button
          className="text-2xl focus:outline-none"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <span>&#10005;</span> : <span>&#9776;</span>}
        </button>
      </div>

      <ul className="hidden md:flex justify-between items-center text-base font-bold tracking-wide">
        <li className="cursor-pointer hover:text-blue-700 transition-colors duration-150">
          <Link href="/">HOME</Link>
        </li>
        <li
          className="relative group cursor-pointer"
          tabIndex={0}
          onMouseEnter={() => setTeamsOpen(true)}
        >
          <span className="flex items-center gap-1 hover:text-blue-700 transition-colors duration-150 select-none">
            TEAMS
            <span className="text-sm transform transition-transform duration-200 group-hover:rotate-180">
              ▾
            </span>
          </span>
          <ul
            className={`absolute top-full left-0 mt-1 ${
              teamsOpen ? "block" : "hidden"
            } bg-white border border-gray-300 shadow-lg w-max min-w-[150px] rounded-md z-10`}
            onMouseEnter={() => setTeamsOpen(true)}
            onMouseLeave={() => setTeamsOpen(false)}
          >
            <li className="px-4 py-2 hover:bg-gray-100 transition-colors duration-150">
              <Link href="/team/current">Current Members</Link>
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 transition-colors duration-150">
              <Link href="/team/alumni">Alumni</Link>
            </li>
          </ul>
        </li>
        <li className="cursor-pointer hover:text-blue-700 transition-colors duration-150">
          <Link href="/research">RESEARCH AREA</Link>
        </li>
        <li className="cursor-pointer hover:text-blue-700 transition-colors duration-150">
          <Link href="/facilities">FACILITIES</Link>
        </li>
        <li className="cursor-pointer hover:text-blue-700 transition-colors duration-150">
          <Link href="/teaching">TEACHING</Link>
        </li>
      </ul>

      <div
        className={`md:hidden fixed top-0 left-0 h-full w-[75%] max-w-xs bg-white z-50 shadow-lg transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-4 py-4 border-b border-gray-200">
          <span className="text-lg font-bold">FIU GRAMMR</span>
          <button
            className="text-2xl focus:outline-none"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
          >
            &#10005;
          </button>
        </div>
        <ul className="flex flex-col gap-1 px-6 py-4 text-base font-semibold">
          <li
            onClick={handleNav}
            className="py-2 cursor-pointer hover:text-blue-700 border-b"
          >
            <Link href="/">HOME</Link>
          </li>
          <li>
            <button
              className="w-full flex items-center justify-between hover:text-blue-700 py-2 border-b"
              onClick={() => setTeamsOpen(!teamsOpen)}
            >
              <span>TEAMS</span>
              <span
                className={`transform transition-transform duration-200 ${teamsOpen ? "rotate-180" : ""}`}
              >
                ▾
              </span>
            </button>

            <ul
              className={`flex flex-col ml-2 pl-2 border-l border-gray-200 transition-all duration-300 ${
                teamsOpen
                  ? "max-h-32 opacity-100"
                  : "max-h-0 opacity-0 overflow-hidden"
              }`}
            >
              <li
                onClick={handleNav}
                className="py-2 cursor-pointer hover:text-blue-700"
              >
                <Link href="/team/current">Current Members</Link>
              </li>
              <li
                onClick={handleNav}
                className="py-2 cursor-pointer hover:text-blue-700"
              >
                <Link href="/team/alumni">Alumni</Link>
              </li>
            </ul>
          </li>
          <li
            onClick={handleNav}
            className="py-2 cursor-pointer hover:text-blue-700 border-b"
          >
            <Link href="/research">RESEARCH AREA</Link>
          </li>
          <li
            onClick={handleNav}
            className="py-2 cursor-pointer hover:text-blue-700 border-b"
          >
            <Link href="/facilities">FACILITIES</Link>
          </li>
          <li
            onClick={handleNav}
            className="py-2 cursor-pointer hover:text-blue-700"
          >
            <Link href="/teaching">TEACHING</Link>
          </li>
        </ul>
      </div>

      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-40 md:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </nav>
  );
}
