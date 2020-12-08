import React from 'react';
import { Form as FinalForm } from 'react-final-form';
import { Button, Form, Logo, Text } from '@gpn-prototypes/vega-ui';

import { useSnackbar } from '../../../../platform';
import { TextField } from '../../../core';
import { createValidate, validators } from '../../../forms/validation';

import { cnAuthForm } from './cn-auth-form';
import { GazpromLogo } from './GazpromLogo';

import './AuthForm.css';

export type State = {
  login: string;
  password: string;
};

export type AuthFormProps = {
  onLogin: (state: State) => Promise<void>;
  isFetching?: boolean;
  containerClassName?: string;
  formClassName?: string;
};

const validator = createValidate<Partial<State>>({
  login: [validators.required(), validators.email()],
  password: [validators.required()],
});

type ValidateMap = ReturnType<typeof validator>;
const testId = {
  form: 'AuthForm:form',
  loginInput: 'AuthForm:loginInput',
  passwordInput: 'AuthForm:passwordInput',
  submit: 'AuthForm:submit',
};

type AuthFormComponent = React.FC<AuthFormProps> & {
  testID: typeof testId;
};

type Error = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
};

const authErrorMessage =
  'Неверный e-mail или пароль. Проверьте введенные данные и повторите попытку.';

export const AuthForm: AuthFormComponent = (props) => {
  const { onLogin, isFetching, containerClassName, formClassName } = props;
  const snackbar = useSnackbar();

  const handleAuthSubmit = (values: State): void => {
    onLogin(values).catch((error: Error) => {
      const key = `${error.code}-alert`;
      const message = error.code === 'AUTH_ERROR' ? authErrorMessage : error.message;

      snackbar.addItem({
        key,
        message,
        status: 'alert',
        onClose: () => {
          snackbar.removeItem(key);
        },
      });
    });
  };

  const validate = (values: State): ValidateMap => validator(values);

  return (
    <div className={cnAuthForm.mix(containerClassName)}>
      <div className={cnAuthForm('GazpromLogo')}>
        <GazpromLogo />
      </div>
      <FinalForm onSubmit={handleAuthSubmit} validate={validate}>
        {({ handleSubmit }): React.ReactNode => (
          <Form
            noValidate
            onSubmit={handleSubmit}
            data-testid={testId.form}
            className={cnAuthForm('Form').mix(formClassName)}
          >
            <Logo className={cnAuthForm('Logo')} />
            <Form.Row>
              <Form.Field>
                <Form.Label htmlFor="login" space="xs">
                  <Text size="l" lineHeight="s" view="secondary">
                    E-mail
                  </Text>
                </Form.Label>
                <TextField
                  name="login"
                  id="login"
                  type="email"
                  size="l"
                  data-testid={testId.loginInput}
                  width="full"
                  maxLength={128}
                  validateOnTouched
                />
              </Form.Field>
            </Form.Row>
            <Form.Row space="m">
              <Form.Field>
                <Form.Label htmlFor="password" space="xs">
                  <Text size="l" lineHeight="s" view="secondary">
                    Пароль
                  </Text>
                </Form.Label>
                <TextField
                  id="password"
                  type="password"
                  name="password"
                  size="l"
                  width="full"
                  data-testid={testId.passwordInput}
                  maxLength={200}
                  validateOnTouched
                />
              </Form.Field>
            </Form.Row>
            <Form.Row space="xl">
              <Button
                data-testid={testId.submit}
                loading={isFetching}
                label="Войти"
                size="l"
                width="full"
              />
            </Form.Row>
            <Form.Row className={cnAuthForm('Desc')}>
              <Text size="s" lineHeight="xs" view="secondary">
                Если вы забыли пароль, обратитесь в&nbsp;
                <a
                  href="mailto:support@vegaspace.tk"
                  className={cnAuthForm('Link')}
                  target="_blank"
                  rel="noreferrer"
                >
                  Службу&nbsp;технической поддержки
                </a>
              </Text>
            </Form.Row>
          </Form>
        )}
      </FinalForm>
    </div>
  );
};

AuthForm.testID = testId;
