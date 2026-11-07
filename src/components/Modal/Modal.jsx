import { Component } from "react";
import style from "./Modal.module.css"

class Modal extends Component {
  render() {
    const {onToggleModal, onHandleInput, onSubmit, firstName, secondName, email, phone} = this.props

    return (
      <div className={style.backdrop}>
        <div>
          <form onSubmit={onSubmit} className={style.form}>

            <button 
            onClick={onToggleModal}
            className={style.close}
            type="button"
            >x
            </button>

            <p className={style.text}>Додати контакт</p>

            <input 
            type="text" 
            className={style.input} 
            placeholder="ведіть ваше імя"
            value={firstName}
            name="firstName"
            onChange={onHandleInput}
            />

            <input 
            type="text" 
            className={style.input} 
            placeholder="ведіть ваше прізвище"
            value={secondName}
            name="secondName"
            onChange={onHandleInput}
            />

            <input type="tel" 
            className={style.input} 
            placeholder="ведіть ваш номер телефону"
            value={phone}
            name="phone"
            onChange={onHandleInput}
            />

            <input 
            type="email" 
            className={style.input} 
            placeholder="ведіть вашу пошту"
            value={email}
            name="email"
            onChange={onHandleInput}
            />

            <button 
            type="submit" 
            className={style.send}
            >Зберегти контакт
            </button>
          </form>
        </div>
      </div>
    );
  }
}


export default Modal