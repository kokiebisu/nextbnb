import React, { useState } from 'react';
import { useFormik } from 'formik';
import Router from 'next/router';

/**
 * Contexts
 */
import { useAuthDispatch, useAuthState } from '../../../context/auth';

/**
 * Styles
 */
import space from '../../../styles/space.module.scss';
import font from '../../../styles/font.module.scss';
import layout from '../../../styles/layout.module.scss';

/**
 * Components
 */
import { Input } from '../../atoms/input/input.component';
import { Button } from '../../atoms/button/button.component';
import { Bullet } from '../../atoms/bullet/bullet.component';
import { Animation } from '../../animation/animation.component';
import { Card } from '../../atoms/card/card.component';

/**
 * Props
 */
import { LoginTemplateProps } from './props';

/**
 * Helper
 */
import { validateLogin as validate } from '../../../helper/auth';

/**
 * Hooks
 */
import { useLockBodyScroll } from '../../../hooks/useLockBodyScroll';
import { useFetch } from '../../../hooks/useFetch';

/**
 * Renders the login template component
 */
export const LoginTemplate: React.FC<LoginTemplateProps> = () => {
  useLockBodyScroll();
  const authState = useAuthState();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('pending');
  const authDispatch = useAuthDispatch();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validate,
    onSubmit: (values) => {
      const doFetch = useFetch({
        url: '/api/users/signin',
        method: 'post',
        body: values,
        triggerLoading(state) {
          setLoading(state);
        },
        onSuccess() {
          Router.reload();
        },
        onFail() {
          setStatus('fail');
        },
      });
      doFetch();
    },
  });

  const switchAuth = () => {
    if (authState.title === 'Log in') {
      return authDispatch({ type: 'auth_signup' });
    }
    return authDispatch({ type: 'auth_login' });
  };

  const switchBack = () => {
    return authDispatch({ type: 'auth_login' });
  };

  const redirectTo = () => {
    return authDispatch({ type: 'forgot_password' });
  };

  return (
    <div className={[space['p--24']].join(' ')}>
      {status === 'fail' && (
        <div className={[space['m-b--16']].join(' ')}>
          <Card type='again' />
        </div>
      )}
      <form onSubmit={formik.handleSubmit}>
        <div>
          <div>
            <Input
              type='email'
              direction='bottom'
              handleChange={formik.handleChange}
              value={formik.values.email}
              errors={formik.errors.email !== undefined}
            />
            <Input
              type='password'
              direction='top'
              handleChange={formik.handleChange}
              value={formik.values.password}
              errors={formik.errors.password !== undefined}
            />
          </div>
          <div>
            {formik.errors.email !== undefined && (
              <div className={[space['m-t--6']].join(' ')}>
                <Bullet type='required' message={formik.errors.email} />
              </div>
            )}
          </div>
          <div>
            {formik.errors.password !== undefined && (
              <div className={[space['m-t--6']].join(' ')}>
                <Bullet type='required' message={formik.errors.password} />
              </div>
            )}
          </div>
          {status === 'success' && (
            <div className={[space['m-t--16']].join(' ')}>
              <Card type='set' />
            </div>
          )}
        </div>
        <div className={[space['m-v--16']].join(' ')}>
          <Button type='primary' title='Log in' loading={loading} />
        </div>
        <div className={[space['m-v--16']].join(' ')}>
          <Button
            type='underline'
            title='Forgot password?'
            onPress={redirectTo}
          />
        </div>
        <div className={[space['m-v--16']].join(' ')}>
          <Button
            type='underline'
            title='More login options'
            onPress={switchBack}
          />
        </div>
        <div className={[layout['flex']].join(' ')}>
          <p className={[font['size--14'], space['m-r--8']].join(' ')}>
            Don't have an account?
          </p>
          <Button type='underline' title='Sign up' onPress={switchAuth} />
        </div>
      </form>
    </div>
  );
};
