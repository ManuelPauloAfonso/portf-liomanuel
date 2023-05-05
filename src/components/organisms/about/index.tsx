import Image from "next/image";
import manuel from "../../../../public/assets/manuel.jpg";
import Button from "@/components/atomics/button";

function About() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center mt-20">
      <Image
        src={manuel}
        alt="manuel"
        className="md:mr-8 rounded-full w-64 h-64 object-cover"
      />
      <div className="md:w-1/2">
        <h1 className="text-3xl font-bold mb-4">Sobre Mim</h1>
        <p className="text-lg">
          Front-end developer with a keen eye for detail and a determination to
          deliver the highest quality. I am very proud of my work and I always
          try to improve myself with each project I work on. The main areas of
          my expertise are HTML(5), CSS(3), JavaScript , ReactJs ..
        </p>
        <div className="mt-5">
          <Button title="my blog" />
        </div>
      </div>
    </div>
  );
}
export default About;
