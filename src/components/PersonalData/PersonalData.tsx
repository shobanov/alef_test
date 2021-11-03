import styles from './PersonalData.module.css';
import plus from '../../img/plus.svg';
import ChildList from '../ChildList/ChildList';
import { Field, FieldArray, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { saveDataAC } from '../../Redux/form-reducer';

export type DataType = {
  name: string;
  age: string;
};

export type InitialValuesType = {
  personName: string;
  personAge: string;
  childrenData: DataType[];
};

const PersonalData: React.FC = () => {

  const dispatch = useDispatch();

  const initialValues = {
    personName: '',
    personAge: '',
    childrenData: []
  };

  function onSubmit(values: InitialValuesType) {
    dispatch(saveDataAC(values));
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ values }) => (
        <div className={styles.pesonalData_container}>
          <div className={styles.pesonalData}>
            <span>Персональные данные</span>
            <Form>
              <div className={styles.pesonalData__input_section}>
                <Field
                  type='text'
                  name='personName'
                />
                <label>Имя</label>
              </div><div className={styles.pesonalData__input_section}>
                <Field
                  type='text'
                  name='personAge'
                />
                <label>Возраст</label>
              </div>
            </Form>
          </div>
          <div className={styles.addChild__button_container}>
            {values.childrenData.length < 5 && <img src={plus} alt="plus" />}
            <FieldArray name="childrenData">
              {({ push }) => (
               values.childrenData.length < 5 && <button onClick={() => push({ name: '', age: '' })}>Добавить ребёнка</button>
              )}
            </FieldArray>
          </div>
          <ChildList initialValues={initialValues} values={values} />
        </div>
      )}
    </Formik>
  );
};

export default PersonalData;