import { useState } from "react";
import initialValues from "./formik/initialValues";
import validationSchema from "./formik/validationSchema";
import { useFormik } from "formik";
import { Editor } from "@tinymce/tinymce-react";
import bookService from "api/truyenAPI";
import LoadingSpinner from "components/LoadingSpinner";
import { useParams } from "react-router-dom";
import { useTruyen } from "context/truyenContext";

const FormTaoChuong = () => {
  const [truyen, setTruyen] = useTruyen();
  const params = useParams();
  const [content, setContent] = useState("");
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      setSubmitting(true);
      if (content.trim()) {
        const response = await bookService.createChapter({
          iD_Volume: +params.volumeId,
          text: content,
          name: values.name,
        });
        if (response.status === 200) {
          alert("Đăng truyện thành công");
          resetForm();
          setContent("");
          setTruyen((prev) => ({ ...prev, volumes: response.data }));
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
      <div>
        <h2 className="mb-5 text-2xl font-bold text-white">
          Thêm chương cho{" "}
          {truyen &&
            truyen.volumes.find((volume) => volume.id === +params.volumeId)
              .name}
        </h2>

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
                className={`mt-1 mb-2 block w-full rounded-md border bg-[#314053] px-4 py-2 text-white ${
                  touched.name && errors.name
                    ? "border-red-500"
                    : "border-transparent"
                }`}
                autoComplete="off"
                onBlur={handleBlur}
              />
              {touched.name && errors.name ? (
                <span className="text-sm italic text-red-500">
                  {errors.name}
                </span>
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
            className="rounded-md bg-indigo-700 px-4 py-2 text-white transition-all hover:bg-indigo-800 disabled:pointer-events-none disabled:opacity-60"
            type="submit"
            disabled={isSubmitting}
          >
            Tạo chương
          </button>
        </form>
      </div>
    </>
  );
};

export default FormTaoChuong;
