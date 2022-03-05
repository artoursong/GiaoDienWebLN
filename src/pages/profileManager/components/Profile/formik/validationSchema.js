import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  username: Yup.string().required("Username không được để trống"),
  email: Yup.string().required("Email không được để trống"),
});

export default validationSchema;
