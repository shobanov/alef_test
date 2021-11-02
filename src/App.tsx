import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import PersonalData from './components/PersonalData/PersonalData';
import styles from './App.module.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import Preview from './components/Preview/Preview';

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.wrapper}>
        <Header />
        <Route exact path="/">
          <Redirect to="/form" />
        </Route>
        <Switch>
          <Route path="/form">
            <PersonalData />
          </Route>
          <Route path="/preview">
            <Preview />
          </Route>
        </Switch>
      </div>
      <Footer />
    </div>
  );
};

export default App;