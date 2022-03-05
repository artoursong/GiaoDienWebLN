import { useEffect, useState } from "react";
import initialValues from "./formik/initialValues";
import validationSchema from "./formik/validationSchema";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { useParams } from "react-router-dom";
import bookService from "api/truyenAPI";
import { useTruyen } from "context/truyenContext";
import LoadingSpinner from "components/LoadingSpinner";
import ImageUpload from "../CreateBook/ImageUpload";

const FormTaoTap = ({ mode }) => {
  const [, setTruyen] = useTruyen();
  const [isLoading, setIsLoading] = useState(false);
  const [uploadImg, setUploadImg] = useState({ url: "", file: null });
  const navigate = useNavigate();

  const params = useParams();
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (_, { resetForm }) => {
      let imageURL = null;
      let response = null;

      if (uploadImg.file) {
        const response = await bookService.uploadImage(uploadImg.file);

        if (response.data) {
          imageURL = response.data.secure_url;
        }
      }

      if (mode !== "edit") {
        response = await bookService.createVolume({
          iD_Book: +params.id,
          image: imageURL,
          name: values.title,
        });
      } else {
        response = await bookService.editVolume({
          iD_Volume: +params.volumeId,
          image: imageURL || uploadImg.url,
          name: values.title,
        });
      }
      if (response.status === 200) {
        setTruyen((prev) => ({
          ...prev,
          volumes: prev.volumes.map((volume) =>
            volume.id === response.data.id ? response.data : volume
          ),
        }));
        resetForm();
        navigate(`/manage/${params.id}`);
      }
    },
  });

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    isSubmitting,
    handleSubmit,
    setValues,
    resetForm,
  } = formik;

  useEffect(() => {
    if (mode === "edit") {
      setIsLoading(true);
      const fetchVolume = async () => {
        const response = await bookService.getVolume(params.volumeId);

        if (response.status === 200) {
          setValues({ title: response.data.name });
          setUploadImg((prev) => ({ ...prev, url: response.data.image }));
        }
        setIsLoading(false);
      };
      fetchVolume();
    } else {
      resetForm();
    }
  }, [mode, params.volumeId, setValues, resetForm]);

  return (
    <>
      {!isLoading ? (
        <div>
          <h2 className="mb-5 text-2xl font-bold text-white">
            {mode === "edit" ? "Sửa tập" : "Tạo tập"}
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-5">
              <label
                htmlFor="name"
                className="mb-2 inline-block w-[150px] text-lg font-medium text-[#cbdff3]"
              >
                Tiêu đề
              </label>
              <div className="w-full">
                <input
                  type="text"
                  name="title"
                  value={values.title}
                  onChange={handleChange}
                  className={`mt-1 mb-2 block w-full rounded-md border bg-[#314053] px-4 py-2 text-white ${
                    touched.title && errors.title
                      ? "border-red-500"
                      : "border-transparent"
                  }`}
                  autoComplete="off"
                  onBlur={handleBlur}
                />
                {touched.title && errors.title ? (
                  <span className="text-sm italic text-red-500">
                    {errors.title}
                  </span>
                ) : null}
              </div>
            </div>
            <ImageUpload
              setUploadImage={setUploadImg}
              uploadImage={uploadImg}
              labelColor="text-light-gray"
            />

            <button
              className="rounded-md bg-indigo-700 px-4 py-2 text-white transition-all hover:bg-indigo-800 disabled:pointer-events-none disabled:opacity-60"
              type="submit"
              disabled={isSubmitting}
            >
              {mode !== "edit" ? "Tạo tập" : "Sửa tập"}
            </button>
          </form>
        </div>
      ) : null}
    </>
  );
};

export default FormTaoTap;
