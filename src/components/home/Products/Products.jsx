import styles from "./Products.module.css";
import { ProductItem } from "./ProductItem";

export const Products = (props) => {
  return (
    <div className={styles.products}>
      {props.data.map((item) => {
        return (
          <ProductItem
            key={item.title}
            title={item.title}
            price={item.price}
            description={item.description}
            img={item.img}
            onDeleteProduct={props.onDeleteProduct}
            onEditProduct={props.onEditProduct}
          />
        );
      })}
    </div>
  );
};
