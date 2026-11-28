import { nanoid } from "nanoid";
import { useState } from "react";

function ContactForm({onAddContact}) {

  const [formDate, setFormDate] = useState({
    firstName: "",
    secondName: "",
    phone: "",
    email: "",
  });

  const handleChange = (e) => {
    const {name, value} = e.target

    setFormDate(prev => ({
        ...prev,
        [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const newContact = {
        id: nanoid(),
        ...formDate
    }
      onAddContact(newContact)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
      type="text" 
      name="firstName" 
      value={formDate.firstName} 
      placeholder="First name"
      onChange={handleChange} 
      />
      <input 
      type="text" 
      name="secondName" 
      value={formDate.secondName} 
      placeholder="Second name"
      onChange={handleChange}
      />
      <input 
      type="tel" 
      name="phone" 
      value={formDate.phone} 
      placeholder="phone"
      onChange={handleChange}
      />
      <input 
      type="email" 
      name="email" 
      value={formDate.email} 
      placeholder="email"
      onChange={handleChange}
      />
      <button type="submit">Add Contact</button>
    </form>
  );
}


export default ContactForm