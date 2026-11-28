function ContactItem({ firstName, secondName, phone, email, onDelete}) {
  return (
    <li>
      <p>{firstName}</p>
      <p>{secondName}</p>
      <p>{phone}</p>
      <p>{email}</p>
      <button type="button" onClick={onDelete} >Delete</button>
    </li>
  );
}


export default ContactItem