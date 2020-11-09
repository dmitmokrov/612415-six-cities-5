import React from 'react';
import PropTypes from 'prop-types';
import {ActionCreator} from '../../store/action';
import {connect} from 'react-redux';
import {cities} from '../../const';
import CityItem from '../city-item/city-item';

const CitiesList = (props) => {
  const {city, changeCity} = props;

  return (
    cities.map((cityItem) => (
      <CityItem
        key={cityItem}
        city={cityItem}
        isActive={city === cityItem}
        changeCity={changeCity}
      />))
  );
};

const mapStateToProps = ({PROCESS}) => ({
  city: PROCESS.city
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
