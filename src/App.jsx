import "./App.css";

import Title from "./components/Title/Title";
import Button from "./components/Button/Button";
import Modal from "./components/Modal/Modal";
import ContactForm from "./components/ContactForm/ContactForm";

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

  return (
    <div>
      <Title
      text="Contacts App"
      />
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
    </div>
  )
}

export default App;
