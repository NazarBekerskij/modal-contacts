import { createPortal } from "react-dom"
const modalRoot = document.getElementById("root-modal")

import { useEffect } from "react"

function Modal({ children, onClose }) {

useEffect(() => {
  const handleKeyDown = (evt) => {
    if (evt.key === "Escape") {
      onClose()
    }
  }

  window.addEventListener("keydown", handleKeyDown)

  return () => {
    window.removeEventListener("keydown", handleKeyDown)
  }
}, [onClose])

  const handleBackdropClick = (evt) => {
  if (evt.target === evt.currentTarget) {
    onClose()
  }
}

  return  createPortal(
    <div className="backdrop" onClick={handleBackdropClick}>
      <div className="modal">
        <button type="button" onClick={onClose}>
          x
        </button>

        {children}
      </div>
    </div>, modalRoot
  )
}

export default Modal