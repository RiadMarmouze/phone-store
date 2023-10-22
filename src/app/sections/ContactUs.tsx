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
                      max-md:flex-col">
        <div className="relative w-[30%] aspect-video overflow-clip
                        max-md:w-full">
          <Image
            src={contactus}
            alt=""
            className="object-contain absolute w-full"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        
        <div className='w-[70%] flex flex-row items-center gap-5 pl-2.5 border border-slate-gray rounded-full
                        max-md:w-full'>
          <input type='text' placeholder='subscribe@store.com' className='input w-[calc(100%-150px)]' />
          <div className='flex items-center bg-color2 rounded-r-full'>
            <Button label='Sign Up' borderColor="border-transparent" textColor="text-color1" fontSize="font-[7px]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
