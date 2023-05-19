import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function DetailsPage() {

    //const dispatch = useDispatch();
    // const history = useHistory();
    const movies = useSelector(store => store.movies);
    const genres = useSelector(store => store.genres);

    console.log(movies);


    return (
        <main>
            <h1>Movie</h1>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <div key={movie.id} >
                            <h3>{movie.title}</h3>
                            <img src={movie.poster} alt={movie.title} />
                            <h3>{movie.description}</h3>
                        </div>
                    );
                })}
                {
                    genres.map(genre => {
                        return (
                            <p>{genre.genre}</p>
                        )
                    })
                }
            </section>
        </main>

    );
}

export default DetailsPage;