import Image from "next/image";
import header from "../style/header.module.scss";
import Link from "next/link";
import NavLinks from "../navlinks/nav-links";

export default function Nav() {
  // console.log("renderinggg");

  return (
    <>
      <nav className={header.nav}>
        <div className="image-wrapper">
          <Link href={`/info`}>
            <Image
              className={header.imgrad}
              src="/logo1.jpg"
              alt="logo"
              width={60}
              height={60}
            />
          </Link>
        </div>

        <div>
          <div>
            <ul>
              <li>
                <NavLinks href="/">Home</NavLinks>
              </li>
              <li>
                <NavLinks href="/recent-episodes">Recent Episodes</NavLinks>
              </li>
              <li>
                <NavLinks href="/top-airing">Top Airing</NavLinks>
              </li>
              <li className={header.lastLi}>
                <NavLinks href="/info">About Dev</NavLinks>
              </li>
            </ul>
          </div>
        </div>

        {/* <div className={header.hamburger}>
 <a onClick={()=> setNav(!showNav)} href="#">
 <GiHamburgerMenu />
 </a>
</div> */}
      </nav>
    </>
  );
}
