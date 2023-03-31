import React from "react";
import Link from "next/link";

const links = ["Home", "About", "Service"];
async function getBooks3() {
  const res = await fetch(`https://simple-books-api.glitch.me/books/`);
  if (!res.ok) {
    throw new Error(
      "The gogoanime api is down at the moment please try again later"
    );
  }
  return res.json();
}

export default async function page({ params }: any) {
  const info = await getBooks3();
  console.log(info);

  return (
    <>
      <ul>
        {info.map((title: any) => (
          <li>
            <Link href={`/test/${title.id}`}>{title.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
