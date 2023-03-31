import React from "react";

async function getBookDetails(id: number) {
  const res = await fetch(`https://simple-books-api.glitch.me/books/${id}`);
  return res.json();
}

export default async function page({ params }: any) {
  const log = await getBookDetails(params.id);
  const { name, type, id, price, currentstock } = log;

  return (
    <>
      <section className="h-screen flex justify-center  items-center bg-gray-800">
        <div className="w-4/12 h-[40vh] my-auto m-auto pb-12  flex justify-center flex-col rounded-md p-6 bg-gray-400 hover:bg-gray-500 transition-all font-semibold ">
          <span className="m-auto text-xl font-bold">{name}</span>
          <div className="grid grid-cols-2 gap-3">
            <h1 className="text-xl">Book Id : </h1>
            <span>{id}</span>
            <h3 className="text-lg "> Book Name :</h3>
            <span>{name}</span>
            <p className="text-lg">Book Type : </p>
            <span>{type}</span>
            <h3 className="text-lg "> Price :</h3>
            <span>{price} USD</span>
          </div>
        </div>
      </section>
    </>
  );
}
