import Link from "next/link";
import popular from "../style/popular.module.scss";

async function getPopularAnime() {
  const res = await fetch(
    "https://api.consumet.org/anime/gogoanime/top-airing",
    {
      cache: "force-cache",
    }
  );
  if (!res.ok) {
    throw new Error(
      "The gogoanime api is down at the moment please try again later"
    );
  }
  return res.json();
}

export default async function page() {
  let popularAnime = await getPopularAnime();

  return (
    <>
      <div className={popular.title}>Top Airing</div>

      <ul className={popular.main}>
        {popularAnime.results.map((popular: any) => (
          <li key={popular.id}>
            <Link href={`/top-airing/${popular.id}`}>
              <img src={popular.image} alt="most popular image" />
            </Link>
            <p>{popular.title}</p>
            <h4 className={popular.yg}>Released date : {popular.id}</h4>
          </li>
        ))}
      </ul>
    </>
  );
}
