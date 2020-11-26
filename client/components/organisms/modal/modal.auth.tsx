import React from 'react';
import { motion } from 'framer-motion';

/**
 * Styles
 */
import layout from '../../../styles/layout.module.scss';
import shape from '../../../styles/shape.module.scss';
import color from '../../../styles/color.module.scss';
import space from '../../../styles/space.module.scss';
import font from '../../../styles/font.module.scss';
import modal from './modal.module.scss';

/**
 * Components
 */
import { Button } from '../../../components/atoms/button/button.component';
import { Template } from '../../../components/templates/template.component';

/**
 * Props
 */
import { RegisterModalProps } from './props';

/**
 * Contexts
 */
import { useToggleDispatch } from '../../../context/toggle';
import { useAuthDispatch, useAuthState } from '../../../context/auth';

/**
 * Renders the auth modal
 */
export const AuthModal: React.FC<RegisterModalProps> = () => {
  const toggleDispatch = useToggleDispatch();
  const authDispatch = useAuthDispatch();
  const authState = useAuthState();

  const displayContent = () => {
    switch (authState.display) {
      case 'login':
        return <Template type='login' />;
      case 'signup':
        return <Template type='signup' />;
      case 'auth':
        return <Template type='auth' />;
      case 'forgot_password':
        return <Template type='forgotpassword' />;
      case 'exists':
        return <Template type='exists' />;
      default:
        return;
    }
  };

  const handleClose = () => {
    toggleDispatch({ type: 'close_register' });
  };

  const handlePrevious = () => {
    authDispatch({ type: 'auth_login' });
  };

  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial={{ y: 25 }}
      animate={{ y: 0 }}
      className={[
        modal['w__auth'],
        shape['shadow--lg'],
        shape['br--16'],
        color['bg--white__0'],
      ].join(' ')}>
      <div
        style={{ height: 60 }}
        className={[
          layout['items-center'],
          color['b-b--white__2'],
          space['p-h--24'],
        ].join(' ')}>
        <div className={[layout['relative'], shape['w--full']].join(' ')}>
          <div
            className={[
              layout['al--0'],
              layout['t---3'],
              color['bg--transparent'],
            ].join(' ')}>
            {authState.title === 'Forgot password' ? (
              <Button type='modal' modalType='back' onPress={handlePrevious} />
            ) : (
              <Button type='modal' modalType='close' onPress={handleClose} />
            )}
          </div>
          <div className={[layout['all-center']].join(' ')}>
            <h3 className={[font['size--16']].join(' ')}>{authState.title}</h3>
          </div>
        </div>
      </div>
      {displayContent()}
    </motion.div>
  );
};
