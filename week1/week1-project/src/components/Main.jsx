import React from "react";
import Products from "../fake-data/all-products";
import Categories from "../fake-data/all-categories";

export default function Main({ products, setProducts }) {

  const categoryCleaning = products.replace("FAKE: ", "");

  const filteredProducts =
    products === "allProducts"
      ? Products
      : Products.filter((product) =>{
          return product.category === categoryCleaning;
      });

  const ulItems = filteredProducts.map((item) => (
    <div key={item.id}>
      <img src={item.image} alt="" />
      <div>{item.title}</div>
    </div>
  ));

  function handleChange(e) {
    setProducts(e.target.innerHTML)
  }

  const categoryItems = Categories.map((item) => {
    return (
      <li className="cursor-pointer bg-gray-300 rounded p-4" onClick={handleChange}>
        {item}
      </li>
    );
  });

  return (
    <>
      <ul className="flex gap-8 text-xl mb-10">{categoryItems}</ul>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
        {ulItems}
      </div>
    </>
  );
}
