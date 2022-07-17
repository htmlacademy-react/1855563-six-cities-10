import {Link} from 'react-router-dom';
import Header from '../../components/header/header';
import styles from './not-found.module.css';

const NotFound = (): JSX.Element => (
  <div className={styles.pageNotFound}>
    <Header isFull={false} />
    <main className={styles.pageMainNotFound}>
      <div className="not-found">
        <h1 className={styles.title}>404. Page not found</h1>
        <Link className={styles.link} to="/">click to go to main</Link>
      </div>
    </main>
  </div>
);

export default NotFound;
