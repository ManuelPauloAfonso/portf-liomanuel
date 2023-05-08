import Button from "@/components/atomics/button";
import Logo from "@/components/atomics/logo";
import Link from "next/link";
function Navbar() {
  return (
    <header className="flex justify-between p-7 bg-white shadow ">
      <Logo />
      <nav>
        <ul className="flex items-center gap-8">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"#about"}>About</Link>
          </li>
          <li>
            <Link href={"#projects"}>Projects</Link>
          </li>
          <li>
            <Button title="Baixar cv" />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
