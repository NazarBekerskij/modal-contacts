import "./App.css";
import { Component } from "react";

import Button from "./components/Button/Button";
import Modal from "./components/Modal/Modal";

import { nanoid } from "nanoid";
import Contacts from "./components/Contacts/Contacts";

class App extends Component {
  state = {
    isModal: false,
    firstName: "",
    secondName: "",
    phone: "",
    email: "",
    contacts: [],
    editingId: null,
  };

  componentDidMount() {
    const saveContacts = localStorage.getItem("contacts");

    if (saveContacts) {
      this.setState({
        contacts: JSON.parse(saveContacts),
      });
    }
  }

  componentDidUpdate(_, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  handleInput = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };

handleToggleModal = () => {
  this.setState((prev) => ({
    isModal: !prev.isModal,
    editingId: null,
    firstName: "",
    secondName: "",
    phone: "",
    email: "",
  }));
};

  handleSubmit = (e) => {
    e.preventDefault();

    const { firstName, secondName, phone, email } = this.state;

    if (
      firstName.trim() === "" ||
      secondName.trim() === "" ||
      phone.trim() === "" ||
      email.trim() === ""
    ) {
      return;
    }

    const newContact = {
      id: nanoid(),
      firstName,
      secondName,
      phone,
      email,
    };

    this.setState((prev) => ({
      contacts: [...prev.contacts, newContact],
      firstName: "",
      secondName: "",
      phone: "",
      email: "",
      isModal: false,
    }));
  };

  handleDelete = (contactId) => {
    this.setState((prev) => ({
      contacts: prev.contacts.filter((contact) => contact.id !== contactId),
    }));
  };

  handleEdit = (contactId) => {
    const contact = this.state.contacts.find((item) => item.id === contactId);

    if (!contact) return;

    this.setState({
      editingId: contact.id,
      firstName: contact.firstName,
      secondName: contact.secondName,
      phone: contact.phone,
      email: contact.email,
      isModal: true,
    });
  };

 handleUpdate = (e) => {
  e.preventDefault();

  const {
    editingId,
    firstName,
    secondName,
    phone,
    email
  } = this.state;

  if (
    firstName.trim() === "" ||
    secondName.trim() === "" ||
    phone.trim() === "" ||
    email.trim() === ""
  ) {
    return;
  }

  this.setState((prev) => ({
    contacts: prev.contacts.map((contact) =>
      contact.id === editingId
        ? { ...contact, firstName, secondName, phone, email }
        : contact
    ),

    editingId: null,
    firstName: "",
    secondName: "",
    phone: "",
    email: "",
    isModal: false
  }));
};

  render() {
    const { firstName, secondName, email, phone } = this.state;
    return (
      <div>
        <Button onOpenModal={this.handleToggleModal} />
        {this.state.isModal && (
          <Modal
            onHandleInput={this.handleInput}
            onToggleModal={this.handleToggleModal}
            firstName={firstName}
            secondName={secondName}
            email={email}
            phone={phone}
            onSubmit={
              this.state.editingId !== null
                ? this.handleUpdate
                : this.handleSubmit
            }
          />
        )}

        <Contacts
          contacts={this.state.contacts}
          onDelete={this.handleDelete}
          onEdit={this.handleEdit}
        />
      </div>
    );
  }
}

export default App;
