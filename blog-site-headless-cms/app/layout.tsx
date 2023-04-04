import "./globals.css";
import { Work_Sans } from "next/font/google";
import { Chivo } from "next/font/google";
const SpaceGrotesk = Work_Sans({
  subsets: ["latin"],
  weight: ["300"],
});
export const metadata = {
  title: "PiaicBlogs",
  description: "Headless Cms with Nextjs",
  icons: {
    icon: "/panaverse-logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`bg-slate-50 text-slate-800 ${SpaceGrotesk.className}`}>
        {children}
      </body>
    </html>
  );
}
