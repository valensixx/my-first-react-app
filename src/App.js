import {useEffect} from "react";

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
        <h1>App</h1>
    );
}

export default App;