import { Button } from "../components";
import { contactus } from "@/assets";
import Image from "next/image";

const ContactUs = () => {
  return (
    <section
      id='contact-us'
      className='max-container padding-x my-14'
    >
      <div className="flex flex-row justify-between items-center rounded-3xl custom-gradient-bg-contactus px-14 gap-14
                      max-md:flex-col-reverse max-md:gap-6 max-md:px-5">
        <div className="relative w-[45%] aspect-video overflow-clip
                        max-md:w-[50%] max-md:aspect-[5/2]
                        max-sm:w-[80%]">
          <Image
            src={contactus}
            alt=""
            className="object-contain absolute w-full"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="w-full">
          <div className='flex flex-row items-center border border-slate-gray rounded-full'>

            <input type='text'
              placeholder='subscribe@store.com'
              className='input h-[42px] px-6 flex-1 
                        max-sm:w-full max-sm:text-xs' />

            <div className='flex justify-center w-[120px] bg-color2 rounded-r-full
                          max-sm:hidden'>
              <Button label='Sign Up' borderColor="border-transparent" textColor="text-color1" />
            </div>
          </div>
          <div className='hidden w-fit mx-auto mt-5 bg-color2 rounded-full 
                        max-sm:flex'>
            <Button label='Sign Up' borderColor="border-transparent" textColor="text-color1" fontSize="text-xs" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
