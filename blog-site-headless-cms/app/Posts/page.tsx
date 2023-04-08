import React from "react";
import { getPost } from "../contentful/post";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Link from "next/link";
import { log } from "console";
export default async function page() {
  const posts = await getPost();

  return (
    <>
      <div className="flex flex-col text-white h-screen bg-slate-900">
        <div className="w-8/12 md:9/12 lg:w-6/12 mx-auto grid grid-cols-2 gap-8   ">
          {posts.map((post: any) => (
            <div className="border border-slate-50 border-opacity-30 p-8 rounded-md">
              {" "}
              <Link
                className="text-gray-200 hover:text-gray-400 transition-all text-xl"
                href={`/Posts/${post.slug}`}
                key={post.title}
              >
                {post.title}
              </Link>
              <h3>{post.summary}</h3>
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
