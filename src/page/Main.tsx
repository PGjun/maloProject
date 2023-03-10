import React, { useState, useRef } from "react";
import tw from "tailwind-styled-components";

//img
import titleimg from "../img/maloLogo1.png";
import footerimg from "../img/maloLogo2.png";

//page
import Info from "./Info";
import Contact from "./Contact";
import Artwork from "./Artwork";

//components
import LoginModal from "../components/LoginModal";
import ImgApi from "../components/ImgApi";

const Main = () => {
  const infoRef = useRef<HTMLImageElement>(null);
  const artworkRef = useRef<HTMLImageElement>(null);
  const contactRef = useRef<HTMLImageElement>(null);
  const headerRef = useRef<HTMLImageElement>(null);

  const [buttonClicked, setButtonClicked] = useState<string | undefined>("");

  const [modalstatus, setModalstatus] = useState<boolean>(false);

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
        <ImgApi />
      </Header>
      <Spacer />

      <Centerdiv>
        <section className="min-h-screen" ref={infoRef}>
          <Info />
        </section>
        <section className="min-h-screen" ref={artworkRef}>
          <Artwork />
        </section>
        <section className="min-h-screen" ref={contactRef}>
          <Contact />
        </section>
      </Centerdiv>

      <Footer>
        <div className="flex flex-col items-center">
          <button onClick={() => setModalstatus(true)}>
            <img src={footerimg} alt="footerimg" className="w-14" />
          </button>
          <p className="text-gray-600 text-sm mb-2">
            2022. MALO ALL RIGHTS RESERVED
          </p>
        </div>
      </Footer>

      {/* 나중에 리덕스 써서 모달 상태관리 제대로 해보자*/}
      {modalstatus ? (
        <>
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-96 bg-white z-30 rounded-md ">
            <div
              onClick={() => setModalstatus(false)}
              className="fixed top-0 right-0 text-4xl text-gray-300 pr-3 cursor-pointer z-40"
            >
              ⨯
            </div>
            <LoginModal />
          </div>

          <div
            onClick={() => setModalstatus(false)}
            className="fixed top-0 left-0 right-0 bottom-0 h-screen w-full bg-gray-700 opacity-50 z-20"
          ></div>
        </>
      ) : (
        ""
      )}
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
