import { Formik, Form, Field } from 'formik';
import React, { useState } from 'react';
// npm i @mui/material @emotion/react @emotion/styled
// npm i @mui/icons-material
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const tasksDB = [
  {
    id: Date.now(),
    body: 'First task',
    isDone: false,
  },
];

function TodoPage () {
  const [tasks, setTasks] = useState(tasksDB);

  const addTask = (values, formikBag) => {
    const newTask = {
      id: Date.now(),
      body: values.body,
      isDone: false,
    };
    setTasks([...tasks, newTask]);
    formikBag.resetForm();
  };

  return (
    <div>
      <Formik initialValues={{ body: '' }} onSubmit={addTask}>
        {formikProps => (
          <Form>
            <Field name='body' />
            <button type='submit'>Add Task</button>
          </Form>
        )}
      </Formik>
      <ul>
        {tasks.map(t => (
          <>
            <li key={t.id}>
              {JSON.stringify(t)}
              <DeleteOutlineIcon
                onClick={() => {
                  setTasks(tasks.filter(task => t.id !== task.id));
                }}
              />
            </li>
          </>
        ))}
      </ul>
    </div>
  );
}

export default TodoPage;
