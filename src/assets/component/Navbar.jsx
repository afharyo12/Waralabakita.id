import "../../App.css";
import instagram from "../ig.png";
import whatsapp from "../wa.png";
import { useRef } from "react";
import { useState } from "react";
import target from "../target.png";
import notification from "../bell.png";
import favorite from "../favorite.png";
import test from "../test_people.jpg";
import search from "../search.png";

export const LandingPageNavbar = ({
  section1,
  section2,
  section3,
  section4,
  scrollToSection,
}) => {
  return (
    <nav className="bg-white dark:bg-gray-900 sticky top-0 w-full h-20 z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600 ">
      {/* ... your nav content remains the same ... */}
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 h-full">
        <a className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="title-company self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Waralabakita.id
          </span>
        </a>
        <div className="flex gap-x-2 items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <div
            className="group relative w-30 h-12 bg-gray-200 rounded-full dark:bg-gray-700 transition-colors 
              hover:bg-[linear-gradient(270deg,_#057CAD_0%,_#023347_100%)] 
              dark:hover:bg-[linear-gradient(270deg,_#057CAD_0%,_#023347_100%)]
              focus:outline-none focus:ring-0 cursor-pointer"
          >
            <span
              className="absolute top-0 start-5 h-full flex items-center ps-5 font-semibold text-black 
                              opacity-100 -translate-x-4 group-hover:text-white
                              group-hover:opacity-100 group-hover:translate-x-4
                              transition-all duration-300 ease-in-out"
            >
              Daftar
            </span>
            <div
              className="absolute top-1 end-1 bg-cyan-950 border rounded-full h-10 w-10 transition-all duration-300 
                              ease-in-out group-hover:-translate-x-18 group-hover:bg-teal-500 flex items-center justify-center"
            >
              <svg
                className="w-4.5 h-4.5 text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </div>
          </div>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className=" inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg 
                          md:hidden hover:bg-gray-100  focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 
                          dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          Masuk
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="cursor-pointer flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a
                onClick={() => scrollToSection(section1)}
                className="block py-2 px-3 text-gray-900 rounded-sm md:bg-transparent md:p-0 "
              >
                Home
              </a>
            </li>
            <li>
              <a
                onClick={() => scrollToSection(section2)}
                className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Tentang Kami
              </a>
            </li>
            <li>
              <a
                onClick={() => scrollToSection(section3)}
                className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Benefit
              </a>
            </li>
            <li>
              <a
                onClick={() => scrollToSection(section4)}
                className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Katalog
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export const HomePageNavbar = () => {
  return (
    <nav className="bg-white dark:bg-gray-900 sticky top-0 w-full h-20 z-20 top-0 start-0  ">
      {/* ... your nav content remains the same ... */}
      <div className="max-w-screen-xl gap-x-4 flex flex-wrap items-center justify-center mx-auto h-full">
        <a className="flex rtl:space-x-reverse ">
          <span className="title-company  self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Waralabakita.id
          </span>
        </a>

        <div>Kategori</div>

        <div class="hidden  w-100 lg:block">
          <div class="relative w-full max-w-lg">
            <input
              type="text"
              placeholder="Cari nama, kategori, atau modal waralaba..."
              class="w-full rounded-full border border-cyan-950 py-5 px-3 text-sm text-gray-700 placeholder-cyan-950 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center justify-center bg-cyan-950 rounded-full bg-black w-11 h-11 text-white  focus:outline-none"
              aria-label="Cari"
            >
              <img src={search} alt="Search icon" className="w-5 h-5" />
              
            </button>
          </div>
        </div>

        <div class="flex items-center gap-x-4">
        <div className="w-11 h-11 border-1 border-gray-200 flex items-center justify-center rounded-full  bg-white flex-shrink-0 shadow-[0_3px_3px_rgba(0,0,0,0.15)]">
          <img src={notification} alt="Notification icon" className="w-5 h-5" />
        </div>

        <div className="w-11 h-11 border-1 border-gray-200 flex items-center justify-center rounded-full  bg-white flex-shrink-0 shadow-[0_3px_3px_rgba(0,0,0,0.15)]">
          <img src={favorite} alt="Favorite icon" className="w-5 h-5" />
        </div>

          <div
            className="group relative w-45 h-12 border-1 border-gray-200 rounded-full dark:bg-gray-700 transition-colors shadow-[0_3px_3px_rgba(0,0,0,0.15)]
"
          >
            <span
              className="absolute top-0 start-8 h-full text-cyan-950 flex items-center ps-5 font-semibold text-black 
"
            >
              Budi Santosa
            </span>
            <div
              className="absolute mask-radial-at-center mask-radial-from-100% top-2 start-2 bg-cyan-950 border rounded-full h-8 w-8  flex items-center justify-center"
            >
              <img src={test} alt="Favorite icon" className="w-full h-full" />
            </div>
          </div>
        </div>

      </div>
    </nav>
  );
};

export default HomePageNavbar;
