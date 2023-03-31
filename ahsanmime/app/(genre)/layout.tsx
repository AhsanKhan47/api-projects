import style from "../style/genreNav.module.scss";
import GenreLinks from "../navlinks/genre-links";
import Hero from "../hero/page";
export default function Home({ children }: { children: React.ReactNode }) {
  // creating a list of genre in an array. each value in list will be used as dynamic route segment/path
  let genre = [
    "action",
    "adventure",
    "comedy",
    "shounen",
    "demons",
    "drama",
    "fantasy",
    "horror",
    "shounen-ai",
    "supernatural",
    "kids",
  ];
  return (
    <>
      <Hero />
      <h1 className={style.heading}>Genres</h1>
      <h3 className={style.subHeading}>Select a genre</h3>
      <ul className={style.main}>
        {genre.map((genreType) => (
          <li>
            <GenreLinks className={style.genreLinks} href={`/${genreType}`}>
              {" "}
              {genreType}{" "}
            </GenreLinks>
          </li>
        ))}
      </ul>
      {children}
    </>
  );
}
