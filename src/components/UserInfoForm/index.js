import { Field, Form, Formik } from 'formik';
import { USER_SCHEMA } from '../../utils/validationSchemas';

function UserInfoForm () {
  // начальные значения состояния формы
  const initialValues = { firstName: '', lastName: '', age: null };

  // обработчик для отправки формы
  const handleSubmit = (values, formikBag) => {
    console.log('values', values);
  };

  // обязательные пропы Formik - initialValues, onSubmit
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {formikProps => {
        console.log('formikProps', formikProps);

        return (
          <>
            {/* <form onSubmit={formikProps.handleSubmit}></form> */}
            <Form>
              {/* <input
                type='text'
                name='firstName'
                placeholder='Firstname'
                value={formikProps.values.firstName}
                onChange={formikProps.handleChange}
                autoFocus
              /> */}
              <Field
                type='text'
                name='firstName'
                placeholder='Firstname'
                autoFocus
              />
              <button type='submit'>Save</button>
            </Form>
          </>
        );
      }}
    </Formik>
  );
}

export default UserInfoForm;
