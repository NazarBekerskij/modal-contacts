import { Component } from "react";
import style from "./Contacts.module.css";

class Contacts extends Component {
  render() {
    const { contacts, onDelete, onEdit } = this.props;

    return (
      <div className={style.container}>
        <h2>Мої контакти</h2>

        <ul className={style.list}>
          {contacts.map(({ id, firstName, secondName, phone, email }) => (
            <li className={style.item} key={id}>
              <h3>{firstName} {secondName}</h3>
              <p>{phone}</p>
              <p>{email}</p>

              <div className={style.buttons}>
                <button 
                className={style.edit}
                onClick={() => onEdit(id)}
                >
                  Редагувати
                </button>

                <button
                  className={style.delete}
                  onClick={() => onDelete(id)}
                >
                  Видалити
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Contacts;