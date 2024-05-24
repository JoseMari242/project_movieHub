

import { getMovie } from "@/utils/Function";
import { Movie } from "@/utils/Interfaces/Movies";
import dotenv from 'dotenv';

dotenv.config();

type Props = {
  params: { id: string }
};

export default async function OneMovie({ params }: Props) {
  const id = params?.id;

  try {
    const response = await getMovie(id);
    const movie: Movie = response;

    if (!movie) {
      return <div>Movie not found</div>;
    }

    return (
      <div>
      <h1 className="title">{movie.name}</h1>
      <img className="movie-id" src={movie.image} alt={movie.name} />
      <p>Sinopsis:</p> {movie.sinopsis}
      <p>Score:</p> {movie.score}
    </div>
    );
  } catch (error) {
    console.error("Failed to fetch movie", error);
    return <div>Error fetching movie data</div>;
  }
}
