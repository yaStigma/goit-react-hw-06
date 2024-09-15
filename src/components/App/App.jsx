import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
// import initialContact from "../Contact/ContactPeople.json";
// import { useState, useEffect } from "react";
import css from "./App.module.css"


export default function App() {
//   const [contacts, setContacts] = useState(() => {
//     const savedContacts = localStorage.getItem("contacts");
//     return savedContacts ? JSON.parse(savedContacts) : initialContact;
//   });

// const [filter, setFilter] = useState ("");

// useEffect(() => {
//   localStorage.setItem("contacts", JSON.stringify(contacts));
// }, [contacts]);

// const addContact = (newContact) => {
//   setContacts((prevContacts) => {
//     return [...prevContacts, newContact];
//   });
// };

// const deleteContact = (contactId) => {
//   setContacts((prevContacts) => {
//     return prevContacts.filter((contact) => contact.id !== contactId);
//   });

// };

// const visibleContacts = contacts.filter((contact) => 
//   contact.name.toLowerCase().includes(filter.toLowerCase()));

  return (
<div className={css.container}>
<h1>Phonebook</h1>
<ContactForm /> 
<SearchBox />
<ContactList />
</div>


  );
}