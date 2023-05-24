import { motion } from 'framer-motion';
import { ResumeCard } from './ResumeCard';

export const Education = () => {
  const fechaActual = new Date();
  const añoActual = fechaActual.getFullYear();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className='w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20'
    >
      {/* part one */}
      <div>
        <div className='py-6 lgl:py-12 font-titleFont flex flex-col gap-4'>
          <p className='text-sm text-designColor tracking-[4px]'>
            2015 - {añoActual}
          </p>
          <h2 className='text-3xl md:text-4xl font-bold'>
            Estudios Realizados
          </h2>
        </div>
        <div className='mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10'>
          <ResumeCard
            title='Analista Programador Universitario'
            subTitle='Facultad de Informática UNLP (Enero 2015 - Diciembre 2021)'
            result='7'
            des='La carrera Analista Programador Universitario tiene como objetivo la formación de un graduado con conocimientos básicos de los fundamentos de la disciplina y de las tecnologías actuales, a fin de resultar capacitado para el trabajo profesional en sistemas de pequeña y mediana complejidad.'
          />
          <ResumeCard
            title='Wordpress'
            subTitle='Coderhouse (Marzo 2021 - Abril 2021)'
            result='10'
            des='En este curso aprenderás a instalar y configurar WordPress utilizando un servidor apache local, que te permitirá tener dominio sobre el sitio web, además de usar los mejores complementos y herramientas para diseñar tu sitio completamente funcional y seguro. Crearás tu propia Tienda Online con pasarelas de pago. Al terminar el curso serás capaz de crear y configurar sitios web totalmente responsive, con e-commerce incluido.'
          />
          <ResumeCard
            title='JavaScript Moderno: Guía para dominar el lenguaje'
            subTitle='Udemy (Marzo 2022 - Marzo 2022)'
            result=''
            des='El objetivo principal del curso es enseñarte JavaScript actual, empezando de cero conocimiento en JavaScript hasta llevarte a un nivel avanzado y competitivo en el mercado laboral actual. Este curso te ayudará a entrar fácilmente a frameworks basados en este lenguaje de programación y ayudarte a mejorar tus habilidades actuales en JavaScript.'
          />
          <ResumeCard
            title='React Js'
            subTitle='Coderhouse (Julio 2022 - Agosto 2022)'
            result='8'
            des='En este curso, que es el tercer nivel de la carrera de programación, aprenderás a programar por componentes, mediante Javascript, JS, ES6, y también conocerás las ventajas de la utilización del flujos de datos.
            Asimismo, aplicarás el manejo de rutas utilizando Firebase, y comprenderás la utilización del virtual DOM mediante los desarrollos de React JS.
            Al finalizar, podrás crear tus propias aplicaciones SPA, y estarás en condiciones de hacer cualquier desarrollo con uno de los librerias más populares y avanzadas del momento.'
          />
        </div>
      </div>
    </motion.div>
  );
};
