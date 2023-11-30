import { Title } from "../layouts/Title";
import {
  HCDBragado,
  LSARG,
  MuniBragado,
  Nurban,
  JMPBA,
  BragadoEsNoticia,
  Xperiment,
  SEF,
  Lucas,
} from "../../assets/index";
import { ProjectsCard } from "./ProjectsCard";

export const Projects = () => {
  return (
    <section
      id="proyectos"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="Proyectos" des="Algunos de mis proyectos más recientes" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Municipalidad de Bragado"
          des="Desarrollo del sitio web de la Municipalidad de Bragado."
          src={MuniBragado}
          link="https://www.bragado.gov.ar/"
        />
        <ProjectsCard
          title="HCD Bragado"
          des="Desarrollo del sitio web del HCD de Bragado."
          src={HCDBragado}
          link="https://hcdbragado.gob.ar/"
        />
        <ProjectsCard
          title="LS ARG"
          des="Desarrollo del sitio web de LS Electromecánica."
          src={LSARG}
          link="https://ls-arg.com/"
        />
        <ProjectsCard
          title="Xperiment VC"
          des="Desarrollo del sitio web de Xperiment Startup Studio & VC."
          src={Xperiment}
          link="https://www.xperiment.co/"
        />
        <ProjectsCard
          title="NURBAN"
          des="Desarrollo del sitio web de Nurban Desarrollos Inmobiliarios."
          src={Nurban}
          link="https://nurban.com.ar/"
        />
        <ProjectsCard
          title="Justicia Municipal PBA"
          des="Desarrollo del sitio web de la Asociación de la
          Justicia Municipal Bonaerense."
          src={JMPBA}
          link="https://justiciamunicipalpba.org/"
        />
        <ProjectsCard
          title="Bragado Es Noticia"
          des="Desarrollo del sitio web de Bragado Es Noticia."
          src={BragadoEsNoticia}
          link="https://bragadoesnoticia.com.ar/"
        />
        <ProjectsCard
          title="SEF"
          des="Desarrollo del sistema de administración del Sindicato de Empleados de Farmacias."
          src={SEF}
          link="#"
        />
        <ProjectsCard
          title="Lucas & Lucas"
          des="Desarrollo de Tienda Online de Lucas & Lucas - Muebles y Artículos para el Hogar."
          src={Lucas}
          link="https://lucasylucas.com.ar/"
        />
      </div>
    </section>
  );
};
