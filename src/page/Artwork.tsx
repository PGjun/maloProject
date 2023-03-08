import React from "react";
import artworkimg1 from "../img/maloImg1.jpg";
// import tw from "tailwind-styled-components";

class imgclass {
  className = "h-52 w-52";
}

const Artwork = () => {
  const imgtw = new imgclass();
  return (
    <>
      <div className="grid grid-cols-3 gap-16">
        <img src={artworkimg1} alt="artworkimg1" className={imgtw.className} />
        <img src={artworkimg1} alt="artworkimg1" className={imgtw.className} />
        <img src={artworkimg1} alt="artworkimg1" className={imgtw.className} />
        <img src={artworkimg1} alt="artworkimg1" className={imgtw.className} />
        <img src={artworkimg1} alt="artworkimg1" className={imgtw.className} />
        <img src={artworkimg1} alt="artworkimg1" className={imgtw.className} />
        <img src={artworkimg1} alt="artworkimg1" className={imgtw.className} />
        <img src={artworkimg1} alt="artworkimg1" className={imgtw.className} />
        <img src={artworkimg1} alt="artworkimg1" className={imgtw.className} />
        <img src={artworkimg1} alt="artworkimg1" className={imgtw.className} />
        <img src={artworkimg1} alt="artworkimg1" className={imgtw.className} />
        <img src={artworkimg1} alt="artworkimg1" className={imgtw.className} />
      </div>
    </>
  );
};

export default Artwork;
