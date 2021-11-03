import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import PersonalData from './components/PersonalData/PersonalData';
import styles from './App.module.css';
import Preview from './components/Preview/Preview';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.wrapper}>
        <Header />
        <Routes>
          <Route path="/" element={<PersonalData />}/>
          <Route path="/preview" element={<Preview />}/>
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;