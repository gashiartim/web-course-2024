import styles from "./Products.module.css";
import { ProductItem } from "./ProductItem";
import productOneImg from "../../../assets/product-1.avif";
import productTwoImg from "../../../assets/product-2.jpg";
import productThreeImg from "../../../assets/product-3.avif";
import productFourImg from "../../../assets/product-4.avif";

// const PRODUCTS = [
//   {
//     title: "Produkti 1",
//     price: "123 EUR",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
//     img: productOneImg,
//   },
//   {
//     title: "Produkti 2",
//     price: "123 EUR",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
//     img: productTwoImg,
//   },
//   {
//     title: "Produkti 3",
//     price: "123 EUR",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
//     img: productThreeImg,
//   },
//   {
//     title: "Produkti 4",
//     price: "123 EUR",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
//     img: productFourImg,
//   },
// ];

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
          />
        );
      })}
    </div>
  );
};
