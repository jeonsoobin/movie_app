import React from 'react';
import axios from 'axios';
import Movie from '../components/Movie';
import './Home.css';

class Home extends React.Component{
  state = {
    isLoading : true,
    movies : [],
  };
  getMovies = async () => {
    const { data: { data: {movies} } } = await axios.get('https://yts-proxy.now.sh/list_movies.json?genre=animation&sort_by=like_count');
    // this.setState({movies: movies}); if 키 이름 == 키 값 =>
    this.setState({movies, isLoading : false});
  }
  componentDidMount(){
    this.getMovies();
  }
  render(){
    const {isLoading, movies} = this.state;
    return(
      <section className="container">
        {isLoading ? (<div className="loader"><span className="loader_text">'loading...</span></div>) : 
          <div className="movies">
            {movies.map( (movie, index) => (<Movie 
              id = {movie.id}
              year = {movie.year}
              title = {movie.title}
              summary = {movie.summary}
              poster = {movie.medium_cover_image}
              genres = {movie.genres}
              index = {index}
              />))}
            </div>
        }
      </section>
    );
  }
}
// props 읽기 전용(하위 컴포넌트에서 수정불가)
// state 동적 데이터 활용 -> 클래스형 컴포넌트에서 사용 객체 형태
export default Home;
