import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { AppRoute, AuthorizeStatus } from '../../const';
import MainPage from '../../pages/main-page/main-page';
import LoginPage from '../../pages/login-page/login-page';
import FavoritesPage from '../../pages/favorite-page/favorites-page';
import PropertyPage from '../../pages/property-page/property-page';
import NotFound from '../../pages/not-found-page/not-found-page';
import PrivateRoute from '../../components/private-route/private-route';


type AppScreenProps = {
  hotelsCount: number[];
}

const App = ({hotelsCount}: AppScreenProps): JSX.Element => (
  <BrowserRouter>
    <Routes>
      <Route
        path={AppRoute.Main}
        element={<MainPage hotelsCount={hotelsCount} />}
      />
      <Route
        path={AppRoute.Login}
        element={<LoginPage />}
      />
      <Route
        path={AppRoute.Favorites}
        element={
          <PrivateRoute
            authorizeStatus={AuthorizeStatus.NoAuth}
          >
            <FavoritesPage />
          </PrivateRoute>
        }
      />
      <Route
        path={AppRoute.Room}
        element={<PropertyPage />}
      />
      <Route
        path="*"
        element={<NotFound />}
      />
    </Routes>
  </BrowserRouter>

);

export default App;
