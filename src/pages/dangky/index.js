import Container from "components/Container";
import { useFormik } from "formik";
import { authService } from "api/auth";
import { useState } from "react";
import { Link } from "react-router-dom";
import initialValues from "./formik/initialValues";
import validationSchema from "./formik/validationSchema";

const DangKy = () => {
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
    <div>
      <Container>
        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-28 max-w-[700px] rounded-md border border-gray-200"
        >
          <div className="border-b border-gray-200 bg-gray-100 px-4 py-2">
            Đăng ký
          </div>
          <div className="p-4">
            <div className="mx-auto max-w-[550px]">
              {error ? (
                <p className="text-center text-red-500">{error}</p>
              ) : null}
              <div className="mb-5 flex w-full items-center gap-8">
                <label
                  className="inline-block w-[40%] text-right"
                  htmlFor="username"
                >
                  Tên đăng nhập
                </label>
                <div className="w-[55%]">
                  <input
                    type="text"
                    name="username"
                    onBlur={handleBlur}
                    className={`block w-full rounded-md border  px-2 py-1 outline-none ${
                      touched.username && errors.username
                        ? "border-red-600"
                        : "border-gray-200"
                    }`}
                    onChange={handleChange}
                    value={values.username}
                  />
                </div>
              </div>
              <div className="mb-5 flex w-full items-center gap-8">
                <label
                  className="inline-block w-[40%] text-right"
                  htmlFor="username"
                >
                  Email
                </label>
                <div className="w-[55%]">
                  <input
                    type="email"
                    name="email"
                    onBlur={handleBlur}
                    className={`block w-full rounded-md border px-2 py-1 outline-none ${
                      touched.email && errors.email
                        ? "border-red-600"
                        : "border-gray-200"
                    }`}
                    onChange={handleChange}
                    value={values.email}
                  />
                </div>
              </div>
              <div className="mb-5 flex w-full items-center gap-8">
                <label className="inline-block w-[40%] text-right">
                  Mật khẩu
                </label>
                <div className="w-[55%]">
                  <input
                    type="password"
                    name="password"
                    onBlur={handleBlur}
                    className={`block w-full rounded-md border px-2 py-1 outline-none ${
                      touched.password && errors.password
                        ? "border-red-600"
                        : "border-gray-200"
                    }`}
                    value={values.password}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="mb-5 flex w-full items-center gap-8">
                <div className="ml-auto w-[55%]">
                  <button
                    type="submit"
                    className="bg-blue-500 px-4 py-1 text-white"
                    disabled={isSubmitting || !isValid}
                  >
                    Đăng ký
                  </button>
                </div>
              </div>
              <div className="flex w-full items-center gap-8">
                <div className="ml-auto w-[55%]">
                  <span>Bạn đã có tài khoản?</span>{" "}
                  <Link
                    to="/login"
                    className="cursor-pointer text-blue-400 hover:underline"
                  >
                    Đăng nhập
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

export default DangKy;
