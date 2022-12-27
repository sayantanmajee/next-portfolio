import React, { useRef, useState } from 'react'
import { DevicePhoneMobileIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/solid'
import { useForm } from 'react-hook-form';
import { PageInfo } from '../typings';
import emailjs from '@emailjs/browser';

type Props = {
  pageInfo: PageInfo
}

const ContactMe = ({ pageInfo }: Props) => {

  const SERVICE_ID = process.env.NEXT_PUBLIC_CONTACT_ME_SERVICE_ID
  const TEMPLATE_ID = process.env.NEXT_PUBLIC_CONTACT_ME_TEMPLATE_ID
  const PUBLIC_KEY = process.env.NEXT_PUBLIC_CONTACT_ME_PUBLIC_KEY

  const { register, formState: { errors } } = useForm();
  const form = useRef()
  const [submitted, setSubmitted] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault();

    if (submitted === false) {

      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
        .then((result) => {
          console.log(result.text);
        }, (error) => {
          console.log(error.text);
        });
    }
    setSubmitted(true)
    e.target.reset();
  };

  return (
    <div className='flex flex-col items-center md:text-left px-10 justify-center space-y-10 md:space-x-10 h-screen snap-center'>
      <div className='flex flex-col items-center justify-start relative'>
      <h3 className='heading top-0'>
        Contact
      </h3>
      </div>

      <div className='space-y-6 pt-10'>

        <h4 className='text-2xl lg:text-3xl xl:text-4xl font-semibold text-center'>
          I have got what you need. {" "}<span className='decoration-[#F7AB0A]/50 underline'>Lets Talk.</span>
        </h4>

        <div className='space-y-4'>
          <div className='flex items-center space-x-3 justify-center'>
            <DevicePhoneMobileIcon className='text-[#F7AB0A]/50 h-7 w-7 animate-pulse' />
            <p>{pageInfo?.phoneNumber}</p>
          </div>

          <div className='flex items-center space-x-3 justify-center'>
            <EnvelopeIcon className='text-[#F7AB0A]/50 h-7 w-7 animate-pulse' />
            <p>{pageInfo?.email}</p>
          </div>

          <div className='flex items-center space-x-3 justify-center'>
            <MapPinIcon className='text-[#F7AB0A]/50 h-7 w-7 animate-pulse' />
            <p>{pageInfo?.address}</p>
          </div>
        </div>
      </div>

      <form ref={form} onSubmit={sendEmail} className='flex flex-col space-y-4'>
        <div className='flex flex-row space-x-2'>
          <input
            // {...register('name', { required: "Required" })}
            className='contact-input'
            type="text"
            name="user_name"
            required
            placeholder='Name' />
          <input
            {...register("email", {
              required: "Required",
              // pattern: {
              //   value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              //   message: "invalid email address"
              // }
            })}
            className='contact-input'
            name="user_email"
            type="email"
            required
            placeholder='Email' />

        </div>
        <input
          {...register('subject', { required: "Required" })}
          className='contact-input uppercase'
          type="text"
          name="user_subject"
          required
          placeholder='Subject' />
        <textarea 
        {...register("message")} 
        className='contact-input min-h-[7rem] max-h-[12rem]' name="message" id="" cols="30" rows="5" 
        required
        placeholder='Write your message here...'></textarea>
        <button type='submit' value='send' className={submitted ? 'contact-button-submitted' : 'contact-button'}>{submitted ? 'Submitted' : 'Send'}</button>
      </form>




    </div>
  )
}

/*


const ContactMe = ({ pageInfo }: Props) => {

  const { handleSubmit, register, formState: { errors } } = useForm();



  const onSubmit = (formData) => {
    console.log(formData.message)
    window.location.href = `mailto:sayantan.majee24@gmail.com?subject=${formData.subject + " " + formData.name}&body=${formData.message + "." + formData.email}`

  };

  return (
    <div className='flex flex-col items-center md:text-left px-10 justify-center space-y-10 md:space-x-10 h-screen snap-center relative'>
      <h3 className='heading'>
        Contact
      </h3>

      <div className='space-y-6'>

        <h4 className='text-2xl lg:text-3xl xl:text-4xl font-semibold text-center'>
          I have got what you need. {" "}<span className='decoration-[#F7AB0A]/50 underline'>Lets Talk.</span>
        </h4>

        <div className='space-y-4'>
          <div className='flex items-center space-x-3 justify-center'>
            <DevicePhoneMobileIcon className='text-[#F7AB0A]/50 h-7 w-7 animate-pulse' />
            <p>{pageInfo?.phoneNumber}</p>
          </div>

          <div className='flex items-center space-x-3 justify-center'>
            <EnvelopeIcon className='text-[#F7AB0A]/50 h-7 w-7 animate-pulse' />
            <p>{pageInfo?.email}</p>
          </div>

          <div className='flex items-center space-x-3 justify-center'>
            <MapPinIcon className='text-[#F7AB0A]/50 h-7 w-7 animate-pulse' />
            <p>{pageInfo?.address}</p>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-4'>
        <div className='flex flex-row space-x-2'>
          <input
            {...register('name', { required: "Required" })}
            className='contact-input'
            type="text"
            placeholder='Name' />
          <input
            {...register("email", {
              required: "Required",
              // pattern: {
              //   value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              //   message: "invalid email address"
              // }
            })}
            className='contact-input'
            type="email"
            placeholder={errors.email ? "" + errors.email.message : 'Email'} />

        </div>
        <input {...register('subject', { required: "Required" })} className='contact-input uppercase' type="text" placeholder='Subject' />
        <textarea {...register("message")} className='contact-input min-h-[7rem] max-h-[12rem]' name="" id="" cols="30" rows="5" placeholder='Write your message here...'></textarea>
        <button type='submit' className='contact-button'>Send</button>
      </form>




    </div>
  )
}
*/
export default ContactMe