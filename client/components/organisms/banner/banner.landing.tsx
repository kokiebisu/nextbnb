import React from 'react';
import { motion } from 'framer-motion';

/**
 * Styles
 */
import layout from '../../../styles/layout.module.scss';
import index from '../../../styles/index.module.scss';
import space from '../../../styles/space.module.scss';
import shape from '../../../styles/shape.module.scss';
import font from '../../../styles/font.module.scss';
import color from '../../../styles/color.module.scss';

/**
 * Props
 */
import { LandingBannerProps } from './props';

/**
 * Components
 */
import { Header } from '../../../components/organisms/header/header.component';
import { Button } from '../../../components/atoms/button/button.component';

/**
 * Hooks
 */
import { useHandleScroll } from '../../../hooks/useHandleScroll';

/**
 * Renders the banner section
 */
export const LandingBanner: React.FC<LandingBannerProps> = ({ data }) => {
  const scrollPosition = useHandleScroll();
  return (
    <div className={index['banner']}>
      <div className={[layout['all-sides']].join(' ')}>
        <div className={index['banner__background--picture']}>
          <picture>
            <source
              srcSet='/img/background1200.webp'
              media='(min-width:1200px)'></source>
            <source
              srcSet='/img/background960.jpg'
              media='(min-width:960px)'></source>
            <source
              srcSet='/img/background720.jpg'
              media='(min-width:720px)'></source>
            <source
              srcSet='/img/background320.webp'
              media='(min-width:320px)'></source>
            <img src='/img/background_default.png' alt='background'></img>
          </picture>
        </div>
      </div>
      <div className={[layout['all-sides']].join(' ')}>
        <div
          className={[index['header__wrapper--md'], shape['h--full']].join(
            ' '
          )}>
          <div style={{ height: '100%' }}>
            <div
              className={[space['p-t--6'], layout['container--spread']].join(
                ' '
              )}>
              {scrollPosition > 56 ? (
                <motion.div
                  exit={{ opacity: 0 }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  style={{
                    left: 0,
                    right: 0,
                    position: 'fixed',
                    top: 0,
                    zIndex: 99999,
                    width: '100%',
                  }}>
                  <Header spread type='white' data={data} />
                </motion.div>
              ) : null}
              {scrollPosition > 56 ? (
                <div style={{ padding: '38px 0' }}></div>
              ) : (
                <Header type='transparent' data={data} />
              )}
            </div>
            <div className={[color['c--white__0']].join(' ')}></div>
            <div
              className={[
                layout['container--spread'],
                layout['z--20'],
                shape['h--75p'],
                index['flex__explore'],
              ].join(' ')}>
              <div className={[space['m-v--10'], space['m-h--0']].join(' ')}>
                <h3
                  className={[color['c--white__0'], font['size--28']].join(
                    ' '
                  )}>
                  Go Near
                </h3>
              </div>
              <div
                className={[
                  font['c--white__0'],
                  index['w__explore--subtitle'],
                  index['text__explore--subtitle'],
                ].join(' ')}>
                <p
                  className={[
                    index['size__explore--subtitle'],
                    font['weight--300'],
                    font['ls--3'],
                    color['c--white__0'],
                  ].join(' ')}>
                  Settle in somewhere new. Discover nearby stays to live, work,
                  or just relax.
                </p>
              </div>
              <div
                className={[
                  space['m-v--15'],
                  space['m-h--0'],
                  index['justify__explore--button'],
                ].join(' ')}>
                <Button type='banner' title='Explore nearby' to='/' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
