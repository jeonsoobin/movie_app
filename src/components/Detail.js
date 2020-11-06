import React, { Component } from 'react'
import './Detail.css';
 
export default class Detail extends Component {
    componentDidMount(){
        const {location, history} = this.props;
        if(location.state === undefined){
            history.push('/');
        }
    }
    render() {
        const {location} = this.props;
        if(location.state){
        return (
            <div className="movie_detail">
                <div className="movie_box">
                    <img src={location.state.poster} alt={location.state.title} title={location.state.title}/>
                    <div className="movie_data">
                        <h3 className="movie_title" style={{backgroundColor: '#eee'}}>{location.state.title}</h3>
                        <h4 className="movie_year">{location.state.year}</h4>
                        <ul className="movie_genres">
                            {location.state.genres.map((genre,index) => (
                            <li key={index} className="movie_genre">{genre}</li>
                            ))}
                            <p className="movie_summary">{location.state.summary.slice(0,180)} ...</p>
                        </ul>
                    </div>
                </div>
            </div>
        )
        }
        else return null;
    }
}
