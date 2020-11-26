import React from 'react';
import Router from 'next/router';

/** Styles */
import shape from '../../../styles/shape.module.scss';
import font from '../../../styles/font.module.scss';
import color from '../../../styles/color.module.scss';
import space from '../../../styles/space.module.scss';
import layout from '../../../styles/layout.module.scss';
import animation from '../../../styles/animation.module.scss';

/** Props */
import { OptionButtonProps } from './props';

/** Contexts */
import { useToggleDispatch } from '../../../context/toggle';
import { useAuthDispatch } from '../../../context/auth';

/** Hooks */
import { useFetch } from '../../../hooks/useFetch';

/**
 * Renders the option button components
 * @param {string} options - Type of option button
 * @param {boolean} bold - Whether if the option button is styled bold
 */
export const OptionButton: React.FC<OptionButtonProps> = ({
  option = 'signup',
  bold = false,
}) => {
  const toggleDispatch = useToggleDispatch();
  const authDispatch = useAuthDispatch();
  const categories = {
    messages: {
      name: 'Messages',
      handleClick: () => {
        alert('messages button clicked');
      },
    },
    notifications: {
      name: 'Notifications',
      handleClick: () => {
        alert('notifications button clicked');
      },
    },
    trips: {
      name: 'Trips',
      handleClick: () => {
        alert('trips button clicked');
      },
    },
    saved: {
      name: 'Saved',
      handleClick: () => {
        alert('saved button clicked');
      },
    },
    refer: {
      name: 'Refer a host',
      handleClick: () => {
        alert('refer button clicked');
      },
    },
    account: {
      name: 'Account',
      handleClick: () => {
        alert('account button clicked');
      },
    },
    signup: {
      name: 'Sign up',
      handleClick: () => {
        authDispatch({ type: 'auth_signup' });
        toggleDispatch({ type: 'toggle_auth' });
      },
    },
    login: {
      name: 'Log in',
      handleClick: () => {
        authDispatch({ type: 'auth_login' });
        toggleDispatch({ type: 'toggle_auth' });
      },
    },
    home: {
      name: 'Host your home',
      handleClick: () => {
        Router.push('/host/homes');
      },
    },
    experience: {
      name: 'Host an experience',
      handleClick: () => {
        Router.push('/host/experiences');
      },
    },
    help: {
      name: 'Help',
      handleClick: () => {
        alert('help button clicked');
      },
    },
    logout: {
      name: 'Logout',
      handleClick: async () => {
        const doFetch = useFetch({
          url: '/api/users/signout',
          method: 'post',
          body: {},
          onSuccess: () => Router.reload(),
        });
        await doFetch();
      },
    },
  };
  return (
    <button
      onClick={categories[option].handleClick}
      className={`${[
        shape['w--full'],
        font['text--left'],
        font['size--13'],
        color['bg--white__0'],
        space['p-h--14'],
        space['p-v--10'],
        layout['block'],
        animation['hover-background--white__1'],
      ].join(' ')} ${
        bold ? [font['weight--500']].join(' ') : [font['weight--300']].join(' ')
      }`}>
      {categories[option].name}
    </button>
  );
};
