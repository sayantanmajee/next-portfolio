import React from 'react'
import { DevicePhoneMobileIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/solid'
import { useForm } from 'react-hook-form';


type Props = {}

const ContactMe = (props: Props) => {

  const { handleSubmit, register, formState: { errors } } = useForm();

  const onSubmit = (formData) => {
    console.log(formData)
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
            <p>+91-9474063579</p>
          </div>

          <div className='flex items-center space-x-3 justify-center'>
            <EnvelopeIcon className='text-[#F7AB0A]/50 h-7 w-7 animate-pulse' />
            <p>sayantan.majee24@gmail.com</p>
          </div>

          <div className='flex items-center space-x-3 justify-center'>
            <MapPinIcon className='text-[#F7AB0A]/50 h-7 w-7 animate-pulse' />
            <p>West Bengal, India</p>
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
        <textarea {...register('message')} className='contact-input min-h-[7rem] max-h-[12rem]' name="" id="" cols="30" rows="5" placeholder='Write your message here...'></textarea>
        <button type='submit' className='contact-button'>Send</button>
      </form>




    </div>
  )
}

export default ContactMe