import React from 'react';
import MovieStars from "../MovieStars"
import './styles.css'

type Props = {
    score : number,
    count : number
}

function MovieScore({score, count} : Props){

    const scores = .5;
    const counts = 13

    return(
        <div className="dsmovie-score-container">
            <p className="dsmovie-score-value">{scores > 0 ? scores.toFixed(1) : '-'}</p>
            <MovieStars score={scores}/>
            <p className="dsmovie-score-count">{counts} avaliações</p>
        </div>
    )
}
export default MovieScore