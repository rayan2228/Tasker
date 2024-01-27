import React from "react";
import Container from "./layouts/Container";

const Footer = () => {
  return (
    <footer className="py-6 md:py-8">
      <Container>
        <p className="text-center text-xs text-[#6A6A6A] lg:text-sm">
          Copyright ©2024 | All rights reserved by Learn with Sumit
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
