import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  username: Yup.string().required("Username không được để trống"),
  email: Yup.string()
    .email("Email không hợp lệ")
    .required("Email không được để trống"),
  password: Yup.string()
    .required("Mật khẩu không được để trống")
    .min(6, "Mật khẩu phải trên 6 kí tự"),
});

export default validationSchema;
