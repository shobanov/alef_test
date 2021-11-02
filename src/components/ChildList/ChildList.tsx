import { FieldProps, Form, Formik, useFormik } from 'formik';
import { FormEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ChildrenDataType, InitialStateType, saveChildrenDataAC } from '../../Redux/form-reducer';
import { AppRootStateType } from '../../Redux/store';
import ChildListItem from '../ChildListItem/ChildListItem';
import styles from './ChildList.module.css';

const ChildList: React.FC = () => {
  const dispatch = useDispatch();
  const childData = useSelector<AppRootStateType, ChildrenDataType[]>(state => state.form.childrenData);

  const initialValues = [
    {
      name: '',
      age: '',
    },
  ];
  
  function onSubmit(values: any) {
    console.log(values)
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(values, null, 4));
  }

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>  
      <Form className={styles.childList}>
        <span>Дети (макс.5)</span>
        <div>
          {
            childData.map((item, index) => (
              <ChildListItem key={item.id} {...item} index={index} />
            ))
          }
        </div>
        <button className={styles.button} type="submit">Сохранить</button>
      </Form>
    </Formik>
  )
}

export default ChildList;