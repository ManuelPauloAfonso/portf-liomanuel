import Head from "next/head";
import { ReactNode } from "react";
import Container from "../container";
import Navbar from "@/components/organisms/navbar";
import Footer from "@/components/organisms/footer";

type props = {
  title: string;
  children: ReactNode;
};
function Layout({ children, title }: props) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Navbar />
      <Container>{children}</Container>
      <Footer />
    </>
  );
}

export default Layout;
