import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { Media } from './Media';

export const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ['Programador Full Stack.', 'Desarrollador Web.', 'Diseñador Web.'],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className='w-full lgl:w-1/2 flex flex-col gap-20'>
      <div className='flex flex-col gap-5'>
        <h4 className=' text-lg font-normal'>BIENVENIDO A MI MUNDO</h4>
        <h1 className='text-5xl font-bold text-white'>
          Mi nombre es{' '}
          <span className='text-designColor capitalize'>Fermin</span>
        </h1>
        <h2 className='text-4xl font-bold text-white'>
          soy <span>{text}</span>
          <Cursor
            cursorBlinking='false'
            cursorStyle='|'
            cursorColor='#ff014f'
          />
        </h2>
        <p className='text-base font-bodyFont leading-6 tracking-wide'>
          Soy un programador freelance full stack, poseo una sólida formación en
          desarrollo web y una amplia experiencia trabajando de forma
          independiente en diversos proyectos.
        </p>
      </div>
      {/* Media */}
      <Media />
    </div>
  );
};
