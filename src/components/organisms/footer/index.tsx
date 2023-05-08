import Image from "next/image";
import face from "../../../../public/assets/instagram.svg";
import insta from "../../../../public/assets/linkedin.svg";
import tw from "../../../../public/assets/vector.svg";
import Link from "next/link";
function Footer() {
  return (
    <footer className="bg-gray-100 mt-10">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <p className="text-center text-gray-500 text-sm">
          Copyright © 2023
          <span className="font-bold">Manuel Afonso</span>
        </p>
        <div className="flex justify-center items-center gap-5 my-2">
          <Link href={"https://www.instagram.com/manuel_afonso29/"}>
            <Image src={face} alt="reds" />
          </Link>
          <Link href={"https://www.instagram.com/manuel_afonso29/"}>
            <Image src={insta} alt="reds" />
          </Link>
          <Link href={"https://twitter.com/mManuelPauloAf1"}>
            <Image src={tw} alt="redes" />
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
