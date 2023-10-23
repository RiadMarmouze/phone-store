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
                      max-md:flex-col max-md:px-10
                      max-sm:px-5">


        <div className='relative
                        w-[30%]
                        flex flex-col justify-start items-start gap-5
                        max-md:flex-row max-md:w-full max-md:gap-10
                        max-sm:flex-col max-sm:items-center'>

          <div className="flex flex-col gap-5
                          max-md:w-[55%]
                          max-sm:w-full">
            <p className='text-3xl leading-none whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-color2 to-white'>
              New Release
            </p>
            <p className='text-sm font-montserrat leading-none text-color3'>
              Nulla ipsum est dolore ad duis.<br />
              Tempor nostrud ad duis incididunt adipisicing!
            </p>
          </div>


          {/* <CountDown /> */}
          <span className="max-md:w-[45%]
                          max-sm:w-fit">
            <CountDown storageKey="countdown_start_time" /> {/* Set your initial time in "HH:MM:SS" format */}
          </span>



        </div>
        <div className="flex flex-row w-[70%] gap-5
                        max-md:w-full max-md:gap-10
                        max-sm:flex-col">

          <div className='relative
                          w-[55%]
                          flex flex-col justify-start items-start gap-6
                          text-color3
                          max-sm:w-full'>

            <div className="flex flex-col gap-3
                            max-sm:gap-0">
              <div className="flex flex-col gap-3">
                <p className='text-xl'>
                  iPhone 12 Pro Max
                </p>
                <div className="hidden relative w-[70%] mx-auto
                              max-sm:flex">
                  <Image
                    src={hero}
                    alt=""
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </div>
              <p className='text-xs leading-none'>
                Aliquip adipisicing mollit consectetur reprehenderit pariatur labore ex duis irure anim in. Fugiat incididunt est dolor dolore pariatur Lorem sit esse commodo ullamco reprehenderit voluptate nulla. Consequat proident aute ea duis do fugiat dolor aliquip occaecat officia.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <p className="flex flex-row gap-2 font-bold
                            max-sm:flex-col max-sm:gap-1">
                <span className="text-lg leading-none">
                  {"10 1000"} DZD
                </span>
                <span className="text-xs text-color4 line-through">
                  {"10 9000"} DZD
                </span>
              </p>
              <Button label='Shop now' fontSize="text-[12px]" />
            </div>
          </div>

          <div className="flex relative w-[45%] aspect-[3/2] 
                          max-sm:hidden">
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
