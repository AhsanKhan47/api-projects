import React from "react";

async function getBooks2() {
  const res = await fetch(`https://simple-books-api.glitch.me/books`);
  if (!res.ok) {
    throw new Error(
      "The gogoanime api is down at the moment please try again later"
    );
  }
  return res.json();
}
async function getBookPath2(p: any) {
  const data = await getBooks2();
  const book2 = data.find((book: any) => book.id == p);
  return book2;
}

export default async function page({ params }: any) {
  const iid = await getBooks2();
  console.log(iid);

  const bookData = await getBookPath2(params.t);
  console.log(bookData);

  return <>{bookData.name}</>;
}
