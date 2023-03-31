import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });
async function getBooks() {
  const res = await fetch("https://simple-books-api.glitch.me/books");
  if (!res.ok) {
    throw new Error("Api is down, try again later");
  }
  return res.json();
}

export default async function Books() {
  const books = await getBooks();

  return (
    <>
      <section className="h-screen bg-gray-600 text-gray-200 p-20 text-center">
        <h1 className="text-3xl text-center mb-3 ">simple book api</h1>
        {books.map((book: any) => (
          <div className="flex flex-col ">
            <div>
              <Link href={`/books/${book.id}`}>{book.name}</Link>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
