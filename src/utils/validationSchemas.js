import * as yup from 'yup';

export const USER_SCHEMA = yup.object({
  firstName: yup
    .string()
    .trim()
    .min(2)
    .max(60)
    .matches(/^[A-Z][a-z]*$/, 'First name must started with capital letter ...')
    .required(),
  age: yup
    .number()
    .min(0)
    .max(130)
    .integer()
    .required(),
});

// const user = { firstName: 'Test', age: 65 };

// 1 schema.isValid(Sync) => true/false
// const isUserValid = USER_SCHEMA.isValidSync(user);
// console.log('isUserValid', isUserValid);

// 2 schema.validate(Sync) => value/error
// try {
//   const validatingUser = USER_SCHEMA.validateSync(user);
//   console.log('validatingUser', validatingUser);
// } catch (e) {
//   console.error(e);
// }

// USER_SCHEMA.validate(user)
//   .then(validatingUser =>
//     console.log('validatingUser from then', validatingUser)
//   )
//   .catch(e => console.error(e));

// console.log('final');
