import styles from "./Products.module.css";

export const ProductItem = (props) => {
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
          <button onClick={() => props.onDeleteProduct(props.title)}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
