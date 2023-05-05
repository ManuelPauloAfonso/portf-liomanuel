import Layout from "@/components/templates/layout";
import Banner from "@/components/organisms/banner";
import Projects from "@/components/organisms/projects";
import About from "@/components/organisms/about";
import Experencie from "@/components/organisms/experencie";

export default function Home() {
  return (
    <>
      <Layout title="Meu blog">
        <Banner />
        <Projects />
        <About />
        <Experencie />
      </Layout>
    </>
  );
}
