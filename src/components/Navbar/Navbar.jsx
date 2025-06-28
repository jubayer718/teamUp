"use client";
import Link from "next/link";
import { useContext, useEffect } from "react";
import Logo from "../../app/assets/svgs/Logo";
import { useUser } from "../../context/UserContext";
import { usePathname } from "next/navigation";
import useAdmin from "../Admin/useAdmin";

const Navbar = () => {
  const { user, logOut, loading } = useUser();
  const pathName = usePathname();
  const [admin, isAdminLoading, refetch, error] = useAdmin();
 
  if (isAdminLoading || loading) {
    return (
      <div className="flex items-center justify-center my-12">
        <span className="loading loading-bars loading-xl"></span>
      </div>
    );
  }

  const NavLink = [
    { name: "Home", path: "/" },
    { name: "Create Room", path: "/roomChat" },
    { name: "Solution", path: "/solutions" },
    {
      name: "Get Started",
      path: admin ? "/adminDashboard" : "/dashboard",
    },
  ];

  const menuItem = (
    <>
      {NavLink.map((link) => (
        <li key={link.name}>
          <Link
            href={link.path}
            className={`font-semibold text-xl ${
              pathName === link.path
                ? "text-[#595CFF] underline"
                : "text-gray-700"
            }`}
          >
            {link.name}
          </Link>
        </li>
      ))}
      <li>
        {user?.email ? (
          <button
            onClick={logOut}
            className="font-bold text-xl btn bg-[#595cffab]"
          >
            Logout
          </button>
        ) : (
          <Link
            className="font-bold text-xl btn bg-[#595cffab]"
            href="/login"
          >
            Login
          </Link>
        )}
      </li>
    </>
  );

  return (
    <div className="bg-base-200 px-14 fixed z-30 top-0 w-full shadow-sm">
      <div className="navbar container mx-auto">
        <div className="navbar-start w-full lg:hidden">
          <div className="dropdown justify-between flex w-full">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-14 w-52 p-2 shadow"
            >
              {menuItem}
            </ul>
          </div>

          <div className="">
            <Link
              className="flex ml-2 font-bold justify-center items-center"
              href="/"
            >
              <Logo />
              <h1 className="ml-2 text-xl text-[#595CFF]">TeamUp</h1>
            </Link>
          </div>
        </div>
        <div className="hidden lg:flex w-full justify-between">
          <div>
            <Link
              className="flex ml-2 font-bold justify-center items-center"
              href="/"
            >
              <Logo />
              <h1 className="ml-2 text-xl">TeamUp</h1>
            </Link>
          </div>
          <ul className="menu menu-horizontal px-1">{menuItem}</ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
