import axios from 'axios';
import React, { useState, useEffect } from 'react';
import MovieCard from "../../components/MovieCard";
import Pagination from "../../components/Pagination";
import { MoviePage } from '../../types/movie';
import { BASE_URL } from '../../utils/requests';

function Listing(){

    const [pageNumber, setPageNumber] = useState(0);
    const [movie, setMovie] = useState([]);
    const [page, setPage] = useState<MoviePage>({
        content: [],
        last: true,
        totalPages: 0,
        totalElements: 0,
        size: 12,
        number: 0,
        first: true,
        numberOfElements: 0,
        empty: true,
        }
    )

    /*const movie = {
        id: 1,
        image: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/jBJWaqoSCiARWtfV0GlqHrcdidd.jpg",
        title: "The Witcher",
        count: 2,
        score: 4.5
    };*/
    
    function listPage(){
        axios.get(`${BASE_URL}/movies?size=12&page=${pageNumber}`).then(response => {
            const data = response.data;
            setPage(data);
            setMovie(data)
        })
    }

    useEffect(() => {
        listPage()
        console.log(movie)
    },[pageNumber])

    const handlePageChange = (newNumber: number) => {
        setPageNumber(newNumber);
    }
    return(
        <>
            <Pagination page={page} onChange={handlePageChange}/>
            <div className="row m-1">
                {/*page.content.map(movie => {
                    <div /*key={//movie.id} className="col-sm-6 col-lg-4 col-xl-3 mb-4">
                        <p>
                            {//movie.title}
                            </p>
                        <MovieCard movie={'ccc'}
                        />
                    </div>
                    //})*/
                }
            </div>
        </>
    )
}


export default Listing;

