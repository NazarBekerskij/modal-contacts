function ContactItem ({id, firstName, secondName, phone, email, onDelete}) {
  return (
    <li>
      <p>{firstName}</p>
      <p>{secondName}</p>
      <p>{phone}</p>
      <p>{email}</p>
      <button onClick={() => onDelete(id)} type="button">Delete</button>
    </li>
  );
}


export default ContactItem