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
        <h1>Posts</h1>

        {posts.map((post: any) => (
          <Link
            className="text-gray-200 hover:text-gray-400 transition-all"
            href={`/Posts/${post.slug}`}
          >
            {post.title}
          </Link>
        ))}
      </div>
    </>
  );
}
