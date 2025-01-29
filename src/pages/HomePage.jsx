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
    id: 1,
    title: "Produkti 1",
    price: "123 EUR",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    img: productOneImg,
  },
  {
    id: 2,
    title: "Produkti 2",
    price: "123 EUR",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    img: productTwoImg,
  },
  {
    id: 3,
    title: "Produkti 3",
    price: "123 EUR",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    img: productThreeImg,
  },
  {
    id: 4,
    title: "Produkti 4",
    price: "123 EUR",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    img: productFourImg,
  },
];

export const HomePage = () => {
  const [products, setProducts] = useState(PRODUCTS);

  const [isEditing, setIsEditing] = useState(false);
  const [product, setProduct] = useState({
    title: "",
    price: "",
    description: "",
  });

  const handleDeleteProduct = (title) => {
    setProducts(products.filter((product) => product.title !== title));
  };

  const handleEditProduct = (title) => {
    setIsEditing(true);
    const product = products.find((product) => product.title === title);

    if (!product) {
      window.alert("Product not found");
      return;
    }

    setProduct(product);
  };

  const handleAddProduct = () => {
    if (isEditing) {
      const newProducts = products.map((item) => {
        if (item.id === product.id) {
          return { ...item, ...product };
        }
        return item;
      });

      setProducts(newProducts);
      setIsEditing(false);
      setProduct({
        title: "",
        price: "",
        description: "",
      });

      return;
    }

    setProducts([
      ...products,
      {
        id: products.length + 1,
        title: product.title,
        price: product.price,
        description: product.description,
        img: productOneImg,
      },
    ]);

    setProduct({
      title: "",
      price: "",
      description: "",
    });
  };

  const handleOnChange = (event) => {
    setProduct({ ...product, [event.target.name]: event.target.value });
  };

  return (
    <div>
      <HeroBanner />
      <AddProduct
        onAddProduct={handleAddProduct}
        title={product.title}
        price={product.price}
        description={product.description}
        onChange={handleOnChange}
        isEditing={isEditing}
      />
      <Products
        data={products}
        onDeleteProduct={handleDeleteProduct}
        onEditProduct={handleEditProduct}
      />
      <div className="bg-red-500 mt-6 pt-10 block text-center py-10">
        babloki
      </div>
    </div>
  );
};
