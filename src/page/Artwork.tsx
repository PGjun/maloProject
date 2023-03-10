import React, { useEffect, useState } from "react";
import axios from "axios";

interface Image {
  id: number;
  url: string;
  info: string;
}

const Artwork = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [selectedYear, setSelectedYear] = useState<number>(2022);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchImages() {
      if (selectedYear !== null) {
        const response = await axios.get<Image[]>(`json/${selectedYear}.json`);
        setImages(response.data);
        console.log(response.data);
        setLoading(false);
      }
    }
    fetchImages();
  }, [selectedYear]);

  const handleButtonClick = (year: number) => {
    setSelectedYear(year);
  };

  return (
    <>
      <div className="flex justify-center space-x-4 mb-8">
        <button
          className={
            selectedYear === 2022
              ? "text-gray-300 text-sm"
              : "text-sm hover:font-bold"
          }
          onClick={() => handleButtonClick(2022)}
        >
          2022
        </button>
        <button
          className={
            selectedYear === 2021
              ? "text-gray-300 bold text-sm"
              : "text-sm hover:font-bold"
          }
          onClick={() => handleButtonClick(2021)}
        >
          2021
        </button>
        <button
          className={
            selectedYear === 2020
              ? "text-gray-300 bold text-sm"
              : "text-sm hover:font-bold"
          }
          onClick={() => handleButtonClick(2020)}
        >
          2020
        </button>
        {/* Add more buttons for other years as needed */}
      </div>

      {!loading && (
        <div className="grid grid-cols-3 gap-16 pb-10">
          {images.map((image) => (
            <div key={image.id} className="relative">
              <img
                src={image.url}
                alt={`Artwork ${image.id}`}
                className="h-52 w-72 drop-shadow-xl rounded"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-80 opacity-0 hover:opacity-100 transition duration-500">
                <p className="text-black text-center">{image.info}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Artwork;
