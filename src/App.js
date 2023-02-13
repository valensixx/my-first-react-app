import {useEffect} from "react";
import './App.css';
import SearchIcon from './search.svg';

const API_URL = 'https://www.omdbapi.com?apikey=177d1d8e';

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
                />
            </div>
        </div>
    );
}

export default App;