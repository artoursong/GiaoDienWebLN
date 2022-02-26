import { useEffect, useState } from "react";
import initialValues from "./formik/initialValues";
import validationSchema from "./formik/validationSchema";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { useParams } from "react-router-dom";
import bookService from "api/truyenAPI";
import { useTruyen } from "context/truyenContext";
import LoadingSpinner from "components/LoadingSpinner";
import ImageUpload from "pages/taotruyen/ImageUpload";

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
          <h1 className="mb-5 text-3xl font-bold text-[#cbdff3]">
            {mode === "edit" ? "Sửa tập" : "Tạo tập"}
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-5">
              <label
                htmlFor="name"
                className="mb-4 inline-block w-[150px] text-lg font-medium text-[#cbdff3]"
              >
                Tiêu đề
              </label>
              <div className="w-full">
                <input
                  type="text"
                  name="title"
                  value={values.title}
                  onChange={handleChange}
                  className={`mb-2 block w-full rounded-md border bg-transparent py-2 px-4 text-white focus:border focus:border-blue-500 ${
                    touched.title && errors.title
                      ? "border-red-500"
                      : "border-gray-400"
                  }`}
                  autoComplete="off"
                  onBlur={handleBlur}
                />
                {touched.title && errors.title ? (
                  <span className="italic text-red-500">{errors.title}</span>
                ) : null}
              </div>
            </div>
            <ImageUpload
              setUploadImage={setUploadImg}
              uploadImage={uploadImg}
              labelColor="text-light-gray"
            />
            <button
              type="submit"
              className="rounded bg-blue-600 py-2 px-6 text-white"
            >
              {mode !== "edit" ? "Tạo tập" : "Sửa tập"}
            </button>
          </form>
          <div className="w-[50px]">
            {isSubmitting ? <LoadingSpinner size={10} /> : null}
          </div>
        </div>
      ) : (
        <LoadingSpinner size={8} />
      )}
    </>
  );
};

export default FormTaoTap;
