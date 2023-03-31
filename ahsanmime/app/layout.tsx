import "./style/globals.css";
import Nav from "./Navbar/Nav";
import Footer from "./footer/page";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body>
        <Nav />
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
