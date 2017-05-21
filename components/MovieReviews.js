//got below from classmate:

import React from 'react'

var MovieReviews = props => {
  MovieReviews.defaultProps = {reviews: []}

  var reviewList = props.reviews.map(function(review) {
    return (
      <div className="review" key={review.link.url}>
        <h3>{review.display_title}</h3>
        <p>{review.summary_short}</p>
      </div>
    )
})

  return (
    <div className="review-list">
        {reviewList}
    </div>
  )
}

export default MovieReviews
