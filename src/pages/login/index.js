import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useFormik } from "formik";
import validationSchema from "./formik/validationSchema";
import initialValues from "./formik/initialValues";

import Container from "components/Container";
import { authService } from "api/auth";
import { useAuth } from "context/authContext";

import Form from "components/Form";

const Login = () => {
  const [error, setError] = useState("");
  const [, setAuthState] = useAuth();
  const navigate = useNavigate();

  const formik = useFormik({
    validationSchema,
    initialValues,
    onSubmit: (values, { setSubmitting }) => {
      setError("");
      const user = {
        ...values,
      };
      authService
        .login(user)
        .then((res) => {
          if (res.status === 200) {
            setAuthState({
              isAuth: true,
              user: res.data.loginData,
            });

            localStorage.setItem("token", res.data.token);
            navigate("/", { replace: true });
          }
        })
        .catch((err) => setError("Sai tai khoan hoac mat khau!"));
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
    <div className="min-h-screen bg-[#0D213D] pt-32">
      <Container>
        <form
          onSubmit={handleSubmit}
          className="mx-auto max-w-[700px] overflow-hidden rounded-md border border-gray-700"
        >
          <h2 className="bg-gray-700 px-4 py-2 text-lg text-light-gray">
            Đăng nhập
          </h2>
          <div className="p-4">
            <div className="mx-auto max-w-[550px]">
              {error ? (
                <p className="text-center text-red-500">{error}</p>
              ) : null}
              <div className="mb-5">
                <Form.Label htmlFor="username">Username</Form.Label>
                <Form.Input
                  type="text"
                  onBlur={handleBlur}
                  name="username"
                  isError={touched.username && errors.username}
                  error={<Form.Error>{errors.username}</Form.Error>}
                  onChange={handleChange}
                  value={values.username}
                />
              </div>
              <div className="mb-5">
                <Form.Label htmlFor={"password"}>Mật khẩu</Form.Label>
                <Form.Input
                  type="password"
                  onBlur={handleBlur}
                  name="password"
                  isError={touched.password && errors.password}
                  error={<Form.Error>{errors.password}</Form.Error>}
                  onChange={handleChange}
                  value={values.password}
                />
              </div>
              <div className="mb-5">
                <Form.Submit disabled={isSubmitting}>Đăng nhập</Form.Submit>
                <span className="ml-7 cursor-pointer text-indigo-500 hover:underline">
                  Quên mật khẩu?
                </span>
              </div>
              <div className="flex w-full items-center gap-8">
                <div className="text-light-gray">
                  <span>Bạn chưa có tài khoản?</span>{" "}
                  <Link
                    to="/dang-ky"
                    className="cursor-pointer text-indigo-500 hover:underline"
                  >
                    Đăng kí
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </form>
      </Container>
    </div>
  );
};

export default Login;
