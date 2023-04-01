import React, { useContext, useEffect, useState } from "react";
const API_URL = `https://www.omdbapi.com/?apikey=9d0e3aa2`;

const useFetch = (apiParams) => {
    const [movie, setMovie] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState({ show: "false", msg: "" });
    
    const getMovies = async (url) => {
        setIsLoading(true);
        try {
            const response = await fetch(url);
            const data = await response.json();
            console.log(data)
            if(data.Response === "True"){
                setMovie(data.Search || data);
                setIsError({ show: "false", msg: "" });
                setIsLoading(false);
            }
            else{
                setIsError({ show: "true", msg: data.Error });
                setIsLoading(true);
            }
        } catch (err) {
            console.log(err);
            setIsLoading(true)
        }
    };


    useEffect(() => {
        let timeOut = setTimeout(() => {
          getMovies(`${API_URL}&s=${apiParams}`);
        }, 500);
        return () => {
          clearTimeout(timeOut);
        };
      }, [apiParams]);

    return {movie, isLoading, isError};
}

export default useFetch