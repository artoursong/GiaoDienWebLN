import React from "react";
import initialValues from "./formik/initialValues";
import validationSchema from "./formik/validationSchema";
import { useFormik } from "formik";

const ChangePassword = () => {
  const formik = useFormik({ validationSchema, initialValues });

  const {
    values,
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
    isSubmitting,
    touched,
  } = formik;
  return (
    <div className="mt-5 md:col-span-2 md:mt-0">
      <form onSubmit={handleSubmit} method="POST">
        <div className="w-full rounded-md border border-gray-500 p-4">
          <h2 className="mb-5 text-2xl font-bold text-[#cbdff3]">
            Đổi mật khẩu
          </h2>
          <div className="mb-6 max-w-md">
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-lg font-medium text-gray-300"
              >
                Mật khẩu hiện tại
              </label>
              <input
                type="password"
                name="password"
                id="password"
                autoComplete="given-name"
                className="mt-1 mb-2 block w-full rounded-md border border-gray-400 bg-transparent p-2 text-gray-50"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.password && touched.password ? (
                <span className="mt-1 block text-sm text-red-500">
                  {errors.password}
                </span>
              ) : null}
            </div>

            <div className="mb-4">
              <label
                htmlFor="newPassword"
                className="block text-lg font-medium text-gray-300"
              >
                Mật khẩu mới
              </label>
              <input
                type="password"
                name="newPassword"
                id="newPassword"
                autoComplete="email"
                className="mt-1 mb-2 block w-full rounded-md border border-gray-400 bg-transparent p-2 text-gray-50"
                value={values.newPassword}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.newPassword && touched.newPassword ? (
                <span className="mt-1 block text-sm text-red-500">
                  {errors.newPassword}
                </span>
              ) : null}
            </div>

            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-lg font-medium text-gray-300"
              >
                Nhập lại mật khẩu mới
              </label>
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                autoComplete="email"
                className="mt-1 mb-2 block w-full rounded-md border border-gray-400 bg-transparent p-2 text-gray-50"
                value={values.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.confirmPassword && touched.confirmPassword ? (
                <span className="mt-1 block text-sm text-red-500">
                  {errors.confirmPassword}
                </span>
              ) : null}
            </div>
          </div>
          <button
            className="rounded-md bg-blue-500 px-4 py-2 text-lg text-white transition-all hover:bg-blue-600 disabled:pointer-events-none disabled:opacity-50"
            type="submit"
            disabled={
              errors.confirmPassword ||
              errors.newPassword ||
              errors.password ||
              isSubmitting
            }
          >
            Đổi mật khẩu
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChangePassword;