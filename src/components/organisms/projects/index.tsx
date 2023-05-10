import CustomLink from "@/components/atomics/customlink";
import { ProjeCard } from "@/util/projet";
import Image from "next/image";

function Projects() {
  return (
    <div id="projects" className="flex   gap-8 mt-20">
      {ProjeCard.map((item) => (
        <div
          className="w-full md:w-1/3 rounded overflow-hidden shadow-lg"
          key={item.id}
        >
          <div className="relative h-64">
            <Image
              className="w-full object-cover  h-full"
              src={item.url}
              alt={item.title}
              width={600}
              height={400}
            />
          </div>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{item.title}</div>
            <p
              className="text-gray-700 text-base"
              style={{ maxHeight: "120px", overflow: "hidden" }}
            >
              {item.description}
            </p>
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
