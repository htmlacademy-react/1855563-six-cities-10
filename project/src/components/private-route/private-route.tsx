import {Navigate} from 'react-router-dom';
import { AppRoute, AuthorizeStatus } from '../../const';

type PrivateRouteProps = {
  authorizeStatus: AuthorizeStatus;
  children: JSX.Element;
}

const PrivateRoute = ({authorizeStatus, children}: PrivateRouteProps): JSX.Element => (
  authorizeStatus === AuthorizeStatus.Auth
    ? children
    : <Navigate to={AppRoute.Login} />
);

export default PrivateRoute;
