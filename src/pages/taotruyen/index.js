import React from "react";
import { useFormik } from "formik";
import { authService } from "api/auth";
import validationSchema from "./formik/validationSchema";
import initialValues from "./formik/initialValues";
import Container from "components/Container";
import { useAuth } from "context/authContext";
import bookService from "api/truyenAPI";

const genres = [
  { id: 1, name: "Action" },
  { id: 2, name: "Adult" },
  { id: 3, name: "Fantasy" },
  { id: 4, name: "Drama" },
  { id: 5, name: "Magic" },
  { id: 6, name: "Harem" },
  { id: 7, name: "Isekai" },
];

const TaoTruyen = () => {
  const [authState] = useAuth();
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      const response = await bookService.createBook({
        ...values,
        iD_User: authState.user.iD_User,
      });
      if (response.status === 200) {
        setSubmitting(false);
        alert("Da them truyen");
        resetForm();
      }
    },
  });

  const {
    handleChange,
    values,
    errors,
    touched,
    handleSubmit,
    handleBlur,
    isSubmitting,
  } = formik;

  return (
    <div className="py-[40px]">
      <Container>
        <div>
          <h1 className="text-center font-bold text-3xl mb-5">Đăng truyện</h1>
          <div>
            <form onSubmit={handleSubmit}>
              <div className="flex items-stretch mb-4">
                <label htmlFor="name" className="w-[150px] font-medium text-lg">
                  Tiêu đề
                </label>
                <div className="w-full">
                  <input
                    type="text"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                    className={`w-full border rounded-md py-2 px-4 block ${
                      touched.name && errors.name
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                    autoComplete="off"
                    onBlur={handleBlur}
                  />
                  {touched.name && errors.name ? (
                    <span className="text-red-500 italic">{errors.name}</span>
                  ) : null}
                </div>
              </div>

              <div className="flex items-stretch mb-4">
                <label
                  htmlFor="ten_khac"
                  className="w-[150px] font-medium text-lg"
                >
                  Tiêu đề khác
                </label>
                <div className="w-full">
                  <input
                    type="text"
                    name="ten_khac"
                    value={values.ten_khac}
                    onChange={handleChange}
                    className={`w-full border rounded-md py-2 px-4 block ${
                      touched.ten_khac && errors.ten_khac
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                    autoComplete="off"
                    onBlur={handleBlur}
                  />
                </div>
                {touched.ten_khac && errors.ten_khac ? (
                  <span className="text-red-500 italic">{errors.ten_khac}</span>
                ) : null}
              </div>

              <div className="flex items-stretch mb-4">
                <label
                  htmlFor="author"
                  className="w-[150px] font-medium text-lg"
                >
                  Tác giả
                </label>
                <div className="w-full">
                  <input
                    type="text"
                    name="author"
                    onChange={handleChange}
                    className={`w-full border rounded-md py-2 px-4 block ${
                      touched.author && errors.author
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                    autoComplete="off"
                    onBlur={handleBlur}
                  />
                  {touched.author && errors.author ? (
                    <span className="text-red-500 italic">{errors.author}</span>
                  ) : null}
                </div>
              </div>

              <div className="flex items-stretch mb-4">
                <label
                  htmlFor="hoa_si"
                  className="w-[150px] font-medium text-lg"
                >
                  Họa sĩ
                </label>
                <div className="w-full">
                  <input
                    type="text"
                    name="hoa_si"
                    onChange={handleChange}
                    className={`w-full border rounded-md py-2 px-4 block ${
                      touched.hoa_si && errors.hoa_si
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                    autoComplete="off"
                    onBlur={handleBlur}
                  />
                  {touched.hoa_si && errors.hoa_si ? (
                    <span className="text-red-500 italic">{errors.hoa_si}</span>
                  ) : null}
                </div>
              </div>

              <div className="flex items-stretch mb-4">
                <label className="w-[150px] font-medium text-lg">
                  Thể loại
                </label>
                <div className="w-full">
                  <div className="flex gap-5 w-full">
                    {genres.map((genre) => (
                      <div key={genre.id}>
                        <input
                          type="checkbox"
                          name="categories"
                          id={genre.id}
                          onChange={handleChange}
                          value={genre.id}
                          className="mr-4"
                          onBlur={handleBlur}
                        />
                        <label htmlFor={genre.id}>{genre.name}</label>
                      </div>
                    ))}
                  </div>
                  {touched.categories && errors.categories ? (
                    <span className="text-red-500 italic">
                      {errors.categories}
                    </span>
                  ) : null}
                </div>
              </div>

              <div className="flex items-stretch mb-4">
                <label
                  htmlFor="mo_ta"
                  className="w-[150px] font-medium text-lg"
                >
                  Tóm tắt
                </label>
                <div className="w-full">
                  <textarea
                    name="mo_ta"
                    id="mo_ta"
                    onChange={handleChange}
                    rows="10"
                    className={`w-full border rounded-md py-2 px-4 block ${
                      touched.mo_ta && errors.mo_ta
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                    onBlur={handleBlur}
                  ></textarea>
                  {touched.mo_ta && errors.mo_ta ? (
                    <span className="text-red-500 italic">{errors.mo_ta}</span>
                  ) : null}
                </div>
              </div>

              <div className="text-right">
                <button
                  className="rounded-md px-8 py-2 text-lg font-semibold bg-blue-500 text-white transition-all hover:bg-blue-600 disabled:opacity-60 disabled:cursor-wait"
                  type="submit"
                  disabled={isSubmitting}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TaoTruyen;
