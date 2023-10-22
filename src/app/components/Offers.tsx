"use client";
import OfferCard from "./OfferCard";
import { offersProducts } from "../constants";
import { Product } from "../constants/types";
import { useState, useEffect } from 'react';

export const getOffers = (): Product[] => {
  // const selectedProducts = allProducts.filter(product => product.Offer > 0);
  return offersProducts;
};


const Offers = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [offers, setOffers] = useState<Product[] | null>(null);

  useEffect(() => {
    const productData = getOffers();
    // console.log(productData)
    setOffers(productData)
    setIsLoading(false)
  }, [])

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 w-full mt-14 rounded-3xl custom-gradient-bg-offers 
                      md:grid-cols-2">
        <div className="px-5 bg-slate-500/20 rounded-3xl">
          <div className="relative w-1/3 aspect-square bg-gray-200/30 rounded-3xl">

          </div>
        </div>
        <div className="px-5 bg-slate-500/20 rounded-3xl">
          <div className="relative w-1/3 aspect-square bg-gray-200/30 rounded-3xl">
            
          </div>
        </div>
      </div>
    )
  }

  if (!offers || offers.length === 0) {
    return <div>No offers found.</div>;
  }

  return (
    <div className='w-full mt-14 grid grid-cols-1 rounded-3xl custom-gradient-bg-offers 
                    md:grid-cols-2'>
      {offers.map((product, index) => (
        <OfferCard key={index} product={product} />
      ))}
    </div>
  );
};

export default Offers;
