import React from 'react';
import axios from 'axios';
import Movie from './Movie';

class App extends React.Component {
  state = {
    isLoading: true, //key:key value
    movies: [],
  }

  getMovies = async ( ) => {
    const{
       data: {
          data: {movies},
       },
    } = await axios.get('http://yts-proxy.now.sh/list_movies.json?genre=animation&sort_by=like_count');
    //console.log(movies.data.data.movies);
    this.setState({movies:movies, isLoading: false});  //키:키 값 이름이 동일 하면
  }

  componentDidMount() {
    //setTimeout(() => {
   //   this.setState({isLoading: false});
   // },6000)
   this.getMovies();
  }

  render() {
    const {isLoading, movies} = this.state;  //구조분해 할당 모양
    return (
       <div>{isLoading ? 'Loading...' :
        movies.map(movie => (<Movie
                                                     id={movie.id}
                                                     year={movie.year}
                                                     title={movie.title}
                                                     summary={movie.summary}
                                                     poster={movie.medium_cover_image}
                                                     /> ))

        }</div>
    );
  }
}

export default App; /*App 이라는 이름으로 내보내기 */