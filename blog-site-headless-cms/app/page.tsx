import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { client } from "@/lib/contentful/clients";
const inter = Inter({ subsets: ["latin"] });
async function getBlogData() {
  const res = await fetch(
    `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/entries?access_token=${process.env.CONTENTFUL_ACCESS_KEY}&content_type=body`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function Home() {
  const blogs = await getBlogData();
  console.log(blogs.items.item);

  return (
    <>
      <div className=" text-slate-200 text-4xl">
        {blogs.items.map((item: any) => (
          <>
            <p> {item.fields.heading}</p>
            <div>{documentToReactComponents(item.fields.paragraph1)}</div>
            <div>
              <div>
                {blogs.includes.Asset.map((a: any) => (
                  <div>
                    {item.fields.image1.sys.id == a.sys.id ? (
                      <img
                        src={"https:" + a.fields.file.url}
                        alt=""
                        className="h-[300px] w-[300px] md:h-[500px] md:w-[500px]"
                      />
                    ) : (
                      <div></div>
                    )}
                  </div>
                ))}
              </div>
              <div>{documentToReactComponents(item.fields.paragraph2)}</div>
              {/* Author Secton */}

              {/* <div>
                {blogs.includes.Asset.map((a: any) => (
                  <div>
                    {item.fields.creator.sys.id == a.sys.id ? (
                      <img
                        src={"https:" + a.fields.file.url}
                        alt=""
                        className="h-[300px] w-[300px] md:h-[500px] md:w-[500px]"
                      />
                    ) : (
                      <div></div>
                    )}
                  </div>
                ))}
              </div> */}
            </div>
          </>
        ))}
      </div>
    </>
  );
}

// import React from "react";

// export default function page({ post }: any) {
//   console.log(post.fields);
//   console.log(post);

//   const { title, heading } = post.fields;

//   return (
//     <div>
//       {post.map((pos: any) => (
//         <div>{title}</div>
//       ))}
//     </div>
//   );
// }

// export const getStaticProps = async () => {
//   const response = await client.getEntries({ content_type: "body" });
//   return {
//     props: {
//       post: response.items,
//     },
//   };
// };
