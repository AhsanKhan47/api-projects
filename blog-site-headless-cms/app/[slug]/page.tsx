import React from "react";
import { getPostContent } from "@/app/contentful/post";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { log } from "console";
import { Metadata } from "next";
interface Props {
  params: {
    slug: string;
  };
}
export async function generateMetadata({
  params: { slug },
}: Props): Promise<Metadata> {
  const post = await getPostContent(slug);
  return {
    title: post.title,
  };
}
export default async function page({ params: { slug } }: Props) {
  const post = await getPostContent(slug);

  return (
    <>
      <section className=" w-11/12  sm:w-10/12 lg:w-7/12 mx-auto bg-slate-300 p-12 md:p-10 ">
        <div
          className="prose mx-auto w-full  
        "
        >
          <h1>{post.title}</h1>

          {documentToReactComponents(post.content)}
        </div>{" "}
      </section>
    </>
  );
}
