import {useEffect} from "react";
import './App.css';
import SearchIcon from './search.svg';

const API_URL = 'https://www.omdbapi.com?apikey=177d1d8e';

const movie1 = {   //this object is taken to be static from the api at the console in the web brawser
    "Title": "Batman v Superman: Dawn of Justice",
    "Year": "2016",
    "imdbID": "tt2975590",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
    }   

const App = () => {

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`); //this line will call the API response
        const data = await response.json();

        console.log(data.Search); //I want to see only the search results. In my case all Batman movies
    }

    useEffect(() =>{
        searchMovies('Batman');
    }, []);

    return(
        <div className = "app">
            <h1>MovieApp</h1>

            <div className = "search">
                <input 
                    placeholder="Search for movies"
                    value="Batman"
                    onChange={() => {}}
                />
                <img
                    src = {SearchIcon}
                    alt = "search icon img"
                    onClick={() => {} }
                />
            </div>

            <div className="container"> 
                <div className="movie">
                    <div>
                        <p>{movie1.Year}</p>
                    </div>
                
                    <div>
                        <img src={movie1.Poster !== 'N/A' ? movie1.Poster: 'https://via.placeholder.com/400'} alt={movie1.Title}/>
                    </div>

                    <div>
                        <span>{movie1.Type}</span>
                        <h3>{movie1.Title}</h3>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default App;