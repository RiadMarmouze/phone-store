import { Product } from "../constants/types";
import { Button } from "../components";
import Image from 'next/image'

const SpecialProductCard = ({ product, index }: { product: Product ,index:number}) => {

  return (

    <div className={`flex flex-row gap-4 flex-shrink-0  p-5 rounded-3xl ${index%2 === 0?"custom-gradient-bg-special-product1":"custom-gradient-bg-special-product2"} 
                    max-sm:flex-col-reverse max-sm:w-full max-sm:items-center`}>

      <div className="w-[200px] flex flex-col justify-center items-center gap-3">
        <p className='text-2xl text-center font-bold text-transparent bg-clip-text  bg-gradient-to-br from-color2 to-white'>
          {`${product.Model} `}{product.Storage!==-1?`${product.Storage}GB`:""}
        </p>
        <p className="text-lg text-color3 font-bold">
          {product.SellPrice}DZD
        </p>
        <span className="w-[35%] flex justify-center items-start"><Button label='Buy' fontSize="text-[12px]" /></span>
      </div >

      <div className="relative w-[200px] rounded-xl aspect-square
                      max-sm:w-full">
        <Image src={"/products/" + product?.Id + "/main.png"}
          alt={""}
          className='object-contain'
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          fill />
      </div>

    </div >

  );
};

export default SpecialProductCard;
