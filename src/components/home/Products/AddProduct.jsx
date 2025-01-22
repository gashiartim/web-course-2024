import { useState } from "react";
import styles from "./AddProduct.module.css";

export const AddProduct = (props) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const onAddProduct = () => {
    props.onAddProduct(title, price, description);
    setTitle("");
    setPrice("");
    setDescription("");
  };

  return (
    <div className={styles.addProduct}>
      <input
        type="text"
        placeholder="Title"
        className={styles.addProduct__input}
        value={title}
        onChange={(event) => {
          setTitle(event.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Price"
        className={styles.addProduct__input}
        value={price}
        onChange={(event) => {
          setPrice(event.target.value);
        }}
      />
      <textarea
        placeholder="Description"
        className={styles.addProduct__textarea}
        value={description}
        onChange={(event) => {
          setDescription(event.target.value);
        }}
      />
      <button className={styles.addProduct__button} onClick={onAddProduct}>
        Add Product
      </button>
    </div>
  );
};
