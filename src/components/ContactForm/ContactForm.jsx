import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";
import css from "./ContactForm.module.css"
import { nanoid } from 'nanoid';
import { BsFillTelephoneFill, BsFillPersonFill } from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux';
import { addContact, selectContacts } from '../../redux/contactsSlice';

export default function ContactForm() {
    const FeedbackSchema = Yup.object().shape({
        name: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
        number: Yup.string().min(3, "Too Short!").max(50, "Too Long!").matches(/^[0-9-]+$/, "Phone number is not valid").required("Phone number is required"),
    });

    const dispatch = useDispatch();
    const contacts = useSelector(selectContacts);

    const nameFieldId = nanoid();
    const telFieldId = nanoid();

    const handleSubmit = (values, { resetForm }) => {
        const { name, number } = values;

        if (contacts.some(contact => contact.name === name)) {
            alert(`${name} is already in contacts.`);
            return;
        }

        const newContact = {
            id: nanoid(),
            name,
            number,
        };

        dispatch(addContact(newContact));
        resetForm(); 
    };

    return (
        <Formik
            initialValues={{ name: '', number: '' }} 
            onSubmit={handleSubmit}
            validationSchema={FeedbackSchema}
        >
            {() => (
                <Form className={css.form}>
                    <div className={css.blok}>
                        <label htmlFor={nameFieldId}><BsFillPersonFill /> Name:</label>
                        <Field className={css.field} type="text" name="name" id={nameFieldId} placeholder="Name contact" />
                        <ErrorMessage className={css.error} name="name" component="span" />
                    </div>
                    <div className={css.blok}>
                        <label htmlFor={telFieldId}><BsFillTelephoneFill /> Number:</label>
                        <Field className={css.field} type="tel" name="number" id={telFieldId} placeholder="Phone number" />
                        <ErrorMessage className={css.error} name="number" component="span" />
                    </div>
                    <button className={css.button} type="submit">Add contact</button>
                </Form>
            )}
        </Formik>
    );
}
