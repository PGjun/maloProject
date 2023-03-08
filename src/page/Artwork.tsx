import React, { useEffect, useState } from "react";
import axios from "axios";

interface Image {
  id: number;
  url: string;
  info: string;
}

const Artwork = () => {
  const [images, setImages] = useState<Image[]>([]);

  useEffect(() => {
    async function fetchImages() {
      const response = await axios.get<Image[]>("json/dummy.json");
      setImages(response.data);
      console.log(response.data);
    }
    fetchImages();
  }, []);
  return (
    <>
      <div className="grid grid-cols-3 gap-16">
        {images.map((image) => (
          <div key={image.id} className="relative">
            <img
              src={image.url}
              alt={`Artwork ${image.id}`}
              className="h-52 w-72 drop-shadow-xl"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-80 opacity-0 hover:opacity-100 transition duration-500">
              <p className="text-black text-center">{image.info}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Artwork;
