
import { getData } from "@/utils/Function";
import { Movie } from "@/utils/Interfaces/Movies";
import Link from "next/link";
import { BsCameraReelsFill } from "react-icons/bs";

export default async function Movies() {
  try {
    const getMovies = await getData();

    return (
      <>
        <h1 className="title">MOVIES</h1>
        <div>
        {getMovies?.data.map((event:Movie) => (
        <div className="card"> <BsCameraReelsFill key={event.id} />
        <div><h2 className="movie-name">{event.name}</h2>
        <Link href={String(event.id)}><p className="button-id">{event.id}</p></Link>
        </div>
        <img className="movie-img" src={event.image} alt={`Cartel de ${event.name}`}/>
        <p>Genre:</p>{" "}{event.genre.map((genre) => genre.genre.name).join(", ")}
        <p>Sinopsis:</p> {event.sinopsis}
        <p>Score:</p> {event.score}
    </div>

))}
          <Link href="/movies/new">
          <button>New Movie</button>
        </Link>
        </div>
      </>
    );
  } catch (error) {
    console.log("NO API MOVIES", error);
  }
}




