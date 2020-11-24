import React from 'react';
import { Global, Home, Lightening } from '../../../public/svg/original';
import { OnlineHostBulletProps } from './props';
import space from '../../../styles/space.module.scss';
import font from '../../../styles/font.module.scss';

export const OnlineHostBullet: React.FC<OnlineHostBulletProps> = ({
  bullet = 'home',
}) => {
  const types = {
    home: {
      icon: <Home />,
      title: 'Host from home',
      description: 'Share your expertise and a window to your world',
    },
    global: {
      icon: <Global />,
      title: 'Meet global guests',
      description: 'Make the world feel a little smaller and a lot friendlier.',
    },
    business: {
      icon: <Lightening />,
      title: 'Build a business',
      description:
        'Earn money doing something you love with support from Airbnb.',
    },
  };
  return (
    <div>
      <div>{types[bullet].icon}</div>
      <div className={[space['m-v--16']].join(' ')}>
        <h3>{types[bullet].title}</h3>
      </div>
      <div className={[font['size--14']].join(' ')}>
        <p>{types[bullet].description}</p>
      </div>
    </div>
  );
};
