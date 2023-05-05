import Link from "next/link";
import React from "react";

type props = {
  href: string;
  children: React.ReactNode;
};
function CustomLink({ children, href }: props) {
  return (
    <Link
      className="font-normal text-base leading-6 text-gray-700 hover:text-gray-900 "
      href={href}
    >
      {children}
    </Link>
  );
}

export default CustomLink;
