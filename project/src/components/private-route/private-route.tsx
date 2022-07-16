import {Navigate} from 'react-router-dom';
import { AppRoute, AuthorizeStatus } from '../../const';

type PrivateRouteProps = {
  authorizeStatus: AuthorizeStatus;
  children: JSX.Element;
}

const PrivateRoute = (props: PrivateRouteProps): JSX.Element => {
  const {authorizeStatus, children} = props;
  return (
    authorizeStatus === AuthorizeStatus.Auth
      ? children
      : <Navigate to={AppRoute.Login} />
  );
};

export default PrivateRoute;


