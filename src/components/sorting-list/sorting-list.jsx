import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';
import {SORT_TYPES} from '../../const';
import {getSortType} from '../../store/selectors';

const SortingList = (props) => {
  const {activeSortType, changeSortType} = props;

  return (
    <ul className="places__options places__options--custom places__options--opened">
      {SORT_TYPES.map((sortType) => (
        <li
          className={`places__option ${sortType === activeSortType ? `places__option--active` : ``}`}
          tabIndex="0"
          onClick={() => changeSortType(sortType)}
          key={sortType}
        >
          {sortType}
        </li>
      ))}
    </ul>
  );
};

SortingList.propTypes = {
  activeSortType: PropTypes.string.isRequired,
  changeSortType: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  activeSortType: getSortType(state)
});

const mapDispatchToProps = (dispatch) => ({
  changeSortType(sortType) {
    dispatch(ActionCreator.changeSortType(sortType));
  }
});

export {SortingList};
export default connect(mapStateToProps, mapDispatchToProps)(SortingList);
