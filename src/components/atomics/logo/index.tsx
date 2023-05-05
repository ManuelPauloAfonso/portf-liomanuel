import Image from "next/image";
import Link from "next/link";
import manuel from "../../../../public/assets/Manuel Afonso.svg";

function Logo() {
  return (
    <div>
      <Link href={"/"}>
        <Image src={manuel} alt="logo" />
      </Link>
    </div>
  );
}

export default Logo;
