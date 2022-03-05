import { useState } from "react";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import { HiChevronLeft } from "react-icons/hi";
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

const CreateBook = () => {
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
    <Container size="max-w-[1200px]">
      <div>
        <div className="relative mb-5 flex items-center justify-center">
          <h1 className="text-center text-3xl font-bold text-white">
            Đăng truyện
          </h1>
          <Link
            to="/manage"
            className="absolute left-0 flex items-center rounded-md bg-indigo-700 px-4 py-2 text-white transition-all hover:bg-indigo-600 disabled:pointer-events-none disabled:opacity-60"
          >
            <HiChevronLeft className="mr-2 text-lg" /> Quay lại
          </Link>
        </div>

        <div>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="inline-block text-lg font-medium text-gray-300"
              >
                Tiêu đề
              </label>
              <div className="w-full">
                <input
                  type="text"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  className={`mt-1 mb-2 block w-full rounded-md border bg-[#314053] px-4 py-2 text-white ${
                    touched.name && errors.name
                      ? "border-red-500"
                      : "border-transparent"
                  }`}
                  autoComplete="off"
                  onBlur={handleBlur}
                  disabled={isSubmitting}
                />
                {touched.name && errors.name ? (
                  <span className="text-sm italic text-red-500">
                    {errors.name}
                  </span>
                ) : null}
              </div>
            </div>
            <div>
              <ImageUpload
                setUploadImage={setUploadImg}
                uploadImage={uploadImg}
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="ten_khac"
                className="inline-block text-lg font-medium text-gray-300"
              >
                Tiêu đề khác
              </label>
              <div className="w-full">
                <input
                  type="text"
                  name="ten_khac"
                  value={values.ten_khac}
                  onChange={handleChange}
                  className={`mt-1 mb-2 block w-full rounded-md border bg-[#314053] px-4 py-2 text-white ${
                    touched.ten_khac && errors.ten_khac
                      ? "border-red-500"
                      : "border-transparent"
                  }`}
                  autoComplete="off"
                  onBlur={handleBlur}
                  disabled={isSubmitting}
                />
              </div>
              {touched.ten_khac && errors.ten_khac ? (
                <span className="text-sm italic text-red-500">
                  {errors.ten_khac}
                </span>
              ) : null}
            </div>

            <div className="mb-4">
              <label
                htmlFor="author"
                className="inline-block text-lg font-medium text-gray-300"
              >
                Tác giả
              </label>
              <div className="w-full">
                <input
                  type="text"
                  name="author"
                  onChange={handleChange}
                  className={`mt-1 mb-2 block w-full rounded-md border bg-[#314053] px-4 py-2 text-white ${
                    touched.author && errors.author
                      ? "border-red-500"
                      : "border-transparent"
                  }`}
                  autoComplete="off"
                  onBlur={handleBlur}
                  disabled={isSubmitting}
                />
                {touched.author && errors.author ? (
                  <span className="text-sm italic text-red-500">
                    {errors.author}
                  </span>
                ) : null}
              </div>
            </div>

            <div className="mb-4">
              <label
                htmlFor="hoa_si"
                className="inline-block text-lg font-medium text-gray-300"
              >
                Họa sĩ
              </label>
              <div className="w-full">
                <input
                  type="text"
                  name="hoa_si"
                  onChange={handleChange}
                  className={`mt-1 mb-2 block w-full rounded-md border bg-[#314053] px-4 py-2 text-white ${
                    touched.hoa_si && errors.hoa_si
                      ? "border-red-500"
                      : "border-transparent"
                  }`}
                  autoComplete="off"
                  onBlur={handleBlur}
                  disabled={isSubmitting}
                />
                {touched.hoa_si && errors.hoa_si ? (
                  <span className="text-sm italic text-red-500">
                    {errors.hoa_si}
                  </span>
                ) : null}
              </div>
            </div>

            <div className="mb-4">
              <label className="mb-2 inline-block text-lg font-medium text-gray-300">
                Thể loại
              </label>
              <div className="w-full">
                <div className="mb-2 grid grid-cols-[150px_150px_150px_150px] gap-2">
                  {genres.map((genre) => (
                    <div key={genre.id} className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        name="categories"
                        id={genre.id}
                        onChange={handleChange}
                        value={genre.id}
                        className="checked:bg-indigo-600"
                        onBlur={handleBlur}
                        disabled={isSubmitting}
                      />
                      <label htmlFor={genre.id} className="text-light-gray">
                        {genre.name}
                      </label>
                    </div>
                  ))}
                </div>
                {touched.categories && errors.categories ? (
                  <span className="text-sm italic text-red-500">
                    {errors.categories}
                  </span>
                ) : null}
              </div>
            </div>

            <div className="mb-4">
              <label
                htmlFor="mo_ta"
                className="inline-block text-lg font-medium text-gray-300"
              >
                Tóm tắt
              </label>
              <div className="w-full">
                <textarea
                  name="mo_ta"
                  id="mo_ta"
                  onChange={handleChange}
                  rows="10"
                  className={`mt-1 mb-2 block w-full rounded-md border bg-[#314053] px-4 py-2 text-white ${
                    touched.mo_ta && errors.mo_ta
                      ? "border-red-500"
                      : "border-transparent"
                  }`}
                  onBlur={handleBlur}
                  disabled={isSubmitting}
                ></textarea>
                {touched.mo_ta && errors.mo_ta ? (
                  <span className="text-sm italic text-red-500">
                    {errors.mo_ta}
                  </span>
                ) : null}
              </div>
            </div>

            <div className="text-right">
              <button
                className="rounded-md bg-indigo-600 px-8 py-2 text-lg font-semibold text-white transition-all hover:bg-indigo-700 disabled:cursor-wait disabled:opacity-60"
                type="submit"
                disabled={isSubmitting}
              >
                Đăng truyện
              </button>
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default CreateBook;
