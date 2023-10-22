"use client";
import { specialProductsIds, specialProductsSections } from "../constants";
import { SpecialProductsScroll } from "../components";
import { useState } from "react";



const SpecialProducts = () => {

  const [currentProducts, setCurrentProducts] = useState<string[]>(specialProductsIds[0]);
  const [subSection, setSubSection] = useState(0);

  return (
    <section id='special-products'
      className='max-container padding-x'>

      <div className="flex flex-col gap-8">
        <h2 className='text-2xl text-color3 leading-none'>Special Products</h2>
        <div className="felx flex-row">
          {specialProductsSections.map((sectionName: string, index) => (
            <span key={index}
                  onClick={() => {
                    setCurrentProducts(specialProductsIds[index ])
                    setSubSection(index)
                  }}
                  className={`${subSection === index?"text-color3":"text-color4"} mr-4 leading-none cursor-pointer`}> {sectionName}</span>
          ))}
        </div>

      </div>

      <SpecialProductsScroll ids={currentProducts}/>

    </section>
  );
};

export default SpecialProducts;
