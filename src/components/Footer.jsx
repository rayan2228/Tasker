import React from "react";
import Container from "./layouts/Container";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="py-6 md:py-8">
      <Container>
        <p className="text-center text-xs text-[#6A6A6A] lg:text-sm">
          Copyright ©{year} | All rights reserved by{" "}
          <a
            className="underline transition-colors hover:text-white font-workbanch tracking-[5px]"
            href="https://www.linkedin.com/in/rayan2228/"
            target="_blank"
            rel="linkedin"
          >
            rayan
          </a>
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
