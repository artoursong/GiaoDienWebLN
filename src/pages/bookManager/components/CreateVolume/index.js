import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { useFormik } from "formik";
import initialValues from "./formik/initialValues";
import validationSchema from "./formik/validationSchema";

import { useTruyen } from "context/truyenContext";
import bookService from "api/truyenAPI";

import ImageUpload from "../CreateBook/ImageUpload";
import Form from "components/Form";

const CreateVolume = ({ mode }) => {
  const [, setTruyen] = useTruyen();
  const [isLoading, setIsLoading] = useState(false);
  const [uploadImg, setUploadImg] = useState({ url: "", file: null });
  const navigate = useNavigate();

  const params = useParams();
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (_, { resetForm }) => {
      let imageURL = null;
      let response = null;

      if (uploadImg.file) {
        const response = await bookService.uploadImage(uploadImg.file);

        if (response.data) {
          imageURL = response.data.secure_url;
        }
      }

      if (mode !== "edit") {
        response = await bookService.createVolume({
          iD_Book: +params.id,
          image: imageURL,
          name: values.title,
        });
      } else {
        response = await bookService.editVolume({
          iD_Volume: +params.volumeId,
          image: imageURL || uploadImg.url,
          name: values.title,
        });
      }
      if (response.status === 200) {
        if (mode === "edit") {
          setTruyen((prev) => ({
            ...prev,
            volumes: prev.volumes.map((volume) =>
              volume.id === response.data.id ? response.data : volume
            ),
          }));
        } else {
          setTruyen((prev) => ({
            ...prev,
            volumes: prev.volumes.concat(response.data),
          }));
        }
        resetForm();
        navigate(`/manage/${params.id}`);
      }
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
    setValues,
    resetForm,
  } = formik;

  useEffect(() => {
    if (mode === "edit") {
      setIsLoading(true);
      const fetchVolume = async () => {
        const response = await bookService.getVolume(params.volumeId);

        if (response.status === 200) {
          setValues({ title: response.data.name });
          setUploadImg((prev) => ({ ...prev, url: response.data.image }));
        }
        setIsLoading(false);
      };
      fetchVolume();
    } else {
      resetForm();
    }
  }, [mode, params.volumeId, setValues, resetForm]);

  return (
    <>
      {!isLoading ? (
        <div>
          <h2 className="mb-5 text-2xl font-bold text-white">
            {mode === "edit" ? "Sửa tập" : "Tạo tập"}
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-5">
              <Form.Label htmlFor="title">Tiêu đề</Form.Label>
              <Form.Input
                name="title"
                value={values.title}
                onChange={handleChange}
                isError={touched.title && errors.title}
                error={<Form.Error>{errors.title}</Form.Error>}
                onBlur={handleBlur}
                disabled={isSubmitting}
              />
            </div>
            <ImageUpload
              setUploadImage={setUploadImg}
              uploadImage={uploadImg}
              labelColor="text-light-gray"
            />

            <Form.Submit disabled={isSubmitting}>
              {mode !== "edit" ? "Tạo tập" : "Sửa tập"}
            </Form.Submit>
          </form>
        </div>
      ) : null}
    </>
  );
};

export default CreateVolume;
