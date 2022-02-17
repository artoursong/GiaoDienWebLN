import React from "react";
import initialValues from "./formik/initialValues";
import validationSchema from "./formik/validationSchema";
import { useFormik } from "formik";

const FormTaoTap = () => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: () => console.log("Submitted"),
  });

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    isSubmitting,
    handleSubmit,
  } = formik;

  return (
    <div>
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
          Tạo tập
        </button>
      </form>
    </div>
  );
};

export default FormTaoTap;
