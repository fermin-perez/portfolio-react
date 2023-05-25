import {
  FaLinkedinIn,
  FaHtml5,
  FaReact,
  FaCss3,
  FaPhp,
  FaGit,
  FaLaravel,
  FaWordpress,
  FaBootstrap,
  FaNodeJs,
  FaGithub,
  FaWhatsapp,
} from 'react-icons/fa';
import { SiJavascript } from 'react-icons/si';

export const Media = () => {
  return (
    <div className='flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between'>
      <div>
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
      <div>
        <h2 className='text-base uppercase font-titleFont mb-4'>SKILLS</h2>
        <div className='flex gap-4'>
          <span className='bannerIcon'>
            <FaHtml5 />
          </span>
          <span className='bannerIcon'>
            <FaCss3 />
          </span>
          <span className='bannerIcon'>
            <SiJavascript />
          </span>
          <span className='bannerIcon'>
            <FaReact />
          </span>
          <span className='bannerIcon'>
            <FaPhp alt='php' />
          </span>
        </div>
        <div className='flex gap-4 mt-4'>
          <span className='bannerIcon'>
            <FaGit />
          </span>
          <span className='bannerIcon'>
            <FaLaravel />
          </span>
          <span className='bannerIcon'>
            <FaWordpress />
          </span>
          <span className='bannerIcon'>
            <FaBootstrap />
          </span>
          <span className='bannerIcon'>
            <FaNodeJs />
          </span>
        </div>
      </div>
    </div>
  );
};
