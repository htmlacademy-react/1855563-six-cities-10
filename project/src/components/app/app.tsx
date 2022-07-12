import MainPage from '../../pages/main-page/main-page';

type AppScreenProps = {
  hotelsCount: number[];
}

const App = ({hotelsCount}: AppScreenProps): JSX.Element => (
  <MainPage hotelsCount={hotelsCount} />
);

export default App;
