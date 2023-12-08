"use client";
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import Links from '@/components/shared/Links';
import '@/styles/contact/contact.css';

const ContactForm = () => {
  const { register, formState: { errors }, handleSubmit, reset } = useForm();
  const [submitting, setSubmitting] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const [emailFailedToSend, setEmailFailedToSend] = useState(false);

  const form = {
    subject: "New Enquiry - angusgaukroger.com"
  };

  const onSubmit = async (data) => {
    setSubmitting(true);

    try {
      const formData = { ...form, ...data }; // Merge form data with additional data

      const response = await fetch('https://mail.brth.uk:1234/api/v1/form/047b7e86-7d2b-4572-86d6-0d021e9643d3', {
        method: "POST",
        origin: "https://angusgaukroger.com",
        headers: {
          "Content-Type": "application/json",
          // 'Access-Control-Allow-Origin': 'https://angusgaukroger.com',
          // 'Access-Control-Allow-Credentials', 'true'
        },
        redirect: "follow",
        body: JSON.stringify(formData),
      });


      if (response.ok) {
        console.log('Email sent successfully');
        setEmailSent(true);
        reset();
      } else {
        console.error('Failed to send email');
      }
    } catch (error) {
      console.error('Error sending email:', error);
    }

    setSubmitting(false);
  };

  return (
    <form className="flex flex-col gap-3 md:w-full" onSubmit={handleSubmit(onSubmit)}>
      <h2>Contact</h2>
      <input
        className="bg-none w-full h-20 border-2 border-anti-flash_white text-anti-flash_white placeholder-anti-flash_white py-2 px-3"
        type="text"
        {...register('name', { required: true })}
        placeholder="Name *"
      />
      <input
        className="bg-none w-full h-20 border-2 border-anti-flash_white text-anti-flash_white placeholder-anti-flash_white py-2 px-3"
        type="email"
        {...register('email', { required: true })}
        placeholder="Email *"
      />
      <textarea
        className="bg-none w-full h-40 border-2 border-anti-flash_white text-anti-flash_white placeholder-anti-flash_white py-2 px-3"
        type="text"
        {...register('content', { required: true })}
        placeholder="Message *"
      />
      <div className="w-full flex flex-row justify-start items-center gap-10 ">
      <button
        type="submit"
        className={`flex flex-row justify-center items-center px-2 py-4 gap-3 w-40 h-14 border-2 xl:w-64 xl:h-16 xl:py-10 bg-lime border-lime text-rich_black hover:bg-rich_black hover:border-lime hover:text-anti-flash_white  fill-rich_black stroke-rich_black hover:stroke-anti-flash_white hover:fill-anti-flash_white ${submitting ? 'cursor-not-allowed opacity-50' : ''}`}
        disabled={submitting}
      >
        <h4>{submitting ? 'Submitting...' : 'Submit'}</h4>
        <svg width="19" height="19" viewBox="0 0 19 19" xmlns="http://www.w3.org/2000/svg">
          <path d="M18.9706 1.02944C18.9706 0.477153 18.5228 0.0294376 17.9706 0.0294376H8.97056C8.41828 0.0294376 7.97056 0.477153 7.97056 1.02944C7.97056 1.58172 8.41828 2.02944 8.97056 2.02944H16.9706V10.0294C16.9706 10.5817 17.4183 11.0294 17.9706 11.0294C18.5228 11.0294 18.9706 10.5817 18.9706 10.0294V1.02944ZM1.70711 18.7071L18.6777 1.73654L17.2635 0.322331L0.292893 17.2929L1.70711 18.7071Z" />
        </svg>
      </button>
      <Links />
    </div>
    {errors.name && <h4 className="text-anti-flash_white">Name is required</h4>}
    {errors.email && <h4 className="text-anti-flash_white">Email is required</h4>}
    {errors.content && <h4 className="text-anti-flash_white">Message is required</h4>}
    {emailSent && !emailFailedToSend ? <h4 className="text-anti-flash_white">Email Sent Successfully</h4> : ""}
    {!emailSent && emailFailedToSend ? <h4 className="text-anti-flash_white">Email Failed to send</h4> : ""}
  </form>
);
};

export default ContactForm;
