import React from 'react'

import MovieReviews from './MovieReviews'

class SearchableMovieReviewsContainer extends React.Component {
  constructor() {
    super()
    this.state = {
      reviews: []
    }

  } //end constructor

  //got this from classmate:
  getSearchedReviews(search){
    const url = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
    const api = 'api-key='
    const query = '&query=' + search

    fetch(url + api + query, {mode: 'cors'}).then(function(response) {
      return response.json()
    }).then( (data) => { console.log(data); this.setState({ reviews: data.results })
    })
  }

  // componentWillMount() {
  //   //fetch('/api/current_user/book_list')
  //     //.then((res => this.setState({ books: JSON.parse(res) }));
  // }

  render() {
    return (
      <div className={"searchable-movie-reviews"}>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }//end render

} //end class

export default SearchableMovieReviewsContainer
