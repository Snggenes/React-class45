import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home({ category, setCategory }) {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [singleCatProducts, setSingleCatProducts] = useState([]);

  useEffect(() => {
    if (category === "allProducts") {
      const fetchFunc = async () => {
        const response = await fetch(
          "https://fakestoreapi.com/products/categories"
        );
        const data = await response.json();
        setCategories(data);
      };
      fetchFunc();
    } else {
      const fetchFunc = async () => {
        const response = await fetch(
          `https://fakestoreapi.com/products/category/${category}`
        );
        const data = await response.json();
        setSingleCatProducts(data);
      };
      fetchFunc();
    }
  }, [category]);

  useEffect(() => {
    const fetchFunc = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
    };
    fetchFunc();
  }, []);

  const categoriesMap = categories.map((item) => {
    return (
      <li
        className=" cursor-pointer"
        onClick={() => {
          setCategory(item);
        }}
        key={item}
      >
        {item}
      </li>
    );
  });

  const productsMap =
    category === "allProducts"
      ? products.map((item) => {
          const linkTo = `/product/${item.id}`;
          return (
            <div key={item}>
              <Link to={linkTo}>
                <img src={item.image} alt="" />
                <p>{item.title}</p>
              </Link>
            </div>
          );
        })
      : singleCatProducts.map((item) => {
        const linkTo = `/product/${item.id}`;
        return (
          <div key={item}>
            <Link to={linkTo}>
              <img src={item.image} alt="" />
              <p>{item.title}</p>
            </Link>
          </div>
        );
      })

  return (
    <>
      <h1 className=" cursor-pointer text-4xl mb-4" onClick={()=>{setCategory('allProducts')}}>Products</h1>
      <ul className=" flex gap-4 text-xl">{categoriesMap}</ul>
      <div className=" grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 ">
        {productsMap}
      </div>
    </>
  );
}
