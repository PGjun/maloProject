import axios from "axios";
import React, { useEffect, useState } from "react";
import Artwork from "../page/Artwork";

export interface ImageProps {
  id: string;
  url: string;
}

const ImgApi = () => {
  const [images, setImages] = useState<ImageProps[]>([]);

  useEffect(() => {
    let completed = false;
    async function get() {
      const res = await axios.get("http://localhost:3001/images");
      if (!completed) setImages(res.data);
      console.log("get.data", res.data);
    }
    get();
    return () => {
      completed = true;
    };
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
          // setImages((prevImages) => [...prevImages, res.data]);
          console.log("post.data", res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <>
      {/* <div>
        <input type="file" onChange={handleImageUpload} />
        {images.map((image) => (
          <img key={image.id} src={image.url} alt="uploaded" />
        ))}
      </div> */}
      <Artwork data={images} />
    </>
  );
};

export default ImgApi;
