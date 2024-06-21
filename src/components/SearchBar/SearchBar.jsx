import { Formik, Field, Form } from "formik";
import s from './SearchBar.module.css'
import { MdImageSearch } from "react-icons/md";

export const SearchBar = ({ onSubmit}) => {

    const initialValues = { text: ""}

    const submitForm = (value, actions) => {
        onSubmit(value.text);
        actions.resetForm()
    }

  return (
        <div className={s.iner}>
            <Formik initialValues={initialValues} onSubmit={submitForm}>
                <Form className={s.form_style}>
                    <MdImageSearch className={s.icon_style}/>
                    <Field type="text" name="text" placeholder="Search term" className={s.input_style}/>
                    <button type="submit"> Go </button>
                </Form>
            </Formik>
        </div>
  )
}
export default SearchBar