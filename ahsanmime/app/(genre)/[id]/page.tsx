import movie from "../../style/genreCards.module.scss";
import Link from "next/link";
// async function getGenreDetails(id: any) {
//   // in parameter param's id will be passed while invoke
//   const res = await fetch(`https://gogoanime.consumet.stream/genre/${id}`, {
//     cache: "force-cache",
//   });
//   if (!res.ok) {
//     throw new Error(
//       "The gogoanime api is down at the moment please try again later"
//     );
//   }
//   return res.json();
// }

export default async function DynamicHome({ params }: any) {
  // let genreDetails = await getGenreDetails(params.id);

  return (
    <div>
      {/* <h1>{genreDetails.animeId}</h1>
      <ul className={movie.main}>
        {genreDetails.slice(2, 10).map((p: any) => (
          <li key={p.animeId}>
            <img src={p.animeImg} alt={p.animeId} />

            <p>{p.animeTitle}</p>
            <div className={movie.btmCard}>
              <p>
                <span className={movie.yellowGreen}> Released Date : </span>
                {p.releasedDate}
              </p>
            </div>
          </li>
        ))}
      </ul> */}
    </div>
  );
}
