"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
const NavBar = () => {
  const path = usePathname();
  const navLink = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "SSG",
      href: "/ssg",
    },
    {
      name: "SSR",
      href: "/ssr",
    },
    {
      name: "Read Info",
      href: "/readinfo",
    },
    {
      name: "Send Info",
      href: "/sendinfo",
    },
    {
      name: "Image",
      href: "/images",
    },
    {
      name: "Fonts",
      href: "/fonts",
    },
  ];
  useEffect(() => {
    require("bootstrap");
  }, []);
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <h3 className="navbar-brand">Dr. Vipin Classes</h3>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div id="navbarNav">
          <ul className="navbar-nav">
            {navLink.map((link) => {
              const isActive = path === link.href;
              return (
                <li className="nav-item">
                  <Link
                    className={
                      isActive
                        ? "nav-link text-danger fw-bold active"
                        : "nav-link text-success"
                    }
                    aria-current="page"
                    href={link.href}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
