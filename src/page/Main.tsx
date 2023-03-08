import React from "react";
import titleimg from "../img/maloLogo1.png";
import footerimg from "../img/maloLogo2.png";
import Info from "./Info";
import Contact from "./Contact";
import Artwork from "./Artwork";
import tw from "tailwind-styled-components";
import { useRef } from "react";

const Main = () => {
  const infoRef = useRef(null);
  const artworkRef = useRef(null);
  const contactRef = useRef(null);
  const headerRef = useRef<HTMLImageElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLImageElement>) => {
    const headerHeight = headerRef.current?.offsetHeight || 0;
    const sectionTop = ref.current?.offsetTop || 0;

    window.scrollTo({
      top: sectionTop - headerHeight,
      behavior: "smooth",
    });
  };
  // bg-gradient-to-b from-white via-white
  return (
    <>
      <header
        ref={headerRef}
        className="fixed z-10 top-0 left-0 right-0 flex flex-col items-center justify-center  pt-10 pb-10 bg-gradient-to-b from-white via-white to-transparent"
      >
        <button onClick={() => scrollToSection(headerRef)}>
          <img src={titleimg} alt="titelimg" ref={headerRef} />
        </button>
        <button
          className="focus:font-bold text-sm"
          onClick={() => scrollToSection(infoRef)}
        >
          Info
        </button>
        <button
          className="focus:font-bold text-sm"
          onClick={() => scrollToSection(artworkRef)}
        >
          Art Work
        </button>
        <button
          className="focus:font-bold text-sm"
          onClick={() => scrollToSection(contactRef)}
        >
          Contact
        </button>
      </header>
      <div className="min-h-screen py-10" />

      <Centerdiv>
        <section className="h-screen" ref={infoRef}>
          <Info />
        </section>
        <section className="h-screen" ref={artworkRef}>
          <Artwork />
        </section>
        <section className="h-screen" ref={contactRef}>
          <Contact />
        </section>
      </Centerdiv>

      <footer className="fixed bottom-0 left-0 right-0 flex justify-center">
        <div className="flex flex-col items-center mt-20">
          <img src={footerimg} alt="footerimg" className="w-14" />
          <p className="text-gray-600 text-sm mb-2">
            2022. MALO ALL RIGHTS RESERVED
          </p>
        </div>
      </footer>
    </>
  );
};

export default Main;

const Centerdiv = tw.div`
flex flex-col items-center justify-center 
`;
