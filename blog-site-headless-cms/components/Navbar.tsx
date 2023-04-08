import React from "react";
import Link from "next/link";
export default function Navbar() {
  return (
    <>
      <div className="bg-slate-700 shadow-lg relative top-0">
        <nav className="w-11/12  sm:w-10/12 lg:w-7/12 mx-auto flex justify-between text-slate-200 py-6  ">
          <h1 className="font-extrabold text-2xl">ahsanWrites</h1>
          <ul className="flex gap-x-6 font-semibold text-lg">
            <Link href={`/`} className="hover:text-slate-400 transition-all">
              <li>Home</li>
            </Link>
            <Link href={`/`} className="hover:text-slate-400 transition-all">
              <li>Blogs</li>
            </Link>
            <Link href={`/`} className="hover:text-slate-400 transition-all">
              <li>Contact</li>
            </Link>
          </ul>
        </nav>
      </div>
    </>
  );
}
