// Write your code here
import {Component} from 'react'

class ReviewsCarousel extends Component {
  state = {
    index: 0,
  }

  prevReview = () => {
    const {index} = this.state
    if (index !== 0) {
      this.setState(prevState => ({index: prevState.index - 1}))
    }
  }

  nextReview = () => {
    const {reviewsList} = this.props
    const len = reviewsList.length

    const {index} = this.state
    if (index !== len - 1) {
      this.setState(prevState => ({index: prevState.index + 1}))
    }
  }

  render() {
    const {reviewsList} = this.props
    const {index} = this.state

    const {imgUrl, username, companyName, description} = reviewsList[index]

    return (
      <div>
        <h1>Reviews</h1>
        <div>
          <button
            type="button"
            data-testid="leftArrow"
            onClick={this.prevReview}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>
          <div>
            <img src={imgUrl} alt={username} />
            <p>{username}</p>
            <p>{companyName}</p>
            <p>{description}</p>
          </div>
          <button
            type="button"
            data-testid="rightArrow"
            onClick={this.nextReview}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
