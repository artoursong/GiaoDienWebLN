import { useRef } from "react";
import ImagePlaceholder from "./ImagePlaceholder";

const ImageUpload = ({
  setUploadImage,
  uploadImage,
  labelColor = "text-black",
}) => {
  const inputImageRef = useRef();

  const handleResetUploadImage = () => {
    setUploadImage({ url: "", file: null });
    inputImageRef.current.value = "";
  };

  const handleChangeUploadImage = (event) => {
    const file = event.target.files[0];
    const fileExt = file.name.split(".").pop();

    if (!/(jpe?g|tiff?|png|webp)$/i.test(fileExt)) {
      console.log("This type is not supported");
      return;
    }

    const formData = new FormData();
    if (file) {
      formData.append("file", file);
      formData.append("upload_preset", "dzyqjdsz");

      // generate static url for preview
      const url = URL.createObjectURL(file);

      setUploadImage({ url, file: formData });
    }
  };
  return (
    <div className="my-5">
      <div>
        <label className={`block w-[150px] text-lg font-medium ${labelColor}`}>
          Hình ảnh
        </label>
        <div className="mt-1 flex items-center">
          <div className="w-[150px] rounded-full bg-gray-100">
            {/* <svg
                          className="h-full w-full text-gray-300"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg> */}
            {uploadImage.url ? (
              <ImagePlaceholder
                handleResetUploadImage={handleResetUploadImage}
                uploadImage={uploadImage}
              />
            ) : (
              <img
                src="https://res.cloudinary.com/dgtv15ojw/image/upload/v1645775315/341f968d-ea1b-4937-89aa-32a7e9845490.79bcef862e91a679f28f46799540de5c_qgj2vu.jpg"
                alt="placeholder"
                className="w-[200px]"
              />
            )}
          </div>
          <label
            htmlFor="upload-image"
            className="ml-5 cursor-pointer rounded-md border border-gray-300 bg-white py-2 px-3 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            <input
              type="file"
              className="sr-only"
              name="upload-image"
              id="upload-image"
              onChange={handleChangeUploadImage}
              ref={inputImageRef}
            />
            Chọn
          </label>
        </div>
      </div>
    </div>
  );
};

export default ImageUpload;
