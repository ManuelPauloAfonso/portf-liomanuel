import CustomLink from "@/components/atomics/customlink";

function Banner() {
  return (
    <div>
      <h1 className="font-medium text-4xl md:text-5xl lg:text-6xl leading-10 lg:leading-14 text-black mt-16">
        Title about what you do and who you do it for.
      </h1>
      <p className="font-normal text-lg leading-6 text-gray-700 mt-8">
        Short and sweet sub-heading goes here.
      </p>
      <CustomLink href="ver mais">Scroll Down</CustomLink>
    </div>
  );
}

export default Banner;
