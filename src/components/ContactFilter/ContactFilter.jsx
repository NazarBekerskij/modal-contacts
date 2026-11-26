function ContactFilter ({onFilter}) {
    return (
        <input 
        type="text" 
        placeholder="Search Contacts" 
        onChange={(evt) => onFilter(evt.target.value)}
        />
    )
}

export default ContactFilter