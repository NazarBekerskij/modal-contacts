function Button ({text, onClick}) {
    return (
        <button onClick={onClick} type="button">{text}</button>
    )
}

export default Button