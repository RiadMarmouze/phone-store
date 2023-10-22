import { Product } from "../constants/types";
import { shoppingCart } from "@/assets";
import Image from 'next/image'

const ProductCard = ({ product, layout }: { product: Product, layout: string }) => {

  return (
    <>
      {layout === "flex-row" ?
        <div className="flex flex-col gap-4
                        w-full p-10 rounded-2xl 
                        bg-color5
                        max-sm:flex-shrink-0
                        max-sm:p-5">

          <div className="relative w-[150px] h-[200px] rounded-xl aspect-square max-sm:w-full max-sm:h-fit">
            <Image src={"/products/" + product.Id + "/main.png"}
              alt={product.Category}
              className='object-contain'
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              fill />
          </div>
          <div className="flex flex-col gap-1">
            <p className='text-md text-color3 max-sm:text-3xl max-sm:leading-none'>
              {`${product.Model} ${product.Storage}GB`}
            </p>
            <p className="text-xs text-color4">
              Some description
            </p>
          </div>

          <div className="flex flex-row justify-between mt-auto">
            <p className="text-lg text-color3 font-bold">
              {product.SellPrice} DZD <span className="text-sm text-color4 line-through">{product.SellPrice} DZD</span>
            </p>
            <a className="relative h-[23px] w-[23px]"
              href='/'>
              <Image src={shoppingCart} alt="truckFast" />
            </a>
          </div>
        </div>
        : <div className="flex flex-row gap-4 
                          w-full p-10 rounded-2xl 
                          bg-color5
                          max-sm:flex-col
                          max-sm:flex-shrink-0
                          max-sm:p-5">

          <div className="relative w-[150px] h-[200px] rounded-xl max-sm:w-full max-sm:h-fit aspect-square">
            <Image src={"/products/" + product.Id + "/main.png"}
              alt={product.Category}
              className='object-contain'
              fill />
          </div>
          <div className="flex flex-col w-[calc(100%-150px)] max-sm:w-full gap-6">
            <div className="flex flex-col gap-2">
              <p className='text-3xl text-color3 leading-none'>
                {`${product.Model} ${product.Storage}GB`}
              </p>
              <p className="text-xs text-color4 leading-none">
                Some description
              </p>
            </div>

            <div className="flex flex-row justify-between mt-auto">
              <p className="text-lg text-color3 font-bold">
                {product.SellPrice} DZD <span className="text-sm text-color4 line-through">{product.SellPrice} DZD</span>
              </p>
              <a className="relative h-[23px] w-[23px]"
                href='/'>
                <Image src={shoppingCart} alt="truckFast" />
              </a>
            </div>
          </div>
        </div>}
    </>

  );
};

export default ProductCard;
