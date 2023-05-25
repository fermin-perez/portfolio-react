import { FaLinkedinIn, FaGithub, FaWhatsapp } from 'react-icons/fa';
import { logo } from '../../assets/index';
import { Link } from 'react-scroll';

export const Footer = () => {
  return (
    <div className='w-full py-20 h-auto border-b-[1px] border-b-black grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-4 gap-8'>
      <div className='w-full h-full flex flex-col gap-8'>
        <img className='w-32' src={logo} alt='logo' />
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
      <div className='w-full h-full'>
        <h3 className='text-xl uppercase text-designColor tracking-wider'>
          Quick Link
        </h3>
        <ul className='flex flex-col gap-4 font-titleFont font-medium py-6 overflow-hidden'>
          <li>
            <Link
              to='inicio'
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <span className='w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer'>
                Inicio
                <span className='w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300'></span>
              </span>
            </Link>
          </li>
          <li>
            <Link
              to='servicios'
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <span className='w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer'>
                Servicios
                <span className='w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300'></span>
              </span>
            </Link>
          </li>
          <li>
            <Link
              to='proyectos'
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <span className='w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer'>
                Proyectos
                <span className='w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300'></span>
              </span>
            </Link>
          </li>
          <li>
            <Link
              to='resumen'
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <span className='w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer'>
                Resumen
                <span className='w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300'></span>
              </span>
            </Link>
          </li>
          <li>
            <Link
              to='contacto'
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <span className='w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer'>
                Contacto
                <span className='w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300'></span>
              </span>
            </Link>
          </li>
        </ul>
      </div>

      <div className='w-full h-full'>
        <h3 className='text-xl uppercase text-designColor tracking-wider'>
          DEVELOPERS
        </h3>
        <ul className='flex flex-col gap-4 font-titleFont font-medium overflow-hidden py-6'>
          <li>
            <a
              href='https://developer.mozilla.org/es/'
              target='_blank'
              rel='noreferrer'
              className='w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer'
            >
              MDN Web Docs
              <span className='w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300'></span>
            </a>
          </li>
          <li>
            <a
              href='https://www.w3schools.com/'
              target='_blank'
              rel='noreferrer'
              className='w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer'
            >
              W3Schools
              <span className='w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300'></span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
