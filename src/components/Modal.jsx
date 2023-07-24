import classes from "./Modal.module.css";
import { useNavigate } from "react-router-dom";

function Modal({ children }) {
  const navigate = useNavigate();

  function closeHandler() {
    navigate(".."); // 한 단계 위로 -> 여기서는 '/'로 가게 됨
  }
  return (
    <>
      <div className={classes.backdrop} onClick={closeHandler} />
      <dialog open className={classes.modal}>
        {children}
      </dialog>
    </>
  );
}

export default Modal;
