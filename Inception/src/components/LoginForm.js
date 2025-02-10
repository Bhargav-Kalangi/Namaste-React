import { useFormik } from "formik";
const LoginForm = () => {
  const initialValues = {
    name: "",
    email: "",
    channel: "",
  };
  const onSubmit = (values) => {
    console.log("form data", values);
  };
  const validate = (values) => {
    const errors = {};

    if (!values.name) {
      errors.name = "Required";
    }

    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email format";
    }

    return errors;
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });
  console.log(formik.errors);
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={formik.handleChange}
            values={formik.values.name}
            className="border-solid border-4 border-slate-400 rounded-lg p-2"
          />
          {formik.errors.name ? (
            <div className="error">{formik.errors.name}</div>
          ) : null}
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            onChange={formik.handleChange}
            values={formik.values.email}
            className="border-solid border-4 border-slate-400 rounded-lg p-2"
          />

          {formik.errors.email ? (
            <div className="error">{formik.errors.email}</div>
          ) : null}
        </div>

        <button
          type="submit"
          className="mt-3 text-center bg-blue-500 hover:bg-blue-700 text-white font-bold  p-1 border border-blue-700 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};
export default LoginForm;
