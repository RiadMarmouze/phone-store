"use client";
import { Product } from "../constants/types";
import { allProducts } from "../constants";
import SpecialProductCard from "./SpecialProductCard"
import { useState, useEffect } from 'react';

export const getProductById = (ids: string[]): Product[] => {
  const selectedProducts = allProducts.filter(product => ids.includes(product.Id));
  // console.log(selectedProducts)
  return selectedProducts;
};


const SpecialProductsScroll = ({ ids }: { ids: string[] }) => {

  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState<Product[] | null>(null);

  useEffect(() => {
    const productData = getProductById(ids);
    setProducts(productData)
    setIsLoading(false)
  }, [ids])

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     try {
  //       const productData = getProductById(ids);
  //       setProducts(productData);
  //       setIsLoading(false);
  //     } catch (error) {
  //       console.error("Error fetching products:", error);
  //     }
  //   };

  //   fetchProducts();
  // }, [ids]);


  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!products || products.length === 0) {
    return <div>No products found.</div>;
  }

  return (

    <div className="flex flex-row gap-5 my-5 
                    overflow-x-s overflow-y-hidden scrollbar-hide scroll-smooth
                    max-sm:flex-col max-sm:items-center">
      {products.map((product: Product, index) => (
        <SpecialProductCard key={index} product={product} index={index}/>
      ))}
    </div>

  );
};

export default SpecialProductsScroll;
