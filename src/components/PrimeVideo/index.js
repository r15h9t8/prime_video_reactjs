// Write your code here
import MoviesSlider from '../MoviesSlider'
import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props
  const actionMoviesList = moviesList.filter(
    movie => movie.categoryId === 'ACTION',
  )

  const comedyMoviesList = moviesList.filter(
    movie => movie.categoryId === 'COMEDY',
  )

  return (
    <div className="prime-video-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        className="logo"
        alt="prime video"
      />
      <div className="movies-container">
        <h1 className="movies-type">Action Movies</h1>
        <MoviesSlider moviesList={actionMoviesList} />
        <h1 className="movies-type">Comedy Movies</h1>
        <MoviesSlider moviesList={comedyMoviesList} />
      </div>
    </div>
  )
}
export default PrimeVideo
