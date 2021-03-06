import classNames from 'classnames';
import React, { Component } from 'react';
import styles from './LoginForm.module.scss';

const INITIAL_VALUES = { email: '', password: '' };
const EMAIL_REG_EXPR = /^\S{5,60}$/;

class LoginForm extends Component {
  constructor (props) {
    super(props);

    /* реакт-компонент берет на себя ответственость
    за состоянием полей интерактивных элементов
    
    состояние -> input.value -event-> состояние
       ^                                 |
       |                                 |
        ---------------------------------
    */
    this.state = {
      email: '',
      isEmailValid: false,
      password: '',
      isPasswordValid: false,
    };
  }

  handleEmailChange = ({ target: { value } }) => {
    this.setState({
      email: value,
      isEmailValid: EMAIL_REG_EXPR.test(value),
    });
  };

  handlePasswordChange = ({ target: { value } }) => {
    this.setState({ password: value });
  };

  // handleChange = ({ target: { name, value } }) => {
  //   this.setState({ [name]: value });
  // };

  handleSubmit = e => {
    e.preventDefault();
    this.setState(INITIAL_VALUES);
  };

  // добавить поле для пароля
  render () {
    const { email, password, isEmailValid } = this.state;
    // const emailClassNames = `${styles.input} ${
    //   isEmailValid ? styles.inputValid : styles.inputInvalid
    // }`;
    const emailClassNames = classNames(styles.input, {
      [styles.inputValid]: isEmailValid,
      [styles.inputInvalid]: !isEmailValid,
    });

    return (
      <form className={styles.formContainer} onSubmit={this.handleSubmit}>
        <label className={styles.label}>
          <span>Email</span>
          <input
            className={emailClassNames}
            value={email}
            onChange={this.handleEmailChange}
            type='email'
            name='email'
            placeholder='email'
            autoFocus
          />
        </label>
        <label className={styles.label}>
          <span>Password</span>
          <input
            className={styles.input}
            value={password}
            onChange={this.handlePasswordChange}
            type='password'
            name='password'
            placeholder='password'
          />
        </label>
        <button type='submit'>Login</button>
      </form>
    );
  }
}

export default LoginForm;
