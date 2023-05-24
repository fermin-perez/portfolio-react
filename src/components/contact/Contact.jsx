import { useRef, useState } from 'react';
import { Title } from '../layouts/Title';
import { ContactLeft } from './ContactLeft';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const form = useRef();

  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  // ========== Email Validation start here ==============
  const emailValidation = () => {
    return String(email)
      .toLocaleLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };
  // ========== Email Validation end here ================

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      if (name === '') {
        setErrMsg('Apellido y Nombre son requeridos!');
      } else if (phoneNumber === '') {
        setErrMsg('Teléfono es requerido!');
      } else if (email === '') {
        setErrMsg('Email es requerido!');
      } else if (!emailValidation(email)) {
        setErrMsg('Ingrese un email valido!');
      } else if (subject === '') {
        setErrMsg('Asunto es requerido!');
      } else if (message === '') {
        setErrMsg('Mensaje es requerido!');
      } else {
        await emailjs.sendForm('', '', form.current, '');
        setErrMsg('');
        setName('');
        setPhoneNumber('');
        setEmail('');
        setSubject('');
        setMessage('');
        setSuccessMsg(`Gracias ${name}, ¡Tu mensaje se han enviado con éxito!`);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section
      id='contacto'
      className='w-full py-20 border-b-[1px] border-b-black'
    >
      <div className='flex justify-center items-center text-center'>
        <Title title='CONTACTO' des='Enviame tu consulta' />
      </div>
      <div className='w-full'>
        <div className='w-full h-auto flex flex-col lgl:flex-row justify-between'>
          <ContactLeft />
          <div className='w-full lgl:w-[60%] h-full py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] flex flex-col gap-8 p-4 lgl:p-8 rounded-lg shadow-shadowOne'>
            <form
              ref={form}
              onSubmit={sendEmail}
              className='w-full flex flex-col gap-4 lgl:gap-6 py-2 lgl:py-5'
            >
              {errMsg && (
                <p className='py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce'>
                  {errMsg}
                </p>
              )}
              {successMsg && (
                <p className='py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce'>
                  {successMsg}
                </p>
              )}
              <div className='w-full flex flex-col lgl:flex-row gap-10'>
                <div className='w-full lgl:w-1/2 flex flex-col gap-4'>
                  <p className='text-sm text-gray-400 uppercase tracking-wide'>
                    Apellido y Nombre
                  </p>
                  <input
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    className={`${
                      errMsg === 'Apellido y Nombre son requeridos!' &&
                      'outline-designColor'
                    } contactInput`}
                    type='text'
                    name='name'
                  />
                </div>
                <div className='w-full lgl:w-1/2 flex flex-col gap-4'>
                  <p className='text-sm text-gray-400 uppercase tracking-wide'>
                    Teléfono
                  </p>
                  <input
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    value={phoneNumber}
                    className={`${
                      errMsg === 'Teléfono es requerido!' &&
                      'outline-designColor'
                    } contactInput`}
                    type='text'
                    name='phone'
                  />
                </div>
              </div>
              <div className='flex flex-col gap-4'>
                <p className='text-sm text-gray-400 uppercase tracking-wide'>
                  Email
                </p>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  className={`${
                    errMsg === 'Email es requerido!' && 'outline-designColor'
                  } contactInput`}
                  type='email'
                  name='email'
                />
              </div>
              <div className='flex flex-col gap-4'>
                <p className='text-sm text-gray-400 uppercase tracking-wide'>
                  Asunto
                </p>
                <input
                  onChange={(e) => setSubject(e.target.value)}
                  value={subject}
                  className={`${
                    errMsg === 'Asunto es requerido!' && 'outline-designColor'
                  } contactInput`}
                  type='text'
                  name='subject'
                />
              </div>
              <div className='flex flex-col gap-4'>
                <p className='text-sm text-gray-400 uppercase tracking-wide'>
                  Consulta
                </p>
                <textarea
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                  className={`${
                    errMsg === 'Mensaje es requerido!' && 'outline-designColor'
                  } contactTextArea`}
                  cols='30'
                  rows='8'
                  name='message'
                ></textarea>
              </div>
              <div className='w-full'>
                <button
                  type='submit'
                  className='w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent'
                >
                  Enviar Consulta
                </button>
              </div>
              {errMsg && (
                <p className='py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce'>
                  {errMsg}
                </p>
              )}
              {successMsg && (
                <p className='py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce'>
                  {successMsg}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
