import styles from "./ProductItem.module.css";
import { useState } from "react";

const Modal = (props) => {
  return (
    <div className={styles.modal} onClick={props.onClose}>
      <div className={styles.modal__content}>
        <h2 className={styles.modal__title}>
          Are you sure you want to delete this product?
        </h2>
        <div className={styles.modal__buttons}>
          <button
            className={`${styles.modal__button} ${styles.modal__button__cancel}`}
            onClick={props.onClose}
          >
            Cancel
          </button>
          <button
            className={`${styles.modal__button} ${styles.modal__button__delete}`}
            onClick={props.onDelete}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export const ProductItem = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleDeleteProduct = () => {
    props.onDeleteProduct(props.title);
    handleCloseModal();
  };

  return (
    <div>
      <div className={styles.product}>
        <div className={styles.product__img}>
          <img src={props.img} alt="Product Image" />
        </div>
        <div className={styles.product__title}>
          <h3>{props.title}</h3>
        </div>
        <div className={styles.product__description}>
          <p>{props.description}</p>
        </div>
        <div className={styles.product__price}> {props.price}</div>
        <div className={styles.product__actions}>
          <button onClick={() => props.onEditProduct(props.title)}>Edit</button>
          {/* <button onClick={() => props.onDeleteProduct(props.title)}>
            Delete
          </button> */}
          <button onClick={handleOpenModal}>Delete</button>
        </div>
      </div>
      {isOpen && (
        <Modal onClose={handleCloseModal} onDelete={handleDeleteProduct} />
      )}
    </div>
  );
};
