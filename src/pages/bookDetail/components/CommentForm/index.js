import * as Yup from "yup";
import { useFormik } from "formik";
import bookService from "api/truyenAPI";
import { useParams } from "react-router-dom";
import { useAuth } from "context/authContext";

const initialValues = {
  comment: "",
};

const validationSchema = Yup.object().shape({
  comment: Yup.string().required("Bình luận không được để trống"),
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
      <label htmlFor="name" className="w-[150px] text-lg font-medium">
        Tiêu đề
      </label>
      <div className="mb-4 w-full">
        <textarea
          type="text"
          name="comment"
          value={values.comment}
          onChange={handleChange}
          className={`block w-full rounded-md border border-gray-600 bg-transparent py-2 px-4 text-light-gray ${
            touched.comment && errors.comment
              ? "border-red-500"
              : "border-gray-300"
          }`}
          autoComplete="off"
          onBlur={handleBlur}
        />
        {touched.comment && errors.comment ? (
          <span className="italic text-red-500">{errors.comment}</span>
        ) : null}
      </div>
      <button
        type="submit"
        className="rounded bg-blue-600 py-2 px-6 text-white hover:bg-blue-700 disabled:pointer-events-none disabled:opacity-50"
        disabled={isSubmitting || !values.comment}
      >
        Bình luận
      </button>
    </form>
  );
};

export default CommentForm;
