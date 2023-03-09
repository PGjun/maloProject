import React, { useState, useRef } from "react";
import titleimg from "../img/maloLogo1.png";
import footerimg from "../img/maloLogo2.png";
import Info from "./Info";
import Contact from "./Contact";
import Artwork from "./Artwork";
import tw from "tailwind-styled-components";

const Main = () => {
  const infoRef = useRef<HTMLImageElement>(null);
  const artworkRef = useRef<HTMLImageElement>(null);
  const contactRef = useRef<HTMLImageElement>(null);
  const headerRef = useRef<HTMLImageElement>(null);

  const [buttonClicked, setButtonClicked] = useState<string | undefined>("");

  const scrollToSection = (
    ref: React.RefObject<HTMLImageElement>,
    buttonname?: string
  ) => {
    const headerHeight = headerRef.current?.offsetHeight || 0;
    const sectionTop = ref.current?.offsetTop || 0;

    window.scrollTo({
      top: sectionTop - headerHeight,
      behavior: "smooth",
    });

    setButtonClicked(buttonname);
  };

  return (
    <>
      <Header ref={headerRef}>
        <button onClick={() => scrollToSection(headerRef)}>
          <img src={titleimg} alt="titelimg" />
        </button>
        <button
          onClick={() => scrollToSection(infoRef, "Info")}
          className={
            buttonClicked === "Info" ? "text-gray-300" : "hover:font-bold"
          }
        >
          Info
        </button>
        <button
          onClick={() => scrollToSection(artworkRef, "Artwork")}
          className={
            buttonClicked === "Artwork" ? "text-gray-300" : "hover:font-bold"
          }
        >
          Art Work
        </button>
        <button
          onClick={() => scrollToSection(contactRef, "Contact")}
          className={
            buttonClicked === "Contact" ? "text-gray-300" : "hover:font-bold"
          }
        >
          Contact
        </button>
      </Header>
      <Spacer />

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

      <Footer>
        <div className="flex flex-col items-center">
          <img src={footerimg} alt="footerimg" className="w-14" />
          <p className="text-gray-600 text-sm mb-2">
            2022. MALO ALL RIGHTS RESERVED
          </p>
        </div>
      </Footer>
    </>
  );
};

export default Main;

const Header = tw.header`
fixed z-10 top-0 left-0 right-0 flex flex-col items-center justify-center py-3 bg-white
`;

const Spacer = tw.div`
min-h-screen py-10
`;

const Centerdiv = tw.div`
flex flex-col items-center justify-center 
`;

const Footer = tw.div`
fixed bottom-0 left-0 right-0 flex justify-center
`;
