import { useState } from "react";
import { useFormik } from "formik";
import validationSchema from "./formik/validationSchema";
import initialValues from "./formik/initialValues";
import Container from "components/Container";
import { useAuth } from "context/authContext";
import bookService from "api/truyenAPI";
import ImageUpload from "./ImageUpload";

const genres = [
  { id: 1, name: "Action" },
  { id: 2, name: "Adult" },
  { id: 3, name: "Adventure" },
  { id: 4, name: "Chinese Novel" },
  { id: 5, name: "Comedy" },
  { id: 6, name: "Drama" },
  { id: 7, name: "English Novel" },
  { id: 8, name: "Fantasy" },
  { id: 9, name: "Historical" },
  { id: 10, name: "Horror" },
  { id: 11, name: "Korean Novel" },
  { id: 12, name: "Magic" },
  { id: 13, name: "Seinen" },
  { id: 14, name: "Romance" },
  { id: 15, name: "School Life" },
  { id: 16, name: "Science Fiction" },
  { id: 17, name: "Slice of Life" },
  { id: 18, name: "Sports" },
  { id: 19, name: "Tragedy" },
];

const TaoTruyen = () => {
  const [authState] = useAuth();
  const [uploadImg, setUploadImg] = useState({ url: "", file: null });

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      let imageURL = null;
      if (uploadImg.file) {
        const response = await bookService.uploadImage(uploadImg.file);

        if (response.data) {
          imageURL = response.data.secure_url;
        }
      }

      const response = await bookService.createBook({
        ...values,
        image: imageURL,
        iD_User: authState.user.iD_User,
      });
      if (response.status === 200) {
        setSubmitting(false);
        alert("Da them truyen");
        resetForm();
        setUploadImg({ url: "", file: null });
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
          <h1 className="mb-5 text-center text-3xl font-bold">Đăng truyện</h1>
          <div>
            <form onSubmit={handleSubmit}>
              <div className="mb-4 grid grid-cols-[150px_minmax(200px,_1fr)]">
                <label htmlFor="name" className="w-[150px] text-lg font-medium">
                  Tiêu đề
                </label>
                <div className="w-full">
                  <input
                    type="text"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                    className={`block w-full rounded-md border py-2 px-4 ${
                      touched.name && errors.name
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                    autoComplete="off"
                    onBlur={handleBlur}
                  />
                  {touched.name && errors.name ? (
                    <span className="italic text-red-500">{errors.name}</span>
                  ) : null}
                </div>
              </div>
              <div>
                <ImageUpload
                  setUploadImage={setUploadImg}
                  uploadImage={uploadImg}
                />
              </div>

              <div className="mb-4 grid grid-cols-[150px_minmax(200px,_1fr)]">
                <label
                  htmlFor="ten_khac"
                  className="w-[150px] text-lg font-medium"
                >
                  Tiêu đề khác
                </label>
                <div className="w-full">
                  <input
                    type="text"
                    name="ten_khac"
                    value={values.ten_khac}
                    onChange={handleChange}
                    className={`block w-full rounded-md border py-2 px-4 ${
                      touched.ten_khac && errors.ten_khac
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                    autoComplete="off"
                    onBlur={handleBlur}
                  />
                </div>
                {touched.ten_khac && errors.ten_khac ? (
                  <span className="italic text-red-500">{errors.ten_khac}</span>
                ) : null}
              </div>

              <div className="mb-4 grid grid-cols-[150px_minmax(200px,_1fr)]">
                <label
                  htmlFor="author"
                  className="w-[150px] text-lg font-medium"
                >
                  Tác giả
                </label>
                <div className="w-full">
                  <input
                    type="text"
                    name="author"
                    onChange={handleChange}
                    className={`block w-full rounded-md border py-2 px-4 ${
                      touched.author && errors.author
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                    autoComplete="off"
                    onBlur={handleBlur}
                  />
                  {touched.author && errors.author ? (
                    <span className="italic text-red-500">{errors.author}</span>
                  ) : null}
                </div>
              </div>

              <div className="mb-4 grid grid-cols-[150px_minmax(200px,_1fr)]">
                <label
                  htmlFor="hoa_si"
                  className="w-[150px] text-lg font-medium"
                >
                  Họa sĩ
                </label>
                <div className="w-full">
                  <input
                    type="text"
                    name="hoa_si"
                    onChange={handleChange}
                    className={`block w-full rounded-md border py-2 px-4 ${
                      touched.hoa_si && errors.hoa_si
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                    autoComplete="off"
                    onBlur={handleBlur}
                  />
                  {touched.hoa_si && errors.hoa_si ? (
                    <span className="italic text-red-500">{errors.hoa_si}</span>
                  ) : null}
                </div>
              </div>

              <div className="mb-4 grid grid-cols-[150px_minmax(200px,_1fr)]">
                <label className="w-[150px] text-lg font-medium">
                  Thể loại
                </label>
                <div className="w-full">
                  <div className="flex w-full gap-5">
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
                    <span className="italic text-red-500">
                      {errors.categories}
                    </span>
                  ) : null}
                </div>
              </div>

              <div className="mb-4 grid grid-cols-[150px_minmax(200px,_1fr)]">
                <label
                  htmlFor="mo_ta"
                  className="w-[150px] text-lg font-medium"
                >
                  Tóm tắt
                </label>
                <div className="w-full">
                  <textarea
                    name="mo_ta"
                    id="mo_ta"
                    onChange={handleChange}
                    rows="10"
                    className={`block w-full rounded-md border py-2 px-4 ${
                      touched.mo_ta && errors.mo_ta
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                    onBlur={handleBlur}
                  ></textarea>
                  {touched.mo_ta && errors.mo_ta ? (
                    <span className="italic text-red-500">{errors.mo_ta}</span>
                  ) : null}
                </div>
              </div>

              <div className="text-right">
                <button
                  className="rounded-md bg-blue-500 px-8 py-2 text-lg font-semibold text-white transition-all hover:bg-blue-600 disabled:cursor-wait disabled:opacity-60"
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
