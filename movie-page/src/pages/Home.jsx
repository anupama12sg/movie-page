import MovieCard from "../components/MovieCard"

function Home() {
    const movies = [
        { id: 1, title: "Devil Wears Prada", release_date: "2008" },
        { id: 2, title: "Leap Year", release_date: "2016" },
        { id: 3, title: "Hating Game", release_date: "2019" },
        { id: 4, title: "Pocketful of Sunshine", release_date: "2020" },
    ]

    return <div className="home">
        <div className="movie.grid">
            {movies.map(movie => <MovieCard movie={movie} key={movie.id}/>)}

            </div>
    </div>
}

export default Home