import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Link from "next/link";
import { log } from "console";
import { getPost } from "./contentful/post";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "ahsanWrites",
};
export default async function page() {
  const posts = await getPost();

  return (
    <>
      <div className="flex flex-col  text-white h-screen bg-slate-200">
        <div className="h-screen border w-11/12  sm:w-10/12 lg:w-7/12  mx-auto my-auto shadow-lg  bg-slate-300 ">
          <div className=" grid grid-cols-1 sm:grid-cols-2 gap-8 my-auto mt-20 p-6   ">
            {posts.map((post: any) => (
              <div className="border bg-slate-600 border-slate-50 border-opacity-30 p-8 py-12 rounded-md ">
                {" "}
                <Link
                  className="text-gray-200 hover:text-gray-400 transition-all text-xl"
                  href={`/${post.slug}`}
                  key={post.title}
                >
                  {post.title}
                </Link>
                <h3 className="my-3">{post.summary}</h3>
                <Link
                  href={`/${post.slug}`}
                  className="text-gray-200 hover:text-gray-400 transition-all text-xl "
                >
                  learn more
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
