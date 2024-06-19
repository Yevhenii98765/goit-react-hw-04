import { Formik, Field, Form } from "formik";
export const SearchBar = ({ onSubmut }) => {

    const initialValues = { text: ""}

    const submitForm = (value, actions) => {
        onSubmut(value.text);
        actions.resetForm()
    }

  return (
        <Formik initialValues={initialValues} onSubmit={submitForm}>
            <Form>
                <Field type="text" name="text" placeholder="Enter yor"/>
                <button type="submit"> Search photos</button>
            </Form>
        </Formik>
  )
}
export default SearchBar