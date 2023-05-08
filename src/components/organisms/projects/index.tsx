import CustomLink from "@/components/atomics/customlink";
import { ProjeCard } from "@/util/projet";
import Image from "next/image";

function Projects() {
  return (
    <div id="projects" className="flex   gap-8 mt-20">
      {ProjeCard.map((item) => (
        <div className="rounded overflow-hidden shadow-lg" key={item.id}>
          <Image
            className="w-full"
            src={item.url}
            alt={item.title}
            width={600}
            height={400}
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{item.title}</div>
            <p className="text-gray-700 text-base">{item.description}</p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <CustomLink href="loja">Ver Projeto</CustomLink>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Projects;
