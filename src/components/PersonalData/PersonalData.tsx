import { Field, FieldArray, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';

import { initialState, initialStateType, saveDataAC } from '../../Redux/form-reducer';
import ChildList from '../ChildList/ChildList';
import plus from '../../img/plus.svg';
import styles from './PersonalData.module.css';

const DataValidationSchema = Yup.object().shape({
  personName: Yup.string()
    .min(2, 'Имя слишком короткое')
    .max(50, 'Имя слишком длинное')
    .required('Необходимо указать имя'),
  personAge: Yup.number()
    .required('Необходимо указать возраст')
    .integer('Возраст должен быть целым числом')
    .min(1, 'Введите корректный возраст')
    .max(110, 'Введите корректный возраст'),
  childrenData: Yup.array()
  .of(
    Yup.object().shape({
      name: Yup.string()
      .min(2, 'Имя слишком короткое')
      .max(50, 'Имя слишком длинное')
      .required('Необходимо указать имя'),
      age: Yup.number()
        .required('Необходимо указать возраст')
        .integer('Возраст должен быть целым числом')
        .min(1, 'Введите корректный возраст')
        .max(95, 'Введите корректный возраст'),
    })
  ),
});

const PersonalData: React.FC = () => {
  const dispatch = useDispatch();
  
  function onSubmit(values: initialStateType) {
    dispatch(saveDataAC(values));
  };

  return (
    <Formik initialValues={initialState} onSubmit={onSubmit} validationSchema={DataValidationSchema}>
      {({ values, errors, touched  }) => (
        <div className={styles.pesonalData_container}>
          <div className={styles.pesonalData}>
            <span>Персональные данные</span>
            <Form>
              <div className={styles.pesonalData__input_section}>
                <Field
                  type='text'
                  name='personName'
                />
                {
                  errors.personName && touched.personName ? (
                    <p>{errors.personName}</p>
                  ) : null
                }
              <label>Имя</label>
              </div>
              <div className={styles.pesonalData__input_section}>
                <Field
                  type='number'
                  name='personAge'
                  onKeyDown={ (evt: React.KeyboardEvent) => evt.key === 'e' && evt.preventDefault() }
                />
                {
                  errors.personAge && touched.personAge ? (
                    <p>{ errors.personAge }</p>
                  ) : null
                }
                <label>Возраст</label>
              </div>
            </Form>
          </div>
          <div className={styles.addChild__button_container}>
            { values.childrenData.length < 5 && <img src={plus} alt="plus" /> }
            <FieldArray name="childrenData">
              {({ push }) => (
              values.childrenData.length < 5 && <button onClick={() => push({ name: '', age: '' })}>Добавить ребёнка</button>  
              )}
            </FieldArray>
          </div>
          <ChildList />
        </div>
      )}
    </Formik>
  );
};

export default PersonalData;