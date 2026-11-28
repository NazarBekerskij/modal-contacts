import { createPortal } from "react-dom";
import { useEffect } from "react";

function Modal({ children, onClose }) {
  const handleBackDropClose = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

 useEffect(() => {
    const handleKeyDown = (event) => {
        if (event.key === "Escape") {
            onClose()
        }
    }

    window.addEventListener("keydown", handleKeyDown)

    return () => {
        window.removeEventListener("keydown", handleKeyDown)
    }
}, [onClose])


  return createPortal(
    <div className="backdrop" onClick={handleBackDropClose}>
      <div className="modal">
        <button type="button" onClick={onClose}>
          x
        </button>
        {children}
      </div>
    </div>,
    document.getElementById("root-modal"),
  );
}

export default Modal;
