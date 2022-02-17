import { useState } from "react";
import initialValues from "./formik/initialValues";
import validationSchema from "./formik/validationSchema";
import { useFormik } from "formik";
import { Editor } from "@tinymce/tinymce-react";
import bookService from "api/truyenAPI";
import LoadingSpinner from "components/LoadingSpinner";

const FormTaoChuong = () => {
  const [content, setContent] = useState("");
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      setSubmitting(true);
      if (content.trim()) {
        const response = await bookService.createChapter({
          iD_Volume: 2,
          text: content,
          name: values.name,
        });
        if (response.status === 200) {
          alert("Đăng truyện thành công");
          resetForm();
          setContent("");
        }
      }
      setSubmitting(false);
    },
  });

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    isSubmitting,
    handleSubmit,
  } = formik;

  const handleEditorChange = (newValue, editor) => {
    setContent(newValue);
  };

  function createMarkup(content) {
    return { __html: content };
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mb-5">
          <label
            htmlFor="name"
            className="mb-4 inline-block w-[150px] text-lg font-medium text-[#cbdff3]"
          >
            Tiêu đề
          </label>
          <div className="w-full">
            <input
              type="text"
              name="name"
              value={values.name}
              onChange={handleChange}
              className={`mb-2 block w-full rounded-md border bg-transparent py-2 px-4 text-white focus:border focus:border-blue-500 ${
                touched.title && errors.title
                  ? "border-red-500"
                  : "border-gray-400"
              }`}
              autoComplete="off"
              onBlur={handleBlur}
            />
            {touched.title && errors.title ? (
              <span className="italic text-red-500">{errors.title}</span>
            ) : null}
          </div>
        </div>
        <div className="mb-4">
          <label className="mb-4 inline-block w-[150px] text-lg font-medium text-[#cbdff3]">
            Nội dung
          </label>
          <Editor
            apiKey="c9afbhlj7a0wldum0x9otlweekf3cra96smk3q5mlfpdgaaq"
            init={{
              height: 500,
              menubar: false,
              plugins: [
                "advlist autolink lists link image",
                "charmap print preview anchor help",
                "searchreplace visualblocks code",
                "insertdatetime media table paste wordcount",
              ],
              toolbar:
                "undo redo | formatselect | bold italic | \
              alignleft aligncenter alignright | \
              bullist numlist outdent indent | help",
            }}
            onEditorChange={handleEditorChange}
            value={content}
          />
        </div>

        <button
          type="submit"
          className="rounded bg-blue-600 py-2 px-6 text-white"
        >
          Tạo chương
        </button>
      </form>
      <div className="w-[100px]">
        {isSubmitting ? <LoadingSpinner size={10} /> : null}
      </div>
    </>
  );
};

export default FormTaoChuong;
