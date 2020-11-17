import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

const withUserAssessment = (Component) => {
  class WithUserAssessment extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        rating: `0`,
        review: ``,
        isSubmitButtonDisabled: true
      };
      this.handleFieldChange = this.handleFieldChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleFieldChange(evt) {
      const {name, value} = evt.target;
      const isButtonDisabled = this.state.review.length < 50 || this.state.rating === `0`;
      this.setState({
        [name]: value,
        isSubmitButtonDisabled: isButtonDisabled
      });
    }

    handleSubmit(evt) {
      const {id} = this.props;
      const {review, rating} = this.state;
      evt.preventDefault();
      this.props.onSubmitForm(id, {comment: review, rating});
      this.setState({
        rating: `0`,
        review: ``,
        isSubmitButtonDisabled: true
      });
    }

    render() {
      const {review, rating, isSubmitButtonDisabled} = this.state;
      return (
        <Component {...this.props}
          comment={review}
          rating={rating}
          onChange={this.handleFieldChange}
          onSubmit={this.handleSubmit}
          isSubmitButtonDisabled={isSubmitButtonDisabled}
        />
      );
    }
  }

  WithUserAssessment.propTypes = {
    id: PropTypes.number,
    onSubmitForm: PropTypes.func
  };

  return WithUserAssessment;
};

export default withUserAssessment;
