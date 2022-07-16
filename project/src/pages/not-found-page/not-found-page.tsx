import {Link} from 'react-router-dom';
import Logo from '../../components/logo/logo';

const NotFound = (): JSX.Element => (
  <div className="page page--gray page--login">
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <Logo />
        </div>
      </div>
    </header>
    <main className="page__main page__main--login">
      <div className="not-found">
        <h1>404. Page not found</h1>
        <Link to="/">Вернуться на главную</Link>
      </div>
    </main>
  </div>
);

export default NotFound;
