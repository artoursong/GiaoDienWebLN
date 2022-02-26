import { useEffect, useState } from "react";
import initialValues from "./formik/initialValues";
import validationSchema from "./formik/validationSchema";
import { useFormik } from "formik";
import { useParams } from "react-router-dom";
import bookService from "api/truyenAPI";
import { useTruyen } from "context/truyenContext";
import LoadingSpinner from "components/LoadingSpinner";

const FormTaoTap = ({ mode }) => {
  const [, setTruyen] = useTruyen();
  const [isLoading, setIsLoading] = useState(false);
  const params = useParams();
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (_, { resetForm }) => {
      let response;
      if (mode !== "edit") {
        response = await bookService.createVolume({
          iD_Book: +params.id,
          name: values.title,
        });
      } else {
        response = await bookService.editVolume({
          iD_Volume: +params.volumeId,
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
          <h1 className="mb-5 text-3xl font-bold text-[#cbdff3]">Tạo tập</h1>
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
