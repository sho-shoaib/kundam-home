import React from "react";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
          console.log("message error");
        }
      );
  };

  return (
    <div id='contact' className='mx-auto max-w-6xl pt-28 mb-44 px-1'>
      <div className='w-full'>
        <h1 className='sm:text-7xl text-5xl font-semibold leading-snug text-shadow mb-10 text-center title'>
          CONTACT US
          <div
            className='w-44 h-2 m-auto mt-4'
            style={{ backgroundColor: "rgba(254,1,0,0.8)" }}
          ></div>
        </h1>

        <form
          ref={form}
          onSubmit={sendEmail}
          className='flex flex-col gap-6 max-w-sm mx-auto bg-yellow-50 border-yellow-400 p-4 border-2'
        >
          <div className='flex flex-col'>
            <label className='text-red-500 text-lg'>Name</label>
            <input
              className='border-2 outline-none rounded p-2 border-yellow-400 hover:border-yellow-500 transition'
              type='text'
              name='from_name'
            />
          </div>
          <div className='flex flex-col'>
            <label className='text-red-500 text-lg'>Email</label>
            <input
              className='border-2 outline-none rounded p-2 border-yellow-400 hover:border-yellow-500 transition'
              type='email'
              name='user_email'
            />
          </div>
          <div className='flex flex-col'>
            <label className='text-red-500 text-lg'>Message</label>
            <textarea
              className='border-2 outline-none rounded p-2 border-yellow-400 hover:border-yellow-500 transition'
              name='message'
            />
          </div>
          <button
            type='submit'
            className='border-2 bg-white text-lg border-yellow-400 self-center px-6 py-2 rounded-md text-red-500'
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
