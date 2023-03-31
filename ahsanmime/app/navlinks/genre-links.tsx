"use client"
import style from "../style/genreNav.module.scss"
import { useSelectedLayoutSegment } from "next/navigation"
import Link from "next/link"


export default function GenreLinks({ href, children }: any) {
  let segment = useSelectedLayoutSegment();  //Since useSelectedLayoutSegment is a Client Component hook, and Layouts are Server Components by default, useSelectedLayoutSegment is usually called via a Client Component that is imported into a Layout.
  let active = href === `/${segment}`;
  //   console.log({href , active}); For testing in client side console 

  return (
    <Link className={active ? style.genreLinks : style.genreLinks2} href={href}>
      {children}
    </Link>

  )
}


// Here we can see that NavBar is a server component but we can use navlinks functional component
// inside the Navbar server component.here static parts are rendered on server and
// client component which is renderred on clientside whenever client interact with ui.