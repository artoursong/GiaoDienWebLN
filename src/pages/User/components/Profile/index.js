import React from "react";
import initialValues from "./formik/initialValues";
import validationSchema from "./formik/validationSchema";
import { useFormik } from "formik";

const Profile = () => {
  const formik = useFormik({ validationSchema, initialValues });

  const { values, errors, handleBlur, handleChange, handleSubmit, touched } =
    formik;

  return (
    <div className="mt-5 md:col-span-2 md:mt-0">
      <form action="#" method="POST">
        <div className="w-full rounded-md border border-gray-500 p-4">
          <h2 className="mb-5 text-2xl font-bold text-[#cbdff3]">
            Thông tin cá nhân
          </h2>
          <div className="mb-6 grid grid-cols-6 gap-6">
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="username"
                className="block text-lg font-medium text-gray-300"
              >
                Username
              </label>
              <input
                type="text"
                name="username"
                id="username"
                autoComplete="given-name"
                className="mt-1 block w-full rounded-md border border-gray-400 bg-transparent p-2 text-gray-50"
                value={values.username}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.username && touched.username ? (
                <span className="mt-1 block text-sm text-red-500">
                  {errors.username}
                </span>
              ) : null}
            </div>

            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="last-name"
                className="block text-lg font-medium text-gray-300"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                className="mt-1 block w-full rounded-md border border-gray-400 bg-transparent p-2 text-gray-50"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.email && touched.email ? (
                <span className="mt-1 block text-sm text-red-500">
                  {errors.email}
                </span>
              ) : null}
            </div>
          </div>
          <button
            className="rounded-md bg-blue-500 px-4 py-2 text-lg text-white transition-all hover:bg-blue-600"
            type="submit"
          >
            Xác nhận thay đổi
          </button>
        </div>
      </form>
    </div>
  );
};

export default Profile;
