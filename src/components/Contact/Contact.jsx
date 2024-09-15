import css from "./Contact.module.css";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";
export default function Contact({data: {name, number, id}, onDelete}) {

    return (
<div className={css.container}>
<div>   
    <p className={css.text}><BsFillPersonFill /> {name}</p>
    <p className={css.text}><BsFillTelephoneFill /> {number}</p>
</div> 
      <button className={css.button} onClick={()=>onDelete(id)}>
        Delete
      </button>
    </div>

    );
}