import { nanoid } from "nanoid";
import { useState } from "react";

function ContactForm({onAddContact}) {
  const [formData, setFormData] = useState({
    firstName: "",
    secondName: "",
    phone: "",
    email: "",
  })

  const handleChange = (evt) => {
    const {name, value} = evt.target

    setFormData(prev => ({...prev, [name]: value})) 
  } 

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const newContact = {
        id:nanoid(),
        ...formData,
    }
    onAddContact(newContact)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
      type="text" 
      name="firstName" 
      onChange={handleChange} 
      value={formData.firstName} 
      required
      />
      <input 
      type="text" 
      name="secondName" 
      onChange={handleChange} 
      value={formData.secondName} 
      required
      />
      <input 
      type="text" 
      name="phone" 
      onChange={handleChange} 
      value={formData.phone} 
      required
      />
      <input 
      type="text" 
      name="email" 
      onChange={handleChange} 
      value={formData.email} 
      required
      />
      <button type="submit">Save Contact</button>
    </form>
  );
}

export default ContactForm;
