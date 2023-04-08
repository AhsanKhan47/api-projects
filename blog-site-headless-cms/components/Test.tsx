//Old way of fetching data
import { Inter } from "next/font/google";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Wrapper from "@/components/Wrapper";

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

  return (
    <>
      <Wrapper>
        <div className="  w-11/12 mx-auto sm:w-9/12 lg:w-11/12 bg-slate-100 p-8">
          {blogs.items.map((item: any) => (
            <>
              <p className="font-semibold w-10/12 my-4 text-3xl sm:text-4xl md:text-5xl md:mt-10 md:font-bold ">
                {" "}
                {item.fields.heading}
              </p>
              <div className=" sm:text-xl sm:my-8">
                {documentToReactComponents(item.fields.para1)}
              </div>

              <div>
                <p className="my-6 font-bold text-lg sm:text-2xl sm:my-8">
                  {item.fields.heading2}
                </p>
                <div>
                  {/* Fetching image from contentful */}
                  {blogs.includes.Asset.map((a: any) => (
                    <div key={a.id}>
                      {item.fields.image1.sys.id == a.sys.id ? (
                        <img
                          src={"https:" + a.fields.file.url}
                          alt=""
                          className="h-[250px] w-[250px] sm:h-[500px] sm:w-[500px] mx-auto my-20"
                        />
                      ) : (
                        <div></div>
                      )}
                    </div>
                  ))}
                </div>

                <div className="my-6 font-semibold sm:text-xl sm:my-8">
                  {documentToReactComponents(item.fields.para2)}
                </div>
                <div className="my-6 sm:text-xl sm:my-8">
                  {documentToReactComponents(item.fields.para3)}
                </div>
                <div className="my-6 sm:text-xl sm:my-8">
                  {documentToReactComponents(item.fields.para4)}
                </div>
                <div className="my-6 sm:text-xl sm:my-8">
                  {documentToReactComponents(item.fields.para5)}
                </div>
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
      </Wrapper>
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
