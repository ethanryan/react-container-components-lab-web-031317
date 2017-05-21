import React from 'react'

import MovieReviews from './MovieReviews'

class LatestMovieReviewsContainer extends React.Component {
  constructor() {
    super()
    this.state = {
      reviews: []
    }

  } //end constructor

  //got this from classmate:
  getLatestReviews(){
    fetch('https://api.nytimes.com/svc/movies/v2/reviews/all.json?api-key=', {mode: 'cors'}).then(function(response) {
      return response.json()
    }).then( (data) => {
      this.setState({
        reviews: data.results
      })
    })
  }

  render() {
    return (
      <div className={"latest-movie-reviews"}>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }//end render

} //end class

export default LatestMovieReviewsContainer
