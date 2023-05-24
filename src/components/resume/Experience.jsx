import { motion } from 'framer-motion';
import { ResumeCard } from './ResumeCard';

export const Experience = () => {
  const fechaActual = new Date();
  const añoActual = fechaActual.getFullYear();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className='py-12 font-titleFont flex gap-20'
    >
      <div>
        <div className='flex flex-col gap-4'>
          <p className='text-sm text-designColor tracking-[4px]'>
            2012 - {añoActual}
          </p>
          <h2 className='text-4xl font-bold'>Experiencias Laborales</h2>
        </div>
        <div className='mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10'>
          <ResumeCard
            title='Técnico de soporte de TI'
            subTitle='Secretaria de Derechos Humanos de la Pcia. de Bs. As. (2012 - 2019)'
            result=''
            des='Atención y resolución de incidencias, instalación y configuración de equipos y software, gestión de redes y conectividad, desarrollo de sistemas y aplicaciones para uso interno, mantenimiento preventivo, etc. '
          />
          <ResumeCard
            title='Técnico de soporte de TI'
            subTitle='Ministerio de las Mujeres de la Pcia. de Bs. As. (2019 - 2020)'
            result=''
            des='Atención y resolución de incidencias, instalación y configuración de equipos y software, gestión de redes y conectividad, desarrollo de sistemas y aplicaciones para uso interno, mantenimiento preventivo, etc. '
          />
          <ResumeCard
            title='Analista de sistema'
            subTitle='Municipalidad de Bragado (2021 - Actualidad)'
            result=''
            des='Desarrollo, configuración y administración de sistemas/aplicaciones para uso interno y responsable de la administración del sitio web del organismo. '
          />
          <ResumeCard
            title='Analista de sistema'
            subTitle='Xperiment Startup Studio & VC (2021 - Actualidad)'
            result=''
            des='Desarrollo, configuración y administración de sistemas/aplicaciones para uso interno y responsable de la administración del sitio web de la compañia. '
          />
        </div>
      </div>
    </motion.div>
  );
};
