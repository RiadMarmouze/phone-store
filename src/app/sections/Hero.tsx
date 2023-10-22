"use client";
import { hero } from "@/assets";
import { Button,Offers } from "../components";
import Image from 'next/image'

const Hero = () => {


  return (
    <section id='hero'
      className='w-full max-container padding-x my-14
                flex flex-col justify-center'>
      <div className="relative
                      flex flex-col justify-center items-center
                      xl:flex-row xl:gap-20">

        <div className="absolute top-[5%] w-[80%] h-[90%] rounded-full blur-xl opacity-25 custom-gradient-bg-hero"></div>

        <div className='relative
                        w-full
                        flex flex-col justify-start items-start gap-3
                        xl:w-2/5'>

          <h1 className='text-[62px] font-palanquin leading-none text-white
                        xl:whitespace-nowrap
                        max-sm:text-[72px] max-sm:leading-[82px]'>
            iPhone 12 Pro Max
          </h1>
          <p className='text-lg font-montserrat leading-none text-color3 mb-5
                      sm:max-w-sm'>
            Love the power.
            Love the price.
          </p>

          <Button label='Shop now' />

        </div>

        <div className="relative w-2/5
                      max-xl:w-full max-xl:px-[20%] max-xl:pt-14
                      max-sm:px-0">
          <Image
            src={hero}
            alt="iPhone 12 pro max"
            className="object-contain"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>


      <Offers/>

    </section>
  );
};

export default Hero;
