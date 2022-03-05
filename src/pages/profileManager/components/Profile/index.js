import { useState, useEffect } from "react";

//formik
import { useFormik } from "formik";
import initialValues from "./formik/initialValues";
import validationSchema from "./formik/validationSchema";

import { useAuth } from "context/authContext";
import { changeuserinfo } from "context/authContext";

import Form from "components/Form";

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
              <Form.Label htmlFor={"username"}>Username</Form.Label>
              <Form.Input
                type="text"
                name="username"
                value={values.username}
                onChange={handleChange}
                onBlur={handleBlur}
                disabled={true}
              />
            </div>

            <div className="col-span-6 sm:col-span-3">
              <Form.Label htmlFor="email">Email</Form.Label>
              <Form.Input
                type="email"
                name="email"
                isError={errors.email && touched.email}
                error={<Form.Error>{errors.email}</Form.Error>}
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                disabled={isSubmitting}
              />
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

          <Form.Submit disabled={isSubmitting}>Xác nhận thay đổi</Form.Submit>
        </div>
      </form>
    </div>
  );
};

export default Profile;
