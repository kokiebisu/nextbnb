import React from 'react';
import { motion } from 'framer-motion';

/**
 * Styles
 */
import shape from '../../../styles/shape.module.scss';
import color from '../../../styles/color.module.scss';
import layout from '../../../styles/layout.module.scss';

/**
 * Components
 */
import { Button } from '../../../components/atoms/button/button.component';

/**
 * Props
 */
import { MenuModalProps } from './props';
import useOnClickOutside from '../../../hooks/useOnClickOutside';
import { useToggleDispatch } from '../../../context/toggle';

/**
 * Renders the menu modal
 * @param refProp
 */
export const MenuModal: React.FC<MenuModalProps> = ({
  refProp,
  authenticated = false,
}) => {
  const toggleDispatch = useToggleDispatch();
  useOnClickOutside(refProp, () => toggleDispatch({ type: 'toggle_menu' }));
  return (
    <motion.div
      ref={refProp}
      exit={{ opacity: 0 }}
      className={[
        shape['br--15'],
        shape['shadow--lg'],
        layout['items-center'],
        color['bg--white__0'],
      ].join(' ')}
      style={{ width: 230, height: authenticated ? 420 : 230 }}>
      <div className={[shape['w--inherit']].join(' ')}>
        {authenticated ? (
          <>
            <div>
              <Button type='option' option='messages' bold />
            </div>
            <div>
              <Button type='option' option='notifications' bold />
            </div>
            <div>
              <Button type='option' option='trips' bold />
            </div>
            <div>
              <Button type='option' option='saved' bold />
            </div>
          </>
        ) : (
          <>
            <div>
              <Button type='option' option='signup' bold />
            </div>
            <div>
              <Button type='option' option='login' />
            </div>
          </>
        )}
        <div
          style={{
            width: '100%',
            height: 1,
            backgroundColor: 'lightgray',
            margin: '6px 0',
          }}></div>
        {authenticated ? (
          <div>
            <div>
              <Button to='/host/homes' type='option' option='home'>
                Host your home
              </Button>
            </div>
            <div>
              <Button type='option' option='experience' />
            </div>
            <div>
              <Button type='option' option='refer' />
            </div>
            <div>
              <Button type='option' option='account' />
            </div>
          </div>
        ) : (
          <div>
            <div>
              <Button type='option' option='home' />
            </div>
            <div>
              <Button type='option' option='experience' />
            </div>
            <div>
              <Button type='option' option='help' />
            </div>
          </div>
        )}
        {authenticated && (
          <>
            <div
              style={{
                width: '100%',
                height: 1,
                backgroundColor: 'lightgray',
                margin: '6px 0',
              }}></div>
            <div>
              <div>
                <Button type='option' option='help' />
              </div>
              <div>
                <Button type='option' option='logout' />
              </div>
            </div>
          </>
        )}
      </div>
    </motion.div>
  );
};
