import React from 'react';
import MovieCard from "../../components/MovieCard";
import Pagination from "../../components/Pagination";

function Listing(){
    return(
        <>
            <Pagination/>
            <div className="row m-1">
                <div className="col-sm-6 col-lg-4 col-xl-3 mb-4">
                    <MovieCard/>
                </div>
                <div className="col-sm-6 col-lg-4 col-xl-3 mb-4">
                    <MovieCard/>
                </div>
                <div className="col-sm-6 col-lg-4 col-xl-3 mb-4">
                    <MovieCard/>
                </div>
                <div className="col-sm-6 col-lg-4 col-xl-3 mb-4">
                    <MovieCard/>
                </div>
                <div className="col-sm-6 col-lg-4 col-xl-3 mb-4">
                    <MovieCard/>
                </div>
                <div className="col-sm-6 col-lg-4 col-xl-3 mb-4">
                    <MovieCard/>
                </div>
            </div>
        </>
    )
}

export default Listing;