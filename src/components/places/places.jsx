import React from 'react';
import PropTypes from 'prop-types';
import SortingList from '../sorting-list/sorting-list';
import CardsList from '../cards-list/cards-list';
import withSortingList from '../../hocs/with-sorting-list/with-sorting-list';

const Places = (props) => {
  const {offers, sortType, city, isSortingListOpen, onTogglerClick} = props;

  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{offers.length} places to stay in {city}</b>
      <form className="places__sorting" action="#" method="get">
        <span className="places__sorting-caption">Sort by</span>
        <span className="places__sorting-type" tabIndex="0" onClick={onTogglerClick}>
          {sortType}
          <svg className="places__sorting-arrow" width="7" height="4">
            <use xlinkHref="#icon-arrow-select"></use>
          </svg>
        </span>
        {
          isSortingListOpen && <SortingList/>
        }
      </form>

      <div className="cities__places-list places__list tabs__content">
        <CardsList offers={offers}/>
      </div>
    </section>
  );
};

Places.propTypes = {
  city: PropTypes.string.isRequired,
  offers: PropTypes.array.isRequired,
  sortType: PropTypes.string.isRequired,
  isSortingListOpen: PropTypes.bool.isRequired,
  onTogglerClick: PropTypes.func.isRequired
};

export {Places};
export default withSortingList(Places);
