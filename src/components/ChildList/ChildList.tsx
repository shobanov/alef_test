import { Field, FieldArray, Form, FormikErrors, useFormikContext } from 'formik';

import { DataType, initialStateType } from '../../Redux/form-reducer';
import styles from './ChildList.module.css';

const ChildList: React.FC = () => {
  const { errors, values, touched } = useFormikContext<initialStateType>();

  const removeChildHandler = (
    e: React.MouseEvent<HTMLButtonElement>,
    id: number,
    remove: (id: number) => void) => {
      e.preventDefault();
      remove(id);
  };

  return (
    <Form className={styles.childList}>
      { values.childrenData.length > 0 && <span>Дети (макс.5)</span> }
      <div>
        <FieldArray name="childrenData" validateOnChange>
          {({ remove }) => (
            <div>
              {values.childrenData.length > 0 &&
                values.childrenData.map((_child: DataType, index: number) => {
                  const childrenErrors = errors.childrenData as FormikErrors<DataType[]>;

                  return (
                  <div key={index} className={styles.ChildlistItem}>
                    <div className={styles.input_section} key={index}>
                      <Field
                        type='text'
                        name={`childrenData.${index}.name`}
                      />
                      { 
                        childrenErrors && touched.childrenData && touched.childrenData[index]?.name ? (
                          <p>{childrenErrors[index]?.name}</p>
                        ) : null 
                      }
                      <label>Имя</label>
                    </div>
                    <div className={styles.input_section}>
                      <Field
                        type='number'
                        onKeyDown={ (evt: React.KeyboardEvent) => evt.key === 'e' && evt.preventDefault() }
                        name={`childrenData.${index}.age`}
                      />
                      { 
                        childrenErrors && touched.childrenData && touched.childrenData[index]?.age ? (
                          <p>{childrenErrors[index]?.age}</p>
                        ) : null
                      }
                      <label>Возраст</label>
                    </div>
                    <button onClick={ (e) => removeChildHandler(e, index, remove) }>Удалить</button>
                  </div>
                )})}
            </div>
          )}
        </FieldArray>
      </div>
      <button className={styles.button} type="submit">Сохранить</button>
    </Form>
  );
};

export default ChildList;