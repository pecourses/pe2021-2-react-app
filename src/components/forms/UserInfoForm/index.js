import { Form, Formik } from 'formik';
import { USER_SCHEMA } from '../../../utils/validationSchemas';
import Input from '../Input';
import styles from './UserInfoForm.module.scss';

function UserInfoForm () {
  // начальные значения состояния формы
  const initialValues = { firstName: '', age: '' };

  const classes = {
    input: styles.input,
    valid: styles.valid,
    invalid: styles.invalid,
    error: styles.error,
  };

  // обработчик для отправки формы
  const handleSubmit = (values, formikBag) => {
    console.log('Sending form...');
    formikBag.resetForm();
  };

  // обязательные пропы Formik - initialValues, onSubmit
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={USER_SCHEMA}
    >
      <Form className={styles.form}>
        <Input
          label='First name:'
          type='text'
          name='firstName'
          placeholder='Firstname'
          autoFocus
          classes={classes}
        />
        <Input
          label='Age:'
          name='age'
          type='text'
          placeholder='25'
          classes={classes}
        />

        <button type='submit'>Save</button>
      </Form>
    </Formik>
  );
}

export default UserInfoForm;
