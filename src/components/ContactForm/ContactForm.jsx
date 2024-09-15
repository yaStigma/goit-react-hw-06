import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";
import css from "./ContactForm.module.css"
import { nanoid } from 'nanoid'
import { BsFillTelephoneFill } from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";

export default function ContactForm({ onAdd }) {
    const FeedbackSchema = Yup.object().shape({
        name: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
        number: Yup.string().min(3, "Too Short!").max(50, "Too Long!").matches(/^[0-9-]+$/, "Phone number is not valid").required("Phone number is required"),
    });

    const initialValues = {
        name: "",
        number: "",
      };

      const nameFieldId = nanoid();
      const telFieldId = nanoid();

const handleSubmit = (values, actions) => {
    onAdd({
      ...values,
      id: nanoid(),
    });
    actions.resetForm();
  };
    return (

    
<Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={FeedbackSchema}>
    <Form className={css.form}>
<div className={css.blok}>
        <label htmlFor={nameFieldId}><BsFillPersonFill /> Name:</label>
        <Field className={css.field} type="text" name="name" id="nameFieldId" placeholder="Name contact" />
        <ErrorMessage className={css.error} name="name" component="span" /> 
</div>
      <div className={css.blok}>
        <label htmlFor={telFieldId}><BsFillTelephoneFill /> Number:</label>
        <Field className={css.field} type="tel" name="number" id="telFieldId" placeholder="Phone number" />
        <ErrorMessage className={css.error} name="number" component="span" /> 
        </div>  
        <button className={css.button} type="submit">Add contact</button>
    </Form>
</Formik>
    );
}
