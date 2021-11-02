import styles from './ChildListItem.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { AppRootStateType } from '../../Redux/store';
import { ChildrenDataType, removeChildAC } from '../../Redux/form-reducer';
import { FormEvent, useState } from 'react';
import { Field } from 'formik';

export interface IChildListItem {
  id: string;
  name: string;
  age: number;
  index: number;
};

const ChildListItem: React.FC<IChildListItem> = (props: IChildListItem) => {
  
  const childData = useSelector<AppRootStateType, ChildrenDataType[]>(state => state.form.childrenData);
  const dispatch = useDispatch();

  const removeButtonHandler = () => {
    const childListFiltered = childData.filter(item => item.id !== props.id)
    dispatch(removeChildAC(childListFiltered));
  };

  return (
    <div className={styles.ChildlistItem}>
      <div className={styles.input_section}>
        <Field
          type='text'
          name={`${props.index}.name`}
        />
        <label>Имя</label>
      </div>
      <div className={styles.input_section}>
        <Field
          type='text'
          name={`${props.index}.age`}
        />
        <label>Возраст</label>
      </div>
      <button onClick={removeButtonHandler}>Удалить</button>
    </div>
  );
};

export default ChildListItem;