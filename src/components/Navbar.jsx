import React from "react";
import logo from "../assets/lws-logo-en.svg";
import Container from "./layouts/Container";
const Navbar = () => {
  return (
    <nav className="py-6 md:py-8 fixed top-0 w-full !bg-[#191D26] z-50">
      <Container>
        <div className="flex items-center justify-between mx-auto gap-x-6">
          {/* Logo */}
          <a href="/">
            <img className="h-[45px]" src={logo} alt="Lws" />
          </a>
          {/* Logo Ends */}
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
