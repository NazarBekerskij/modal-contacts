import "./App.css";

import Title from "./components/Title/Title";
import Button from "./components/Button/Button";
import Modal from "./components/Modal/Modal";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactFilter from "./components/ContactFilter/ContactFilter";
import ContactList from "./components/ContactList/ContactList";

import { useState } from "react";


function App () {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenModal = () => {
      setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  const [contacts, setContacts] = useState([])

  const handleAddContact = (newContact) => {
    setContacts(prev => [...prev, newContact])
    handleCloseModal()
  }

  const handleDeleteContacts = (contactsId) => {
    setContacts(prev => 
      prev.filter(item => item.id !== contactsId))
  }

  const [filter, setFilter] = useState("")

  const handleFilterChange = (value) => {
    setFilter(value)
  }

  const filteredContacts = contacts.filter(item => 
    item.firstName.toLowerCase().includes(filter.toLowerCase())
    ||
    item.secondName.toLowerCase().includes(filter.toLowerCase())
  )

  return (
    <div>
      <Title
      text="Contacts App"
      />
      <ContactFilter onFilter={handleFilterChange}/>
      <Button
      onClick={handleOpenModal}
      text="+ Add Contact"
      />

      {isModalOpen && (
        <Modal onClose={handleCloseModal}>
          <h2>Add Contact</h2>
          <ContactForm onAddContact={handleAddContact}/>
        </Modal>
      )}
      <ContactList onDelete={handleDeleteContacts} contacts={filteredContacts}/>
    </div>
  )
}

export default App;
