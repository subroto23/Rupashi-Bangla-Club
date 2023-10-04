import axios from "axios";
import { useEffect, useState } from "react";
import { Buffer } from "buffer";

Buffer.from("anything", "base64");

const ImageConverter = () => {
  const [images, setimages] = useState(null);
  useEffect(() => {
    axios
      .get("https://rbcwebsite.onrender.com/api/users/")
      .then((res) => console.log(res.data.payload[0].image.data));
  }, []);

  return <div className="flex justify-center my-12">Hellow</div>;
};

export default ImageConverter;
