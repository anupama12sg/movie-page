const hostHeaderValue = "imdb232.p.rapidapi.com"
const BASE_URL = "https://imdb232.p.rapidapi.com/api"
const API_KEY = import.meta.env.VITE_API_KEY

export const getPopularMovies = async () => {
    const response = await fetch(`${BASE_URL}/title/get-most-popular?limit=20&topMeterTitlesType=ALL`,
        {
            method: 'GET',
            headers: {
                'x-rapidapi-key': API_KEY,
                'x-rapidapi-host': hostHeaderValue
            }
        }
    )
    console.log(`${BASE_URL}/today-recomendations`)
    const data = await response.json()
    console.log(data)
    return data.results
}

export const searchMovies = async (query) => {
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`)
    const data = await response.json()
    return data.results
}