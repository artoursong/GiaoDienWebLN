import { useState, useEffect } from "react";
import initialValues from "./formik/initialValues";
import validationSchema from "./formik/validationSchema";
import { useAuth } from "context/authContext";
import { useFormik } from "formik";
import { changeuserinfo } from "context/authContext";

const Profile = () => {
  const [authState, setAuthState] = useAuth();
  const [notification, setNotification] = useState({ type: "", message: "" });
  const formik = useFormik({
    validationSchema,
    initialValues,
    onSubmit: async (values, { setSubmitting }) => {
      setSubmitting(true);
      setNotification({
        type: "",
        message: "",
      });
      const response = await changeuserinfo(setAuthState, {
        email: values.email,
        id: authState.user.iD_User,
      });

      if (response.status === 200) {
        setNotification({
          type: "success",
          message: "Đổi thông tin cá nhân thành công!",
        });
      } else {
        setNotification({
          type: "error",
          message: "Đã xảy ra lỗi. Vui lòng thử lại!",
        });
      }
      setSubmitting(false);
    },
  });

  const {
    values,
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
    touched,
    setValues,
    isSubmitting,
  } = formik;

  useEffect(() => {
    if (authState.user) {
      setValues({
        email: authState.user.email,
        username: authState.user.username,
      });
    }
  }, [authState.user, setValues]);

  return (
    <div className="md:col-span-2">
      <form method="POST" onSubmit={handleSubmit}>
        <div className="w-full rounded-md">
          <h2 className="mb-5 text-2xl font-bold text-white">
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
                className="mt-2 block w-full rounded-md bg-[#314053] px-4 py-2 font-light text-gray-50 transition-all disabled:bg-gray-800"
                value={values.username}
                onChange={handleChange}
                onBlur={handleBlur}
                disabled
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
                className="mt-2 block w-full rounded-md bg-[#314053] px-4 py-2 font-light text-gray-50 transition-all disabled:bg-gray-800"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                disabled={isSubmitting}
              />
              {errors.email && touched.email ? (
                <span className="mt-1 block text-sm text-red-500">
                  {errors.email}
                </span>
              ) : null}
            </div>
          </div>
          {notification.message ? (
            <span
              className={`${
                notification.type === "error"
                  ? "text-red-500"
                  : "mb-2 block text-green-600"
              }`}
            >
              {notification.message}
            </span>
          ) : null}

          <button
            className="rounded-md bg-indigo-700 px-4 py-2 text-white transition-all hover:bg-indigo-600 disabled:pointer-events-none disabled:opacity-60"
            type="submit"
            disabled={isSubmitting}
          >
            Xác nhận thay đổi
          </button>
        </div>
      </form>
    </div>
  );
};

export default Profile;
