import { useState } from "react";

// formik
import { useFormik } from "formik";
import validationSchema from "./formik/validationSchema";
import initialValues from "./formik/initialValues";

// libs
import { Link } from "react-router-dom";
import { HiChevronLeft } from "react-icons/hi";

// context
import { useAuth } from "context/authContext";

// components
import Container from "components/Container";
import bookService from "api/truyenAPI";
import ImageUpload from "./ImageUpload";
import Form from "components/Form";

import genres from "constant/genres";

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
              <Form.Label htmlFor={"name"}>Tiêu đề</Form.Label>
              <Form.Input
                onBlur={handleBlur}
                onChange={handleChange}
                isError={touched.name && errors.name}
                error={<Form.Error>{errors.name}</Form.Error>}
                disabled={isSubmitting}
                value={values.name}
                name="name"
              />
            </div>
            <div>
              <ImageUpload
                setUploadImage={setUploadImg}
                uploadImage={uploadImg}
              />
            </div>

            <div className="mb-4">
              <Form.Label htmlFor={"ten_khac"}>Tiêu đề khác</Form.Label>
              <Form.Input
                onBlur={handleBlur}
                onChange={handleChange}
                isError={touched.ten_khac && errors.ten_khac}
                error={<Form.Error>{errors.ten_khac}</Form.Error>}
                disabled={isSubmitting}
                value={values.ten_khac}
                name="ten_khac"
              />
            </div>

            <div className="mb-4">
              <Form.Label htmlFor={"author"}>Tác giả</Form.Label>
              <Form.Input
                onBlur={handleBlur}
                onChange={handleChange}
                isError={touched.author && errors.author}
                error={<Form.Error>{errors.author}</Form.Error>}
                disabled={isSubmitting}
                value={values.author}
                name="author"
              />
            </div>

            <div className="mb-4">
              <Form.Label htmlFor={"hoa_si"}>Họa sĩ</Form.Label>
              <Form.Input
                onBlur={handleBlur}
                onChange={handleChange}
                isError={touched.hoa_si && errors.hoa_si}
                error={<Form.Error>{errors.hoa_si}</Form.Error>}
                disabled={isSubmitting}
                value={values.hoa_si}
                name="hoa_si"
              />
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
                      <Form.Label size="text-base" htmlFor={genre.id}>
                        {genre.name}
                      </Form.Label>
                    </div>
                  ))}
                </div>
                {touched.categories && errors.categories ? (
                  <Form.Error>{errors.categories}</Form.Error>
                ) : null}
              </div>
            </div>

            <div className="mb-4">
              <Form.Label htmlFor={"mo_ta"}>Tóm tắt</Form.Label>
              <Form.TextArea
                onBlur={handleBlur}
                onChange={handleChange}
                isError={touched.mo_ta && errors.mo_ta}
                error={<Form.Error>{errors.mo_ta}</Form.Error>}
                disabled={isSubmitting}
                value={values.mo_ta}
                name="mo_ta"
              />
            </div>

            <div className="text-right">
              <Form.Submit disabled={isSubmitting}>Đăng truyện</Form.Submit>
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default CreateBook;
