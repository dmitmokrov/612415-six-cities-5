import React, {PureComponent} from 'react';

const withUserAssessment = (Component) => {
  class WithUserAssessment extends PureComponent {
    constructor() {
      super();
      this.state = {
        rating: `0`,
        review: ``
      };
      this.handleFieldChange = this.handleFieldChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleFieldChange(evt) {
      const {name, value} = evt.target;
      this.setState({
        [name]: value
      });
    }

    handleSubmit() {
      this.setState({
        rating: `0`,
        review: ``
      });
    }

    render() {
      return (
        <Component {...this.props}
          comment={this.state.review}
          rating={this.state.rating}
          onChange={this.handleFieldChange}
          clearForm={this.handleSubmit}
        />
      );
    }
  }

  return WithUserAssessment;
};

export default withUserAssessment;
