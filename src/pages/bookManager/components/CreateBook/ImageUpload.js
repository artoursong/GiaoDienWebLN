import { useRef } from "react";
import ImagePlaceholder from "./ImagePlaceholder";

const ImageUpload = ({ setUploadImage, uploadImage }) => {
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
        <label className="mb-2 inline-block text-lg font-medium text-gray-300">
          Hình ảnh
        </label>
        <div className="mt-1 flex items-center">
          <div className="max-w-[200px]">
            {uploadImage.url ? (
              <ImagePlaceholder
                handleResetUploadImage={handleResetUploadImage}
                uploadImage={uploadImage}
              />
            ) : null}
          </div>
          <label
            htmlFor="upload-image"
            className="cursor-pointer rounded-md bg-indigo-600 py-2 px-4 text-sm font-medium leading-4 text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
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
