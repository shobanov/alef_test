import { Field, FieldArray, Form } from 'formik';
import { DataType, InitialValuesType } from '../PersonalData/PersonalData';
import styles from './ChildList.module.css';

interface IChildList {
  initialValues: InitialValuesType;
  values: InitialValuesType;
};

const ChildList: React.FC<IChildList> = (props: IChildList) => {

  const removeChildHandler = (e: React.MouseEvent<HTMLButtonElement>, id: number, remove: (id: number) => void) => {
    e.preventDefault();
    remove(id);
  };

  return (
    <Form className={styles.childList}>
      {props.values.childrenData.length > 0 && <span>Дети (макс.5)</span>}
      <div>
        <FieldArray name="childrenData">
          {({ remove }) => (
            <div>
              {props.values.childrenData.length > 0 &&
                props.values.childrenData.map((_child: DataType, index: number) => (
                  <div className={styles.ChildlistItem}>
                    <div className={styles.input_section} key={index}>
                      <Field
                        type='text'
                        name={`childrenData.${index}.name`} />
                      <label>Имя</label>
                    </div>
                    <div className={styles.input_section}>
                      <Field
                        type='text'
                        name={`childrenData.${index}.age`} />
                      <label>Возраст</label>
                    </div>
                    <button onClick={(e) => removeChildHandler(e, index, remove)}>Удалить</button>
                  </div>
                ))}
            </div>
          )}
        </FieldArray>
      </div>
      <button className={styles.button} type="submit">Сохранить</button>
    </Form>
  );
};

export default ChildList;