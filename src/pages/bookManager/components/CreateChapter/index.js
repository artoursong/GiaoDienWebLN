import { useState } from "react";
import { useParams } from "react-router-dom";
import { Editor } from "@tinymce/tinymce-react";

// formik
import { useFormik } from "formik";
import initialValues from "./formik/initialValues";
import validationSchema from "./formik/validationSchema";

import { useTruyen } from "context/truyenContext";
import bookService from "api/truyenAPI";

import Form from "components/Form";

const CreateChapter = () => {
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

  const handleEditorChange = (newValue) => {
    setContent(newValue);
  };

  // function createMarkup(content) {
  //   return { __html: content };
  // }

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
            <Form.Label htmlFor="name">Tiêu đề</Form.Label>
            <Form.Input
              name="name"
              value={values.name}
              onChange={handleChange}
              isError={touched.name && errors.name}
              error={<Form.Error>{errors.name}</Form.Error>}
              onBlur={handleBlur}
            />
          </div>
          <div className="mb-4">
            <Form.Label htmlFor={""}>Nội dung</Form.Label>

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
                  "undo redo | formatselect | bold italic | alignleft aligncenter alignright | bullist numlist outdent indent | help",
              }}
              onEditorChange={handleEditorChange}
              value={content}
            />
          </div>

          <Form.Submit disabled={isSubmitting}>Tạo chương</Form.Submit>
        </form>
      </div>
    </>
  );
};

export default CreateChapter;
