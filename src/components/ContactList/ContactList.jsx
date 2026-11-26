import ContactItem from "../ContactItem/ContactItem"


function ContactList ({contacts, onDelete}) {
    return (
        <ul>
            {contacts.map((item) => (
               <ContactItem  key={item.id} {...item} onDelete={onDelete}/>
            ))}
        </ul>
    )
}

export default ContactList