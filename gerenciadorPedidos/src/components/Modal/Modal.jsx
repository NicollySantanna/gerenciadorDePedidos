import styles from "./Modal.module.css"
import { FaRegTimesCircle } from "react-icons/fa";

const Modal = ({ food, closeModal }) => {

  if(!food) return null
  return (
    <>
      <div className={styles.modalBackdrop} onClick={closeModal}>
        <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
          <img src={food.cardImg} alt={food.nameFood} />

          <div className={styles.containerInfo}>
          <h2>{food.nameFood}</h2>
          <p>Comida brasileira com tempeiros naturais</p>
          </div>
          <div className={styles.infoDown}>
          <span>{food.priceFood}</span>
          <button onClick={closeModal}><FaRegTimesCircle /></button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
