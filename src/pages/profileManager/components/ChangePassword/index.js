import { useState } from "react";

// formik
import { useFormik } from "formik";
import initialValues from "./formik/initialValues";
import validationSchema from "./formik/validationSchema";

import { authService } from "api/auth";
import { useAuth } from "context/authContext";

import Form from "components/Form";

const ChangePassword = () => {
  const [authState] = useAuth();
  const [notification, setNotification] = useState({ type: "", message: "" });
  const formik = useFormik({
    validationSchema,
    initialValues,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      setSubmitting(true);
      setNotification({
        type: "",
        message: "",
      });
      const response = await authService.changePassword({
        oldPass: values.password,
        newPass: values.newPassword,
        iD_User: authState.user.iD_User,
      });

      if (response.status === 200) {
        setNotification({
          type: "success",
          message: "Đổi mật khẩu thành công!",
        });
      } else {
        setNotification({
          type: "error",
          message: "Đã xảy ra lỗi. Vui lòng thử lại!",
        });
      }
      resetForm();
      setSubmitting(false);
    },
  });

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
        <div className="w-full rounded-md">
          <h2 className="mb-5 text-2xl font-bold text-white">Đổi mật khẩu</h2>
          <div className="mb-6 max-w-md">
            <div className="mb-4">
              <Form.Label htmlFor={"password"}>Mật khẩu hiện tại</Form.Label>
              <Form.Input
                type="password"
                name="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                disabled={isSubmitting}
                isError={touched.password && errors.password}
                error={<Form.Error>{errors.password}</Form.Error>}
              />
            </div>

            <div className="mb-4">
              <Form.Label htmlFor={"newPassword"}>Mật khẩu hiện tại</Form.Label>
              <Form.Input
                type="password"
                name="newPassword"
                value={values.newPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                disabled={isSubmitting}
                isError={touched.newPassword && errors.newPassword}
                error={<Form.Error>{errors.newPassword}</Form.Error>}
              />
            </div>
            <div>
              <Form.Label htmlFor={"confirmPassword"}>
                Mật khẩu hiện tại
              </Form.Label>
              <Form.Input
                type="password"
                name="confirmPassword"
                value={values.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                disabled={isSubmitting}
                isError={touched.confirmPassword && errors.confirmPassword}
                error={<Form.Error>{errors.confirmPassword}</Form.Error>}
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

          <Form.Submit
            disabled={
              errors.confirmPassword ||
              errors.newPassword ||
              errors.password ||
              isSubmitting ||
              !values.confirmPassword ||
              !values.newPassword ||
              !values.password
            }
          >
            Đổi mật khẩu
          </Form.Submit>
        </div>
      </form>
    </div>
  );
};

export default ChangePassword;
