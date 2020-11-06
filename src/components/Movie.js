import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import './Movie.css';

function Movies({id,title,year,summary,poster,index,genres}){
    return(
        <div className="movie">
          <Link to={{
                            pathname: '/movie_detail',
                             state: {year,title,summary,poster,genres}
                           }}>
                <img src={poster} alt={title} title={title}/>
                <div className="movie_data">
                    <h3 className="movie_title" style={{backgroundColor: '#eee'}}>{title}</h3>
                    <h4 className="movie_year">{year}</h4>
                    <ul className="movie_genres">
                        {genres.map((genre,index) => {
                            return(
                                <li key={index} className="movie_genre">{genre}</li>
                            );
                        })}
                </ul>
                <p className="movie_summary">{summary.slice(0,180)} ...</p>
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
