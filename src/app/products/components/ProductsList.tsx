"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const ProductsList = () => {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div>
      <h1 className="text-center my-10 font-bold text-2xl">Product List</h1>
      {products.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {products.map((product) => (
            <li key={product.id} className="border text-center py-2 my-4">
              <h3>
                <span className="font-bold">Name: </span>
                {product.title}
              </h3>
              <p>
                <span className="font-bold">Description: </span>
                {product.description}
              </p>
              <p>
                <span className="font-bold">Price: </span>${product.price}
              </p>
              <Link href={`/products/${product.id}`}>
                <button className="border px-3 py-1 font-bold bg-blue-400 text-white my-2 cursor-pointer ">
                  Show Product
                </button>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProductsList;
