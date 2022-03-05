import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Tiêu đề không được để trống."),
  author: Yup.string().required("Tác giả không được để trống."),
  categories: Yup.array().min(1, "Thể loại không được để trống."),
  mo_ta: Yup.string().required("Tóm tắt không được để trống."),
});

export default validationSchema;
