import popular from "../../style/popular.module.scss";
async function getPopularCard() {
  const data = await fetch(
    "https://api.consumet.org/anime/gogoanime/top-airing"
  );
  if (!data.ok) {
    throw new Error(
      "The gogoanime api is down at the moment please try again later"
    );
  }
  const myData = data.json();
  return myData;
}

async function getPopularPath(params: any) {
  const myData = await getPopularCard();
  console.log(myData);

  const cardInfo = myData.results.find((card: any) => card.id == params.info);
  console.log(cardInfo);

  return cardInfo;
}

// get anime card details
async function getAnimeDetails(id: string) {
  const res = await fetch(
    `https://api.consumet.org/anime/gogoanime/info/${id}`
  );
  if (!res.ok) {
    throw new Error(
      "The gogoanime api is down at the moment please try again later"
    );
  }
  return res.json();
}

export default async function Info({ params }: any) {
  // const info = await(getPopularData());
  const cardInfo = await getPopularPath(params);
  const { id, image, title } = cardInfo;

  //anime detials card
  const cardDetail = await getAnimeDetails(params.info);
  const { type, episodesAvailable, releasedDate, status, genres, otherNames } =
    cardDetail;

  return (
    <div>
      <h2 className={popular.center}>Top Airing Anime of 2023</h2>
      <div className={popular.card}>
        <div className={popular.imgCont}>
          <img src={image} alt="card img" />
        </div>

        <div className={popular.cardInfo}>
          <h2>
            {" "}
            <span className={popular.yellowGreen}> Name: </span> {title}
          </h2>
          <img src={popular.image} alt="" />
          {/* <h3>
            {" "}
            <span className={popular.yellowGreen}> Released Date: </span>
            {releasedDate}
          </h3> */}
          <h3>
            {" "}
            <span className={popular.yellowGreen}> type: </span>
            {type}
          </h3>
          <h3>
            {" "}
            <span className={popular.yellowGreen}> status: </span>
            {status}
          </h3>
          <h3>
            {" "}
            <span className={popular.yellowGreen}> genres: </span>
            {genres.map((genre: string) => (
              <span className={popular.mr}>{genre}</span>
            ))}
          </h3>
          {/* <h3>
            {" "}
            <span className={popular.yellowGreen}> otherNames: </span>
            {otherNames}
          </h3> */}
        </div>
      </div>
    </div>
  );
}

// export const getStaticPaths = async function () {
//   const res = await fetch("https://gogoanime.consumet.org/popular");
//   const data = await res.json();

//   const paths = data.map((curElem)=> {
//     return {
//       params: {
//         info: curElem.id.toString(),
//       }
//     }
//   })

//   return {
//     paths,
//     fallback:false,
//   }

// }

// export const getStaticProps = async ( context)=> {
//   const id = context.params.info
//   const res = await fetch(`https://gogoanime.consumet.org/popular/${id}`)
//   const data =  res.json();
//   return {
//     props: {
//       data,
//     },
//   }

// }
