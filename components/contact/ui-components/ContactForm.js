"use client"
import { useForm } from "react-hook-form";
import "@/styles/contact/contact.css"
import Links from "@/components/shared/Links";

const ContactForm = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data)
  return (
    <form className="flex flex-col gap-3 md:w-full" onSubmit={handleSubmit(onSubmit)}>
      <h2>Contact</h2>
      <input className="bg-none w-full h-20 border-2 border-anti-flash_white text-anti-flash_white placeholder-anti-flash_white py-2 px-3" {...register} placeholder="Name" />
      <input className="bg-none w-full h-20 border-2 border-anti-flash_white text-anti-flash_white placeholder-anti-flash_white py-2 px-3" {...register} placeholder="Email" />
      <textarea className="bg-none w-full h-40 border-2 border-anti-flash_white text-anti-flash_white placeholder-anti-flash_white py-2 px-3" {...register} placeholder="Message" />
      <div className="w-full flex flex-row justify-start items-center gap-3 ">
        <button
            type="submit"
            className={"flex flex-row justify-center items-center px-2 py-4 gap-1 w-40 h-14 border-2 xl:w-64 xl:h-16 xl:py-10 bg-lime border-lime text-rich_black hover:bg-rich_black hover:border-lime hover:text-anti-flash_white  hover:stroke-anti-flash_white hover:anti-flash_white"}
        >
            <h4>Submit</h4>
            <svg
            width="19"
            height="19"
            viewBox="0 0 19 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="hover:fill-current hover:text-rich_black"
            >
            <path
                d="M18.9706 1.02944C18.9706 0.477153 18.5228 0.0294376 17.9706 0.0294376H8.97056C8.41828 0.0294376 7.97056 0.477153 7.97056 1.02944C7.97056 1.58172 8.41828 2.02944 8.97056 2.02944H16.9706V10.0294C16.9706 10.5817 17.4183 11.0294 17.9706 11.0294C18.5228 11.0294 18.9706 10.5817 18.9706 10.0294V1.02944ZM1.70711 18.7071L18.6777 1.73654L17.2635 0.322331L0.292893 17.2929L1.70711 18.7071Z"
                fill={"#0D1821"}
            />
            </svg>
        </button>
        <Links />
      </div>
      
    </form>
  );
};
export default ContactForm;
