import axios from "axios";
import { useEffect, useState } from "react";
import { Buffer } from "buffer";

Buffer.from("anything", "base64");

const ImageConverter = () => {
  const [images, setimages] = useState(null);
  useEffect(() => {
    axios
      .get("https://rbcwebsite.onrender.com/api/users/")
      .then((res) => {
        let user = res.data.payload.users[0].image;

        setimages(`${Buffer.from(user.data).toString("ascii")} `);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="flex justify-center my-12">
      <img src={`data:image/jpg;base64,${images}`} />
    </div>
  );
};

export default ImageConverter;
