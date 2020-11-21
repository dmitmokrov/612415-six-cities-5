import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

const withUserAssessment = (Component) => {
  class WithUserAssessment extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        rating: `0`,
        review: ``
      };
      this.handleFieldChange = this.handleFieldChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    _resetForm() {
      this.setState({
        rating: `0`,
        review: ``
      });
    }

    handleFieldChange(evt) {
      const {name, value} = evt.target;
      this.setState({
        [name]: value
      });
    }

    handleSubmit(evt) {
      const {id} = this.props;
      const {review, rating} = this.state;
      evt.preventDefault();
      this.props.onSubmitForm(id, {comment: review, rating});
      this._resetForm();
    }

    render() {
      const {review, rating} = this.state;
      const isButtonDisabled = this.state.review.length < 50 || this.state.rating === `0`;

      return (
        <Component {...this.props}
          comment={review}
          rating={rating}
          onChange={this.handleFieldChange}
          onSubmit={this.handleSubmit}
          isSubmitButtonDisabled={isButtonDisabled}
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
