import "./App.css";

import { useState } from "react";

import Title from "./components/Title/Title";
import Button from "./components/Button/Button";
import Modal from "./components/Modal/Modal";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import ContactFilter from "./components/ContactFilter/ContactFilter";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const [contacts, setContacts] = useState([])

  const onAddContact = (newContact) => {
    setContacts(prev => [...prev, newContact])
    handleCloseModal()
  }
  
  const handleDelete = (contactId) => {
    setContacts(prev => (
      prev.filter(contact => contact.id !== contactId)
    ))
  }

  const [filter, setFilter] = useState("")

  const handleFilterChange = (e) => {
    setFilter(e.target.value)

   
  } 

   const filteredContacts = contacts.filter(contact => (
       contact.firstName.toLowerCase().includes(filter.toLowerCase().trim())
    ))

  return (
    <div>
      <Title text="Contacts" />
      <Button onClick={handleOpenModal} text="+Add Contacts" />
      <ContactFilter
      value={filter}
      onChange={handleFilterChange}
      />
      {isModalOpen && (
        <Modal onClose={handleCloseModal}>
         <ContactForm onAddContact={onAddContact}/>
        </Modal>
      )}
      <ContactList contacts={filteredContacts} onDelete={handleDelete}/>
    </div>
  );
}

export default App;
