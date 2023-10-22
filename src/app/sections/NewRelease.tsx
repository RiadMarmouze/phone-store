"use client";
import { hero } from "@/assets";
import { Button, CountDown } from "../components";
import Image from 'next/image'

const NewRelease = () => {


  return (
    <section id='new-release'
      className='w-full max-container padding-x my-14 
                flex flex-col justify-center'>
      <div className="relative
                      custom-gradient-bg-offers rounded-3xl px-14 py-8 gap-14
                      flex flex-row justify-center items-center text-color3
                      max-md:flex-col">


        <div className='relative
                        w-[30%] rounded-3xl
                        flex flex-col justify-start items-start gap-5
                        max-md:flex-row max-md:w-full
                        max-sm:flex-col'>

          <div className="flex flex-col">
            <p className='text-3xl leading-none whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-color2 to-white'>
              New Release
            </p>
            <p className='text-sm font-montserrat leading-none text-color3'>
              Nulla ipsum est dolore ad duis.<br />
              Tempor nostrud ad duis incididunt adipisicing!
            </p>
          </div>


          {/* <CountDown /> */}

          <CountDown storageKey="countdown_start_time" /> {/* Set your initial time in "HH:MM:SS" format */}

        </div>
        <div className="flex flex-row w-[70%]
                        max-md:w-full">

          <div className='relative
                        w-[55%] rounded-3xl
                        flex flex-col justify-start items-start gap-6
                        text-color3'>

            <p className='text-xl'>
              iPhone 12 Pro Max
            </p>
            <p className='text-xs font-montserrat leading-none'>
              Aliquip adipisicing mollit consectetur reprehenderit pariatur labore ex duis irure anim in. Fugiat incididunt est dolor dolore pariatur Lorem sit esse commodo ullamco reprehenderit voluptate nulla. Consequat proident aute ea duis do fugiat dolor aliquip occaecat officia.
            </p>
            <p className="flex flex-row gap-2 font-bold mt-3">
              <span className="text-lg leading-none">
                {"10 1000"} DZD
              </span>
              <span className="text-xs text-color4 line-through">
                {"10 9000"} DZD
              </span>
            </p>
            <Button label='Shop now' fontSize="text-[12px]" />

          </div>

          <div className="relative w-[45%] aspect-[3/2] rounded-3xl flex items-center">
            <Image
              src={hero}
              alt=""
              className="object-contain"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>

        </div>

      </div>

    </section>
  );
};

export default NewRelease;
