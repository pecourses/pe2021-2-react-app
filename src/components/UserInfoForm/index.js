import { ErrorMessage, Field, Form, Formik } from 'formik';
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
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={USER_SCHEMA}
    >
      {formikProps => {
        console.log('formikProps', formikProps);

        return (
          <>
            <Form>
              <Field
                type='text'
                name='firstName'
                placeholder='Firstname'
                autoFocus
              />
              {/* {formikProps.errors.firstName &&
                formikProps.touched.firstName && (
                  <span>{formikProps.errors.firstName}</span>
                )} */}
              <ErrorMessage name='firstName' />
              <button type='submit'>Save</button>
            </Form>
          </>
        );
      }}
    </Formik>
  );
}

export default UserInfoForm;
