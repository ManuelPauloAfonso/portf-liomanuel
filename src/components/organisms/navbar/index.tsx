import Button from "@/components/atomics/button";
import Logo from "@/components/atomics/logo";
function Navbar() {
  return (
    <header className="flex justify-between p-7 bg-white shadow ">
      <Logo />
      <nav>
        <ul className="flex items-center gap-8">
          <li>Home</li>
          <li>About</li>
          <li>Products</li>
          <li>
            <Button title="Baixar cv" />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
