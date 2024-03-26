import React from "react";
import Container from "./layouts/Container";
const Navbar = () => {
  return (
    <nav className="py-6 md:py-8 fixed top-0 w-full !bg-[#191D26] z-50">
      <Container>
        <div className="flex items-center justify-between mx-auto gap-x-6">
          {/* Logo */}
          <h1 className="tracking-[10px] capitalize text-4xl font-workbanch">
            rayan
          </h1>
          {/* Logo Ends */}
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
