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
      name: "ServerSide",
      href: "/serverside",
    },
    {
      name: "ClientSide",
      href: "/clientside",
    },
    {
      name: "Services",
      href: "/services",
    },
    {
      name: "About Us",
      href: "/aboutus",
    },
    {
      name: "Contact Us",
      href: "/contactus",
    },
  ];
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.js");
  }, []);
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" href="#">
          Dr. Vipin Classes
        </Link>
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
