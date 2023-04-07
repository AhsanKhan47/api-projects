import React from "react";
import { getPostContent } from "@/app/contentful/post";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { log } from "console";
interface Props {
  params: {
    slug: string;
  };
}
export default async function page({ params: { slug } }: Props) {
  const post = await getPostContent(slug);

  return (
    <>
      <section className=" w-11/12 mx-auto sm:w-9/12 lg:w-8/12 bg-slate-100 p-8">
        <h1>blog</h1>
        <h1>{post.title}</h1>
        {documentToReactComponents(post.content)}
      </section>
    </>
  );
}
