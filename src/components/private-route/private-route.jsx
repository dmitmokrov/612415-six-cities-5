import React from 'react';
import PropTypes from 'prop-types';
import {Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {AuthorizationStatus} from '../../const';

const PrivateRoute = (props) => {
  const {render, path, exact, isAuthRequired, redirectRoute, authorizationStatus} = props;
  const isAuth = authorizationStatus === AuthorizationStatus.AUTH;
  return (
    <Route
      path={path}
      exact={exact}
      render={(routeProps) => {
        return (
          isAuth === isAuthRequired
            ? render(routeProps)
            : <Redirect to={redirectRoute}/>
        );
      }}
    />
  );
};

PrivateRoute.propTypes = {
  render: PropTypes.func,
  path: PropTypes.string,
  exact: PropTypes.bool,
  isAuthRequired: PropTypes.bool,
  redirectRoute: PropTypes.string,
  authorizationStatus: PropTypes.string
};

const mapStateToProps = (state) => ({
  authorizationStatus: state.USER.authorizationStatus
});

export {PrivateRoute};
export default connect(mapStateToProps)(PrivateRoute);
