import React from "react";
import style from "../../style/movie.module.scss";

// get anime card details
async function getMoviesDetails(id: string) {
  const res = await fetch(
    `https://api.consumet.org/anime/gogoanime/info/${id}
    `
  );
  if (!res.ok) {
    throw new Error(
      "The gogoanime api is down at the moment please try again later"
    );
  }
  return res.json();
}

async function getRecentEpisodes() {
  const res1 = await fetch(
    "https://api.consumet.org/anime/gogoanime/recent-episodes"
  );
  if (!res1.ok) {
    throw new Error(
      "The gogoanime api is down at the moment please try again later"
    );
  }
  const myData = res1.json();
  return myData;
}

async function getMoviesPath(params: any) {
  const myData = await getRecentEpisodes();
  const cardInfo1 = myData.results.find((card: any) => card.id == params.info);
  return cardInfo1;
}

export default async function MoviesCard({ params }: any) {
  const cardInfo1 = await getMoviesPath(params);
  const { image, title } = cardInfo1;

  //anime detials card
  const cardDetail = await getMoviesDetails(params.info);
  let {
    type,
    episodesAvailable,
    releaseDate,
    status,
    totalEpisodes,
    genres,
    otherName,
    episodesAvaliable,
  } = cardDetail;
  genres = genres.map((g: string) => g);

  return (
    <div>
      <div>
        <h1 className={style.heading}>Popular Anime of 2023</h1>
        <div className={style.card}>
          <div className={style.imgCont}>
            <img src={image} alt="card img" />
          </div>

          <div className={style.cardInfo}>
            <h2>
              {" "}
              <span className={style.yellowGreen}> Name : </span> {title}
            </h2>{" "}
            <h2>
              {" "}
              <span className={style.yellowGreen}> Total Episodes : </span>{" "}
              {totalEpisodes}
            </h2>
            <h3>
              {" "}
              <span className={style.yellowGreen}> type : </span>
              {type}
            </h3>
            <h3>
              {" "}
              <span className={style.yellowGreen}> status : </span>
              {status}
            </h3>
            <h3>
              {" "}
              <span className={style.yellowGreen}> Released Date : </span>
              {releaseDate}
            </h3>
            <h3>
              {" "}
              <span className={style.yellowGreen}> genres : </span>
              {genres.map((genre: string) => (
                <span className={style.mr}>{genre}</span>
              ))}{" "}
            </h3>
            <h3>
              {" "}
              <span className={style.yellowGreen}> otherNames : </span>
              {otherName}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
