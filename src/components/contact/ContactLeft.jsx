import { FaLinkedinIn, FaGithub, FaWhatsapp } from 'react-icons/fa';
import { contactImg } from '../../assets/index';

export const ContactLeft = () => {
  return (
    <div className='w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center'>
      <img
        className='w-full h-64 object-cover rounded-lg mb-2'
        src={contactImg}
        alt='contactImg'
      />
      <div className='flex flex-col gap-4'>
        <h3 className='text-3xl font-bold text-white'>Fermin Perez</h3>
        <p className='text-lg font-normal text-gray-400'>
          Programador Full Stack
        </p>
        <p className='text-base text-gray-400 tracking-wide'>
          Soy un programador full stack, poseo una sólida formación en
          desarrollo web y una amplia experiencia trabajando de forma
          independiente en diversos proyectos.
        </p>
        <p className='text-base text-gray-400 flex items-center gap-2'>
          Teléfono: <span className='text-lightText'>2342-405816</span>
        </p>
        <p className='text-base text-gray-400 flex items-center gap-2'>
          Email:{' '}
          <span className='text-lightText'>fermin.perez@xperiment.co</span>
        </p>
      </div>
      <div className='flex flex-col gap-4'>
        <h2 className='text-base uppercase font-titleFont mb-4'>
          Encuéntrame en
        </h2>
        <div className='flex gap-4'>
          <a
            href='https://wa.link/j2fwyp'
            target='_blank'
            rel='noreferrer'
            className='bannerIcon'
          >
            <FaWhatsapp />
          </a>
          <a
            href='https://www.linkedin.com/in/fermin-perez/'
            target='_blank'
            rel='noreferrer'
            className='bannerIcon'
          >
            <FaLinkedinIn />
          </a>
          <a
            href='https://github.com/fermin-perez'
            target='_blank'
            rel='noreferrer'
            className='bannerIcon'
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </div>
  );
};
