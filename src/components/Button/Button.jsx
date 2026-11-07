import { Component } from "react";
import style from "./Button.module.css";

class Button extends Component{
    render(){
        return(
            <button onClick={this.props.onOpenModal} className={style.btn} type="button">Добавити контакт контакт</button>
        )
    }
}

export default Button