import { useState } from "react";
import { Link } from "react-router-dom";

// formik
import { useFormik } from "formik";
import initialValues from "./formik/initialValues";
import validationSchema from "./formik/validationSchema";

import { authService } from "api/auth";
import Container from "components/Container";

import Form from "components/Form";

const Register = () => {
  const [error, setError] = useState("");
  const formik = useFormik({
    validationSchema,
    initialValues,
    onSubmit: (values, { setSubmitting, resetForm }) => {
      setSubmitting(true);
      setError("");
      const user = {
        username: values.username,
        password: values.password,
        email: values.email,
      };
      authService
        .register(user)
        .then((res) => {
          if (res.status === 200) {
            resetForm();
            alert("Đăng ký thành công!");
          }
        })
        .catch((err) => setError("Tài khoản đã tồn tại"));

      setSubmitting(false);
    },
  });

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    isValid,
    isSubmitting,
  } = formik;

  return (
    <div className="min-h-screen bg-[#0D213D] pt-32">
      <Container>
        <form
          onSubmit={handleSubmit}
          className="mx-auto max-w-[700px] overflow-hidden rounded-md border border-gray-700"
        >
          <h2 className="bg-gray-700 px-4 py-2 text-lg text-light-gray">
            Đăng ký
          </h2>
          <div className="p-4">
            <div className="mx-auto max-w-[550px]">
              {error ? (
                <p className="text-center text-red-500">{error}</p>
              ) : null}
              <div className="mb-5">
                <Form.Label htmlFor={"username"}>Tên đăng nhập</Form.Label>
                <Form.Input
                  type="text"
                  name="username"
                  onBlur={handleBlur}
                  isError={touched.username && errors.username}
                  error={<Form.Error>{errors.username}</Form.Error>}
                  disabled={isSubmitting}
                  onChange={handleChange}
                  value={values.username}
                />
              </div>
              <div className="mb-5">
                <Form.Label htmlFor={"email"}>Email</Form.Label>
                <Form.Input
                  type="email"
                  name="email"
                  onBlur={handleBlur}
                  isError={touched.email && errors.email}
                  error={<Form.Error>{errors.email}</Form.Error>}
                  disabled={isSubmitting}
                  onChange={handleChange}
                  value={values.email}
                />
              </div>
              <div className="mb-5">
                <Form.Label htmlFor={"password"}>Mật khẩu</Form.Label>
                <Form.Input
                  type="password"
                  name="password"
                  onBlur={handleBlur}
                  isError={touched.password && errors.password}
                  error={<Form.Error>{errors.password}</Form.Error>}
                  disabled={isSubmitting}
                  value={values.password}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-5">
                <Form.Submit disabled={isSubmitting || !isValid}>
                  Đăng ký
                </Form.Submit>
              </div>

              <div className="flex items-center gap-2 text-light-gray">
                <span>Bạn đã có tài khoản?</span>{" "}
                <Link
                  to="/dang-nhap"
                  className="cursor-pointer text-indigo-500 hover:underline"
                >
                  Đăng nhập
                </Link>
              </div>
            </div>
          </div>
        </form>
      </Container>
    </div>
  );
};

export default Register;
