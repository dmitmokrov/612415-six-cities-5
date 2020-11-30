import React from 'react';
import PropTypes from 'prop-types';
import {ActionCreator} from '../../store/action';
import {connect} from 'react-redux';
import {CITIES} from '../../const';
import CityItem from '../city-item/city-item';
import {getCity} from '../../store/selectors';

const CitiesList = (props) => {
  const {city, changeCity} = props;

  return (
    CITIES.map((cityItem) => (
      <CityItem
        key={cityItem}
        city={cityItem}
        isActive={city === cityItem}
        changeCity={changeCity}
      />))
  );
};

const mapStateToProps = (state) => ({
  city: getCity(state)
});

const mapDispatchToProps = (dispatch) => ({
  changeCity(city) {
    dispatch(ActionCreator.changeCity(city));
  }
});

CitiesList.propTypes = {
  city: PropTypes.string.isRequired,
  changeCity: PropTypes.func.isRequired
};

export {CitiesList};
export default connect(mapStateToProps, mapDispatchToProps)(CitiesList);
