import { motion } from "framer-motion";
import { ResumeCard } from "./ResumeCard";

export const Education = () => {
  const fechaActual = new Date();
  const añoActual = fechaActual.getFullYear();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">
            2015 - {añoActual}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Estudios Realizados
          </h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Analista Programador Universitario"
            subTitle="Facultad de Informática UNLP (Enero 2015 - Diciembre 2021)"
            result="7"
            des="La carrera Analista Programador Universitario tiene como objetivo la formación de un graduado con conocimientos básicos de los fundamentos de la disciplina y de las tecnologías actuales, a fin de resultar capacitado para el trabajo profesional en sistemas de pequeña y mediana complejidad."
          />
          <ResumeCard
            title="Wordpress"
            subTitle="Coderhouse (Marzo 2021 - Abril 2021)"
            result="10"
            des="Crearás tu propia Tienda Online con pasarelas de pago. Al terminar el curso serás capaz de crear y configurar sitios web totalmente responsive, con e-commerce incluido."
          />
          <ResumeCard
            title="JavaScript Moderno: Guía para dominar el lenguaje"
            subTitle="Udemy (Marzo 2022 - Marzo 2022)"
            result=""
            des="El objetivo principal del curso es enseñarte JavaScript actual, empezando de cero conocimiento en JavaScript hasta llevarte a un nivel avanzado y competitivo en el mercado laboral actual."
          />
          <ResumeCard
            title="React Js"
            subTitle="Coderhouse (Julio 2022 - Agosto 2022)"
            result="8"
            des="En este curso aprenderás a programar por componentes, mediante Javascript, JS, ES6, y también conocerás las ventajas de la utilización del flujos de datos.
            Al finalizar, podrás crear tus propias aplicaciones SPA, y estarás en condiciones de hacer cualquier desarrollo con uno de los librerias más populares y avanzadas del momento."
          />
          <ResumeCard
            title="Node: De cero a experto"
            subTitle="Udemy (Septiembre 2023 - Septiembre 2023)"
            des="El objetivo de este curso, es enseñar Node con ejercicios reales y aplicables en la vida real, aprender haciendo aplicaciones, incrementando la complejidad de las mismas poco a poco, y sin darte cuenta estaremos trabajando con bases de datos, sockets, consumiendo servicios y mucho más."
          />
        </div>
      </div>
    </motion.div>
  );
};
