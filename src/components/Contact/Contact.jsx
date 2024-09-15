import css from "./Contact.module.css";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';


export default function Contact({name, number, id}) {
  const dispatch = useDispatch();
    return (
<div className={css.container}>
<div>   
    <p className={css.text}><BsFillPersonFill /> {name}</p>
    <p className={css.text}><BsFillTelephoneFill /> {number}</p>
</div> 
      <button className={css.button} onClick={() => dispatch(deleteContact(id))}>
        Delete
      </button>
    </div>

    );
}