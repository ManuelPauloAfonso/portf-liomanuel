import Image from "next/image";
import manuel from "../../../../public/assets/manuel.jpg";
import Button from "@/components/atomics/button";

function About() {
  return (
    <div
      id="about"
      className="flex flex-col md:flex-row items-center justify-center mt-20"
    >
      <Image
        src={manuel}
        alt="manuel"
        className="md:mr-8 rounded-full w-64 h-64 object-cover"
      />
      <div className="md:w-1/2">
        <h1 className="text-3xl font-bold mb-4">Sobre Mim</h1>
        <p className="text-lg">
          Desenvolvedor front-end com atenção aos detalhes e determinação para
          entregar a mais alta qualidade. Tenho muito orgulho do meu trabalho e
          procuro sempre me aprimorar a cada projeto que desenvolvo. As
          principais áreas de especialização são HTML(5), CSS(3), JavaScript ,
          ReactJs ..
        </p>
        <div className="mt-5">
          <Button title="my blog" />
        </div>
      </div>
    </div>
  );
}
export default About;
