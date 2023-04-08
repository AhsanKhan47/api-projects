const contentful = require("contentful");
import {Document} from "@contentful/rich-text-types"
import { log } from "console";


interface Post{
    title:string,
    summary:string,
    slug:string,
    content:Document
}

const client = contentful.createClient({
    space: process.env.CONTENTFUL_SPACE_ID || "",
    accessToken: process.env.CONTENTFUL_ACCESS_KEY || ""
})
export async function getPost() {
    const post = await client.getEntries({
        content_type: "post"
    })
    return post.items.map((item:any) => item.fields) as Post[]
    
}
// Get content from contentful
export async function getPostContent(slug:string) {
    const post = await client.getEntries({
        content_type: "post",
        'fields.slug' :slug
    })
    
    return post.items.map((item:any) => item.fields)[0] as Post
    
}