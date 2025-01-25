import styles from "./AddProduct.module.css";

export const AddProduct = (props) => {
  return (
    <div className={styles.addProduct}>
      <input
        type="text"
        placeholder="Title"
        className={styles.addProduct__input}
        value={props.title}
        onChange={props.onChange}
        name="title"
      />
      <input
        type="text"
        placeholder="Price"
        className={styles.addProduct__input}
        value={props.price}
        onChange={props.onChange}
        name="price"
      />
      <textarea
        placeholder="Description"
        className={styles.addProduct__textarea}
        value={props.description}
        onChange={props.onChange}
        name="description"
      />
      <button
        className={styles.addProduct__button}
        onClick={props.onAddProduct}
      >
        {props.isEditing ? "Edit Product" : "Create Product"}
      </button>
    </div>
  );
};
