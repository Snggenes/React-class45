import React from "react";
import Products from "../fake-data/all-products";
import Categories from "../fake-data/all-categories";

export default function Main({ category, setCategory }) {
  const categoryCleaning = category.replace("FAKE: ", "");

  const filteredProducts =
    category === "all"
      ? Products
      : Products.filter((product) => {
          return product.category === categoryCleaning;
        });

  const ulItems = filteredProducts.map((item) => (
    <div key={item.id}>
      <img src={item.image} alt="" />
      <div>{item.title}</div>
    </div>
  ));

  function handleChange(e) {
    setCategory(e.target.innerHTML);
  }

  const categoryItems = Categories.map((category) => {
    return (
      <li
        key={Categories.indexOf(category)}
        className="cursor-pointer bg-gray-300 rounded p-4"
        onClick={handleChange}
      >
        {category}
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
