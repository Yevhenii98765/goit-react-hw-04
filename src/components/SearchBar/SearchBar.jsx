import { Formik, Field, Form, ErrorMessage } from "formik";
import s from './SearchBar.module.css'
import { MdImageSearch } from "react-icons/md";
import * as Yup from "yup";
import { Bounce, Flip, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const SearchBar = ({ onSubmit}) => {

    const FeedbackSchema = Yup.object().shape({
        text: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required")
      });

    const initialValues = { text: ""}

    const submitForm = (value, actions,) => {
        onSubmit(value.text);
        actions.resetForm()
    }


        
    const notify = () => toast.error('error!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Flip,
        });

  return (
        <div className={s.iner}>
            <Formik initialValues={initialValues} onSubmit={submitForm} validationSchema={FeedbackSchema}>
                <Form className={s.form_style}>
                    <div className={s.wrap}>
                        <MdImageSearch className={s.icon_style}/>
                        <Field type="text" name="text" placeholder="Search term" className={s.input_style}/>
                        <button  type="submit"> Go </button>
                        <ToastContainer />
                    </div>
                    <ErrorMessage name="text" component="span" className={s.error_style}/>
                </Form>
            </Formik>
        </div>
  )
}
export default SearchBar