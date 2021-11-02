import styles from './PersonalData.module.css';
import plus from '../../img/plus.svg';
import { v4 } from 'uuid';
import { addChildAC } from '../../Redux/form-reducer';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import ChildList from '../ChildList/ChildList';
import { Field, Form, Formik } from 'formik';

const PersonalData: React.FC = () => {

  const [isPushedAddButton, setIsPushedAddButton] = useState(false)

  const initialValues = [
    {
      name: '',
      age: '',
    },
  ];

  const addButtonHandler = () => {
    setIsPushedAddButton(true)
  };

  function onSubmit(values: any) {
    console.log(values)
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(values, null, 4));
  }

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      <div className={styles.pesonalData_container}>
        <div className={styles.pesonalData}>
          <span>Персональные данные</span>
          <Form>
            <div className={styles.pesonalData__input_section}>
              <Field
                type='text'
                name='name'
              />
              <label>Имя</label>
            </div>
            <div className={styles.pesonalData__input_section}>
              <Field
                type='text'
                name='age'
              />
              <label>Возраст</label>
            </div>
          </Form>
        </div>
        <div className={styles.addChild__button_container}>
          <img src={plus} alt="plus" />
          <button onClick={addButtonHandler}>Добавить ребёнка</button>
        </div>
        {isPushedAddButton && <ChildList />}
      </div>
    </Formik>
  );
};

export default PersonalData;