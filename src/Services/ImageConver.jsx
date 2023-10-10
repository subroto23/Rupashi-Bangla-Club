import { Buffer } from "buffer";

const imageConvert = (image) => {
  return Buffer.from(image).toString("ascii");
};

export default imageConvert;
