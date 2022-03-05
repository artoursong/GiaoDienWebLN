import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  password: Yup.string()
    .required("Mật khẩu không được để trống")
    .min(6, "Mật khẩu phải có ít nhất 6 kí tự"),
  newPassword: Yup.string()
    .required("Mật khẩu không được để trống")
    .min(6, "Mật khẩu phải có ít nhất 6 kí tự")
    .when("password", {
      is: (val) => (val && val.length > 0 ? true : false),
      then: Yup.string().notOneOf(
        [Yup.ref("password"), Yup.ref("password")],
        "Mật khẩu mới và cũ phải khác nhau."
      ),
    }),
  confirmPassword: Yup.string()
    .required("Mật khẩu không được để trống")
    .min(6, "Mật khẩu phải có ít nhất 6 kí tự")
    .when("newPassword", {
      is: (val) => (val && val.length > 0 ? true : false),
      then: Yup.string().oneOf(
        [Yup.ref("newPassword")],
        "Mật khẩu không trùng khớp"
      ),
    }),
});

export default validationSchema;
