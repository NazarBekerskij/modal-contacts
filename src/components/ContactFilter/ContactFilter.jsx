function ContactFilter ({value, onChange}) {
    return (
        <input 
        type="text" 
        placeholder="Search contacts" 
        value={value}
        onChange={onChange}
        />
    )
}

export default ContactFilter