import { useSelector } from 'react-redux';
import { initialValuesType } from '../PersonalData/PersonalData';
import styles from './Preview.module.css';


const Preview: React.FC = () => {

  const data = useSelector((state: initialValuesType) => state)

  return (
    <div className={styles.wrapper}>
      <div className={styles.personalData__container}>
        <p>Персональные данные</p>
        <span>{data.personAge}</span>
      </div>
      <div className={styles.childData__container}>
        <p>Дети</p>
        <div className={styles.childData}>
          <span>Василий,10 лет</span>
        </div>
        <div className={styles.childData}>
          <span>Василий,10 лет</span>
        </div>
        <div className={styles.childData}>
          <span>Василий,10 лет</span>  
        </div>
        <div className={styles.childData}>
          <span>Василий,10 лет</span>   
        </div>
        <div className={styles.childData}>
          <span>Василий,10 лет</span>     
        </div>       
      </div>
    </div>
  );
}

export default Preview;