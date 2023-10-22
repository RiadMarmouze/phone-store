"use client";
import { Button } from "../components";
import Image from 'next/image'
import { Product } from "../constants/types";

const OfferCard = ({ product }: { product: Product }) => {

  return (
    <div className="flex flex-row items-center">
      <div className="flex flex-row w-full px-5 text-color3 
                      max-sm:flex-col max-sm:items-center">

        <div className="relative w-1/3 aspect-square flex items-center max-sm:w-[70%]">
          <Image
            src={"/products/" + product.Id + "/main.png"}
            alt={product.Category}
            className="object-contain"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            fill
          />
        </div>

        <div className="flex flex-col gap-6 w-2/3 py-10 pl-5
                        lg:hidden
                        max-sm:items-center max-sm:justify-center max-sm:w-full max-sm:pl-0 max-sm:text-center">
          <div className="flex flex-col gap-2">
            <p className="text-xl text-white leading-none 
                          max-sm:text-md">{`${product.Brand} ${product.Model}`}</p>
            <p className="flex flex-row gap-2 max-sm:justify-center">
              <span className="text-lg font-bold leading-none 
                                max-sm:text-md">
                {product.PurchasePrice * (100 - product.Offer) / 100} DZD
              </span> 
              <span className="text-sm font-bold text-color4 line-through 
                               max-sm:text-xs">
                {product.PurchasePrice} DZD
              </span>
            </p>
          </div>
          <span><Button label='Buy' fontSize="text-[12px]" /></span>
          {/* <p className="h-[100px] overflow-hidden text-sm text-color3 pr-5">{offer.Description}</p> */}
        </div>



        <div className="hidden flex-col w-2/3 py-10 gap-5
                        lg:flex">
          <div className="pl-5 flex flex-row gap-5">
            <p className="w-[55%] text-xl text-white">{`${product.Brand} ${product.Model}`}</p>
            <p className="flex flex-col w-[45%] text-center">
              <span className="text-lg font-bold lg:text-xl">
                {product.PurchasePrice * (100 - product.Offer) / 100} DZD
              </span>
              <span className="text-md font-bold text-color4 line-through">
                {product.PurchasePrice} DZD
              </span>
            </p>
          </div>
          <div className="pl-5 flex flex-row gap-5">
            <p className="h-[100px] w-[65%] overflow-hidden text-sm text-color3">{product.Description}</p>
            <span className="w-[35%] flex justify-center items-start"><Button label='Buy' fontSize="text-[12px]" /></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferCard;
