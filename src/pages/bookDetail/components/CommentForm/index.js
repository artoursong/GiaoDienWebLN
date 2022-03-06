import * as Yup from "yup";
import { useFormik } from "formik";
import bookService from "api/truyenAPI";
import { useParams } from "react-router-dom";
import { useAuth } from "context/authContext";

import Form from "components/Form";

const initialValues = {
  comment: "",
};

const validationSchema = Yup.object().shape({
  comment: Yup.string()
    .required("Bình luận không được để trống")
    .min(10, "Bình luận phải có ít nhất 10 ký tự."),
});

const CommentForm = ({ setData, setPageIndex }) => {
  const { id } = useParams();
  const [authState] = useAuth();
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      setSubmitting(true);
      const response = await bookService.postComment({
        iD_User: authState.user.iD_User,
        iD_Book: +id,
        text: values.comment,
      });

      if (response.status === 200) {
        setData((prev) => ({
          ...prev,
          comment: response.data.comment,
          page_sum: response.data.page_sum,
        }));
        setPageIndex(response.data.page);
        resetForm();
      }
      setSubmitting(false);
    },
  });

  const {
    isSubmitting,
    values,
    touched,
    handleBlur,
    handleChange,
    errors,
    handleSubmit,
  } = formik;

  return (
    <form onSubmit={handleSubmit}>
      <div className="my-4 w-full">
        <Form.TextArea
          type="text"
          name="comment"
          value={values.comment}
          onChange={handleChange}
          onBlur={handleBlur}
          rows={3}
          isError={touched.comment && errors.comment}
          error={<Form.Error>{errors.comment}</Form.Error>}
        />
      </div>
      <Form.Submit disabled={isSubmitting || !values.comment || errors.comment}>
        Bình luận
      </Form.Submit>
    </form>
  );
};

export default CommentForm;
