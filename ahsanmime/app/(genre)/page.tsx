import Link from "next/link";
import movie from "../style/genreCards.module.scss";

async function getGenreDetails2() {
  // in parameter param's id will be passed while invoke
  const res = await fetch(
    `https://api.consumet.org/anime/gogoanime/recent-episodes`,
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

export default async function Hpage({ params }: any) {
  let genreDetails = await getGenreDetails2();

  return (
    <div>
      <h1>{genreDetails.id}</h1>
      <ul className={movie.main}>
        {genreDetails.results.slice(1, 10).map((p: any) => (
          <li key={p.id}>
            {" "}
            <img src={p.image} alt={p.id} />
            <p>{p.title}</p>
            <div className={movie.btmCard}>
              <p>
                <span className={movie.yellowGreen}> Episode Number : </span>
                {p.episodeNumber}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
