import React from 'react';
import { OnlineHostBannerProps } from './props';
import layout from '../../../styles/layout.module.scss';
import { Button } from '../../../components/atoms/button/button.component';
import font from '../../../styles/font.module.scss';
import color from '../../../styles/color.module.scss';
import space from '../../../styles/space.module.scss';
import banner from './banner.module.scss';
import { Bullet } from '../../../components/atoms/bullet/bullet.component';

export const OnlineHostBanner: React.FC<OnlineHostBannerProps> = () => {
  const bullets = ['home', 'global', 'business'];
  return (
    <div
      className={[
        layout['flex'],
        layout['flex-col'],
        layout['items-center'],
      ].join(' ')}>
      <div className={[space['m-v--16']].join(' ')}>
        <h3 className={[font['size--11'], color['c--gray__2']].join(' ')}>
          AIRBNB EXPERIENCES
        </h3>
      </div>
      <div className={[space['m-b--16']].join(' ')}>
        <h2 className={[font['size--47'], color['c--']].join(' ')}>
          Host an online experience
        </h2>
      </div>
      <div
        className={[
          space['m-v--16'],
          banner['w__onlinehost--subtitle'],
          banner['text__onlinehost--subtitle'],
        ].join(' ')}>
        <h4 className={[font['size--20'], color['c--gray__1']].join(' ')}>
          Join a commmunity of hosts bringing the world together in a whole new
          way.
        </h4>
      </div>
      <div className={[space['m-v--40']].join(' ')}>
        <Button type='primary' title='Get started' />
      </div>
      <div className={[space['m-v--32']].join(' ')}>
        <img
          src='https://a0.muscache.com/pictures/4bab4990-eda1-4b94-996e-0940464575b7.jpg'
          alt='banner image'
        />
      </div>
      <div
        className={[
          space['m-v--45'],
          banner['w__onlinehost--explanation'],
          banner['text__onlinehost--explanation'],
        ].join(' ')}>
        <h4 className={[font['size--20'], color['c--gray__1']].join(' ')}>
          Airbnb Experiences are engaging activities designed by locals that go
          beyond the typical tour or class. And now you can host them for
          anyone, from anywhere.
        </h4>
      </div>
      <div
        className={[
          space['m-v--16'],
          banner['display__onlinehost--points'],
        ].join(' ')}>
        {bullets.map((bullet, index) => {
          return (
            <div key={index} className={[space['m-b--16']].join(' ')}>
              <Bullet type='onlinehost' bullet={bullet} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
