'use client';

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-[var(--background)] text-[var(--foreground)] px-4 py-10">
      <div className="flex flex-col md:flex-row items-center gap-10 md:gap-20 bg-[var(--background)] rounded-3xl shadow-2xl p-8 md:p-16 w-full max-w-4xl border border-gray-200 dark:border-zinc-900 transition-all">
        <div className="flex-shrink-0 flex flex-col items-center">
          <svg
            width="110"
            height="110"
            viewBox="0 0 110 110"
            fill="none"
            className="mb-5"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="42" y="10" width="26" height="65" rx="13" fill="#3B82F6" opacity="0.1"/>
            <ellipse cx="55" cy="88" rx="25" ry="15" fill="#FEF08A" opacity="0.75"/>
            <rect x="49" y="25" width="12" height="30" rx="6" fill="#fde68a" />
            <rect x="51" y="11" width="8" height="15" rx="4" fill="#3B82F6"/>
            <circle cx="55" cy="7" r="3" fill="#3B82F6" opacity="0.3" />
            <circle cx="65" cy="12" r="2" fill="#3B82F6" opacity="0.3" />
            <circle cx="46" cy="16" r="1.5" fill="#3B82F6" opacity="0.3" />
            <ellipse cx="55" cy="104" rx="28" ry="4" fill="#f1f5f9" />
          </svg>
          <span className="text-xs text-gray-400 dark:text-gray-500 mt-2">FIU GRAMMR Lab</span>
        </div>
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 text-blue-900 dark:text-blue-100 drop-shadow">
            404: Page Not Found
          </h1>
          <p className="text-base sm:text-lg mb-5 max-w-md text-gray-700 dark:text-gray-300">
            Oops! The page you’re looking for can’t be found.<br/>
            It might be under development, renamed, or moved elsewhere.
          </p>
          <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto justify-center md:justify-start mt-5">
            
            <a
              href="mailto:info@fiu-grammr-lab.edu"
              className="px-6 py-2 border border-yellow-400 text-yellow-800 bg-yellow-100 rounded-full font-semibold hover:bg-yellow-200 transition-all text-sm"
            >
              Contact Lab
            </a>
            <Link
              href="/"
              className="px-6 py-2 border border-gray-300 text-gray-800 rounded-full font-semibold hover:bg-gray-100 transition-all text-sm hidden md:inline"
            >
              Return Home
            </Link>
          </div>
          <div className="mt-8 text-xs text-gray-400 dark:text-gray-500">
            <span>
              If you believe this is an error, please reach out to the FIU GRAMMR Lab administrator.
            </span>
          </div>
        </div>
      </div>
      <footer className="mt-10 text-center text-xs text-gray-400 dark:text-gray-500 max-w-xl">
        <hr className="my-4 border-gray-200 dark:border-zinc-700" />
        &copy; {new Date().getFullYear()} FIU GRAMMR Lab. All rights reserved.
      </footer>
    </div>
  );
}
