import React from "react";
import { IoIosRemoveCircle } from "react-icons/io";

const ImagePlaceholder = ({ handleResetUploadImage, uploadImage }) => {
  return (
    <div className="relative h-full w-full">
      <img src={uploadImage.url} alt="upload_image" />
      <button
        className="group absolute top-0 right-0 rounded-full bg-gray-100 p-1 transition-all hover:bg-gray-200"
        onClick={handleResetUploadImage}
      >
        <IoIosRemoveCircle className="z-50 text-lg text-red-500 group-hover:text-red-600" />
      </button>
    </div>
  );
};

export default ImagePlaceholder;
