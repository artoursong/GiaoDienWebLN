import Container from "components/Container";
import { useFormik } from "formik";
import { authService } from "api/auth";
import { useState } from "react";
import { Link } from "react-router-dom";
import initialValues from "./formik/initialValues";
import validationSchema from "./formik/validationSchema";

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
              <div className="mb-5 flex w-full items-center gap-8">
                <label
                  className="inline-block w-[40%] text-right text-light-gray"
                  htmlFor="username"
                >
                  Tên đăng nhập
                </label>
                <div className="w-[55%]">
                  <input
                    type="text"
                    name="username"
                    onBlur={handleBlur}
                    className={`mt-1 mb-2 block w-full rounded-md border bg-[#314053] px-4 py-2 text-white ${
                      touched.username && errors.username
                        ? "border-red-600"
                        : "border-transparent"
                    }`}
                    onChange={handleChange}
                    value={values.username}
                  />
                </div>
              </div>
              <div className="mb-5 flex w-full items-center gap-8">
                <label
                  className="inline-block w-[40%] text-right text-light-gray"
                  htmlFor="username"
                >
                  Email
                </label>
                <div className="w-[55%]">
                  <input
                    type="email"
                    name="email"
                    onBlur={handleBlur}
                    className={`mt-1 mb-2 block w-full rounded-md border bg-[#314053] px-4 py-2 text-white ${
                      touched.email && errors.email
                        ? "border-red-600"
                        : "border-transparent"
                    }`}
                    onChange={handleChange}
                    value={values.email}
                  />
                </div>
              </div>
              <div className="mb-5 flex w-full items-center gap-8">
                <label className="inline-block w-[40%] text-right text-light-gray">
                  Mật khẩu
                </label>
                <div className="w-[55%]">
                  <input
                    type="password"
                    name="password"
                    onBlur={handleBlur}
                    className={`mt-1 mb-2 block w-full rounded-md border bg-[#314053] px-4 py-2 text-white ${
                      touched.password && errors.password
                        ? "border-red-600"
                        : "border-transparent"
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
                    className="rounded-md bg-indigo-600 px-6 py-1 text-white disabled:cursor-not-allowed disabled:opacity-70"
                    disabled={isSubmitting || !isValid}
                  >
                    Đăng ký
                  </button>
                </div>
              </div>
              <div className="flex w-full items-center gap-8">
                <div className="ml-auto w-[55%] text-light-gray">
                  <span>Bạn đã có tài khoản?</span>{" "}
                  <Link
                    to="/login"
                    className="cursor-pointer text-indigo-500 hover:underline"
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

export default Register;
