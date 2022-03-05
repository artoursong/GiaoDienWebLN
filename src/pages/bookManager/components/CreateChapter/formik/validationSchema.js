import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Tiêu đề không được để trống."),
});

export default validationSchema;
