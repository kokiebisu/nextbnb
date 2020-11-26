import React from 'react';
import { motion } from 'framer-motion';

/**
 * Styles
 */
import layout from '../../../styles/layout.module.scss';
import space from '../../../styles/space.module.scss';
import color from '../../../styles/color.module.scss';
import shape from '../../../styles/shape.module.scss';
import animation from '../../../styles/animation.module.scss';

/**
 * Vectors
 */
import { Avatar, Bars } from '../../../public/svg/original';

/**
 * Props
 */
import { MenuButtonProps } from './props';

/**
 * Contexts
 */
import { useToggleDispatch } from '../../../context/toggle';

/**
 * Renders the menu button components
 * @param {boolean} inverse - Whether if the button takes the inverse styling or not
 */
export const MenuButton: React.FC<MenuButtonProps> = ({
  inverse = false,
  authenticated = false,
  data = {
    imgUrl:
      'https://images.unsplash.com/photo-1562124638-724e13052daf?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8OTV8fGZhY2V8ZW58MHwyfDB8&auto=format&fit=crop&w=500&q=60',
  },
}) => {
  let toggleDispatch = useToggleDispatch();
  const triggerModal = () => {
    toggleDispatch({ type: 'toggle_menu' });
  };

  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      data-testid='button'
      className={`${[
        layout['items-center'],
        space['p-t--6'],
        space['p-b--6'],
        space['p-r--8'],
        space['p-l--10'],
        color['bg--white__0'],
        shape['br--30'],
        animation['hover-shadow--lg'],
      ].join(' ')} ${
        inverse
          ? [color['b--transparent']].join(' ')
          : [color['b--white__2']].join(' ')
      }`}
      onClick={triggerModal}>
      <div className={[space['m-r--12'], space['m-l--4']].join(' ')}>
        <Bars fill='black' width={12} />
      </div>
      <div>
        {authenticated && data ? (
          <img
            className={[shape['br--circle']].join(' ')}
            style={{ width: 30, verticalAlign: 'bottom' }}
            src={data.imgUrl}
          />
        ) : (
          <Avatar width={30} fill='gray' />
        )}
      </div>
    </motion.button>
  );
};
