import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import './Movie.css';
function Movies({id,title,year,summary,poster,index,genres}){
    return(
        <div className="movie_box" id={"movie" + index}>
            <Link to={{pathname: '/Detail', state: {title,year,summary,poster,genres},}}>
                    <img src={poster} alt={title} title={title}/>
                <div className="movie_data">
                    <h3 className="movie_title" style={{backgroundColor: '#eee'}}>{title}</h3>
                    <h4 className="movie_year">{year}</h4>
                    <ul className="movie_genres">
                    {genres.map((genre,index) => (
                        <li key={index} className="movie_genre">{genre}</li>
                    ))}
                    <p className="movie_summary">{summary.slice(0,180)} ...</p>
                    </ul>
                </div>
        </Link>
            </div>
    );
}
Movies.propTypes ={
    id : PropTypes.number.isRequired,
    year : PropTypes.number.isRequired,
    title : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired,
    genre : PropTypes.array,
    index : PropTypes.number.isRequired,
};

 export default Movies;