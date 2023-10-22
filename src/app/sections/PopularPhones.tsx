"use client";
import { phoneProducts } from "../constants";
import { ProductCard } from "../components";
import { Product } from "../constants/types";
import { colLayout, rowLayout } from "@/assets";
import Image from 'next/image'
import { useState } from "react";

const PopularPhones = () => {

  const [layout, setLayout] = useState("flex-row");
  const [moveH, setMoveH] = useState(false);

  

  return (
    <section id='popular-phones'
      className='max-container padding-x'>

      <div className="flex flex-row justify-between">
        <h2 className='text-2xl text-color3 leading-none'>Our Phones</h2>
        <div className="relative flex flex-row gap-5 max-sm:hidden">
          <div className={`absolute -top-2 -left-2 h-[46px] w-[46px] bg-color4 rounded-md transition-transform ${moveH ? 'transform translate-x-[50px]' : ''}`}></div>
          <a className="relative h-[30px] w-[30px] cursor-pointer"
            onClick={() => {
              setLayout("flex-row")
              setMoveH(false)
            }}>
            <Image src={rowLayout} alt="rowAlign" />
          </a>
          <a className="relative h-[30px] w-[30px] cursor-pointer"
            onClick={() => {
              setLayout("flex-col")
              setMoveH(true)
            }}>
            <Image src={colLayout} alt="rowAlign" />
          </a>
        </div>
      </div>

      <div className={`flex ${layout} gap-5 my-10 
                      overflow-x-auto scrollbar-hide scroll-smooth
                      max-sm:flex-col max-sm:items-center`}>
        {phoneProducts.map((product: Product, index) => (
          <ProductCard key={index} product={product} layout={layout}/>
        ))}
      </div>
    </section>
  );
};

export default PopularPhones;
