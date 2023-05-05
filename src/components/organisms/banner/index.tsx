import Button from "@/components/atomics/button";
import CustomLink from "@/components/atomics/customlink";
import WhatsAppButton from "@/components/atomics/whatssapp";

function Banner() {
  return (
    <div>
      <h1 className="font-medium text-4xl md:text-5xl lg:text-6xl leading-10 lg:leading-14 text-black mt-16">
        Manuel Paulo Afonso
      </h1>
      <p className="font-normal text-lg leading-6 text-gray-700 mt-8">
        Desenvolvimento Web - Programação de sites responsivos, e dinâmicos
        usando CMS Wordpress, Framework Vuejs, Landing Pages, Lojas Virtuais, e
        Montagem de Email-Marketing, Para saber mais entre em contato.
      </p>
      <div className="mt-5">
        <Button title="baixar cv" />
      </div>
      <div className="mt-5">
        <WhatsAppButton phoneNumber="FJWFGEJJFWEPJFWOP" />
      </div>
    </div>
  );
}

export default Banner;
