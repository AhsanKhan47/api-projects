import "./globals.css";

export const metadata = {
  title: "Book api",
  description: "This is project is made with simple book api",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
