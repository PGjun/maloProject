import axios from "axios";
import React, { useEffect, useState } from "react";

interface ImageProps {
  id: string;
  url: string;
}

const ImgApi = () => {
  const [images, setImages] = useState<ImageProps[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/images")
      .then((res) => {
        setImages(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];

    if (file) {
      const formData = new FormData();
      formData.append("image", file);

      axios
        .post("http://localhost:3001/images", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          setImages((prevImages) => [...prevImages, res.data]);
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div>
      <input type="file" onChange={handleImageUpload} />
      {images.map((image) => (
        <img
          key={image.id}
          src={`http://localhost:3001${image.url}`}
          alt="uploaded"
        />
      ))}
    </div>
  );
};

export default ImgApi;
