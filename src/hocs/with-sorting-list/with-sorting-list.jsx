import React, {PureComponent} from 'react';

const withSortingList = (Component) => {
  class WithSortingList extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        isSortingListOpen: false
      };
      this.handleTogglerClick = this.handleTogglerClick.bind(this);
    }

    handleTogglerClick(evt) {
      evt.preventDefault();
      this.setState((prevState) => ({
        isSortingListOpen: !prevState.isSortingListOpen
      }));
    }

    render() {
      const {isSortingListOpen} = this.state;
      return (
        <Component
          {...this.props}
          isSortingListOpen={isSortingListOpen}
          onTogglerClick={this.handleTogglerClick}
        />
      );
    }
  }

  return WithSortingList;
};

export default withSortingList;
