import { HeroBanner } from "../components/home/HeroBanner/HeroBanner";
import { Products } from "../components/home/Products/Products";
import productOneImg from "../assets/product-1.avif";
import productTwoImg from "../assets/product-2.jpg";
import productThreeImg from "../assets/product-3.avif";
import productFourImg from "../assets/product-4.avif";
import { useState } from "react";
import { AddProduct } from "../components/home/Products/AddProduct";

const PRODUCTS = [
  {
    title: "Produkti 1",
    price: "123 EUR",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    img: productOneImg,
  },
  {
    title: "Produkti 2",
    price: "123 EUR",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    img: productTwoImg,
  },
  {
    title: "Produkti 3",
    price: "123 EUR",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    img: productThreeImg,
  },
  {
    title: "Produkti 4",
    price: "123 EUR",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    img: productFourImg,
  },
];

export const HomePage = () => {
  const [products, setProducts] = useState(PRODUCTS);

  const handleDeleteProduct = (title) => {
    setProducts(products.filter((product) => product.title !== title));
  };

  const handleAddProduct = (title, price, description) => {
    setProducts([
      ...products,
      {
        title: title,
        price: price,
        description: description,
        img: productOneImg,
      },
    ]);
  };

  return (
    <div>
      <HeroBanner />
      <AddProduct onAddProduct={handleAddProduct} />
      <Products data={products} onDeleteProduct={handleDeleteProduct} />
    </div>
  );
};
