import ContactItem from "../ContactItem/ContactItem";

function ContactList ({contacts, onDelete}) {
    return (
        <div>
            <ul>
            {contacts.map((item) => (
                <ContactItem key={item.id} {...item} onDelete={() => onDelete(item.id)}/>
            ))}
            </ul>
        </div>
    )
}

export default ContactList