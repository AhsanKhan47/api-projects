import React from "react";
import { getPost } from "@/app/contentful/post";
import Link from "next/link";
import { log } from "console";
export default async function page() {
  const posts = await getPost();

  return (
    <>
      <div className="flex flex-col text-white h-screen bg-slate-900">
        <div className="w-11/12  sm:w-10/12 lg:w-7/12 mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 my-auto    ">
          {posts.map((post: any) => (
            <div className="border border-slate-50 border-opacity-30 p-8 py-12 rounded-md ">
              {" "}
              <Link
                className="text-gray-200 hover:text-gray-400 transition-all text-xl"
                href={`/Posts/${post.slug}`}
                key={post.title}
              >
                {post.title}
              </Link>
              <h3 className="my-3">{post.summary}</h3>
              <Link
                href={`/Posts/${post.slug}`}
                className="text-gray-200 hover:text-gray-400 transition-all text-xl "
              >
                learn more
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
