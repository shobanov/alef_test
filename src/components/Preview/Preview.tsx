import { useSelector } from 'react-redux';

import { initialStateType } from '../../Redux/form-reducer';
import { AppRootStateType } from '../../Redux/store';
import styles from './Preview.module.css';

const Preview: React.FC = () => {
  const data = useSelector<AppRootStateType, initialStateType>(state => state.form);

  function plural(number: any, titles: string[]) {
    const cases = [2, 0, 1, 1, 1, 2];
    return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
  };

  const declension = ['год', 'года', 'лет'];

  return (
    <div className={styles.wrapper}>
      <div className={styles.personalData__container}>
        <p>Персональные данные</p>
        <span>
          {
            data.personAge &&
            data.personName + ', ' + data.personAge + ' ' + plural(data.personAge, declension)
          }
        </span>
      </div>
      <div className={styles.childData__container}>
        { data.childrenData.length > 0 && <p>Дети</p> }
        {
          data.childrenData.length > 0 &&
          data.childrenData.map((child, index) => (
            <div className={styles.childData} key={index}>
              <span>
                {
                  child.name + ', ' + child.age + ' ' + plural(child.age, declension)
                }
              </span>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Preview;
