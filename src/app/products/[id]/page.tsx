"use client";
import type { Product } from "@/app/interfaces/products.interface";

import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useState, useEffect, Fragment } from "react";

export default function Product() {
  const [product, setProduct] = useState<Product | null>(null);
  const { id } = useParams();
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err: any) => setError(true));
  }, [id]);

  if (error) {
    return <h1>Error loading product</h1>;
  }

  if (!product) {
    return <h1>Loading...</h1>;
  }

  return (
    <Fragment>
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
      </li>
      <Link href={`/products`} className="flex justify-center">
        <button className="border px-3 py-1 font-bold bg-blue-400 text-white my-2 cursor-pointer">
          Back To Products
        </button>
      </Link>
    </Fragment>
  );
}
