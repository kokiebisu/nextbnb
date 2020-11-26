import React from 'react';
import { useFormik } from 'formik';

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

/**
 * Props
 */
import { ForgotPasswordTemplateProps } from './props';

/**
 * Helper
 */
import { validateForgotPassword as validate } from '../../../helper/auth';

/**
 * Hooks
 */
import { useLockBodyScroll } from '../../../hooks/useLockBodyScroll';

/**
 * Renders the login template component
 */
export const ForgotPasswordTemplate: React.FC<ForgotPasswordTemplateProps> = () => {
  useLockBodyScroll();
  const authState = useAuthState();
  const authDispatch = useAuthDispatch();

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      formik.resetForm();
    },
  });

  return (
    <div className={[space['p--24']].join(' ')}>
      <form onSubmit={formik.handleSubmit}>
        <div
          style={{ height: 300 }}
          className={[
            layout['flex'],
            layout['flex-col'],
            layout['justify-between'],
          ].join(' ')}>
          <div>
            <div className={[space['m-b--16']].join(' ')}>
              <p>
                Enter the email address associated with your account, and we’ll
                email you a link to reset your password.
              </p>
            </div>
            <div>
              <div>
                <Input
                  type='email'
                  handleChange={formik.handleChange}
                  value={formik.values.email}
                  errors={formik.errors.email !== undefined}
                />
              </div>
              <div>
                {formik.errors.email !== undefined && (
                  <div className={[space['m-t--6']].join(' ')}>
                    <Bullet type='required' message={formik.errors.email} />
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className={[].join(' ')}>
            <Button
              size='md'
              type='primary'
              fill='black'
              title='Send reset link'
            />
          </div>
        </div>
      </form>
    </div>
  );
};
