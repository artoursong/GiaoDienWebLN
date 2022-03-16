import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  title: Yup.string().required("Tiêu đề không được để trống."),
});

export default validationSchema;
