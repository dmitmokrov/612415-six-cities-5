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
    }

    handleFieldChange(evt) {
      const {name, value} = evt.target;
      this.setState({
        [name]: value
      });
    }

    render() {
      return (
        <Component {...this.props} onChange={this.handleFieldChange}/>
      );
    }
  }

  return WithUserAssessment;
};

export default withUserAssessment;
