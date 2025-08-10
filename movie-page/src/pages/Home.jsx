import MovieCard from "../components/MovieCard"
import { useState } from "react"

function Home() {
    const [searchQuery, setSearchQuery] = useState("")

    const movies = [
        { id: 1, title: "Devil Wears Prada", release_date: "2008" },
        { id: 2, title: "Leap Year", release_date: "2016" },
        { id: 3, title: "Hating Game", release_date: "2019" },
        { id: 4, title: "Pocketful of Sunshine", release_date: "2020" },
    ]

    const handleSearch = (e) => {
        e.preventDefault()
        alert(searchQuery)
        setSearchQuery("-------")
    }

    return <div className="home">
        <form onSubmit={handleSearch} className="search-form">
            <input type="text" placeholder="Search for movies..." className="search-input" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
            <button type="submit" className="search-button">Search</button>
        </form>

        <div className="movie.grid">
            {movies.map(movie => (movie.title.toLowerCase().startsWith(searchQuery) && <MovieCard movie={movie} key={movie.id} />))}

        </div>
    </div>
}

export default Home