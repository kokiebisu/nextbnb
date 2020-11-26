import React from 'react';

/**
 * Styles
 */
import color from '../../../styles/color.module.scss';
import font from '../../../styles/font.module.scss';
import space from '../../../styles/space.module.scss';
import layout from '../../../styles/layout.module.scss';

/**
 * Vectors
 */
import {
  Calendar,
  Devices,
  Door,
  Guidelines,
  House,
  Language,
  People,
  Sparkle,
  Time,
} from '../../../public/svg/original';

/**
 * Props
 */
import { CharacteristicBulletProps } from './props';

/**
 * Helpers
 */
import * as Helper from '../../../helper/time';

/**
 * Renders the characteristic bullet
 * @param {string} characteristic - Type of characteristics
 * @param {number} time - Time it takes for the experience
 * @param {string[]} devices - Devices allowed for the experience
 * @param {number} people - Number of people that can join
 * @param {group} group - Number of people that can join a private group
 * @param {string[]} languages - Languages the host can speak
 */
export const CharacteristicBullet: React.FC<CharacteristicBulletProps> = ({
  characteristic = 'house',
  time = 60,
  devices = ['computer', 'smartphone'],
  people = 10,
  group = 100,
  languages = ['English', 'Chinese'],
}) => {
  const characteristics = {
    house: {
      icon: <House width={24} />,
      title: 'Entire home',
      description: 'You’ll have the farm stay to yourself.',
    },
    sparkle: {
      icon: <Sparkle width={24} />,
      title: 'Enhanced Clean',
      description:
        "This host committed to Airbnb's 5-step enhanced cleaning process.",
    },
    door: {
      icon: <Door width={24} />,
      title: 'Self check-in',
      description: 'You can check in with the doorman.',
    },
    calendar: {
      icon: <Calendar width={24} />,
      title: 'Cancellation policy',
      description:
        'Add your trip dates to get the cancellation details for this stay.',
    },
    guidelines: {
      icon: <Guidelines width={24} />,
      title: 'House rules',
      description: 'The host doesn’t allow pets, parties, or smoking.',
    },
    time: {
      icon: <Time width={32} />,
      title: Helper.displayDuration(time),
    },
    devices: {
      icon: <Devices width={32} />,
      title: `Join from your ${devices}`,
    },
    people: {
      icon: <People width={32} />,
      title: `Up to ${people} people. Private groups available for up to ${group}`,
    },
    language: {
      icon: <Language width={32} />,
      title: `Hosted in ${languages} (Simplified)`,
    },
  };

  return (
    <div
      className={[
        layout['flex'],
        space['m-v--8'],
        layout['items-center'],
        space['p-r--8'],
      ].join(' ')}>
      <div className={[space['m-r--14']].join(' ')}>
        {characteristics[characteristic].icon}
      </div>
      <div>
        {characteristics[characteristic].description ? (
          <h3
            style={{ letterSpacing: 0.3 }}
            className={[
              space['m-b--4'],
              color['c--gray__3'],
              font['size--16'],
              font['weight--500'],
            ].join(' ')}>
            {characteristics[characteristic].title}
          </h3>
        ) : (
          <p>{characteristics[characteristic].title}</p>
        )}
        {characteristics[characteristic].description && (
          <p
            className={[
              color['c--gray__1'],
              font['weight--100'],
              font['size--14'],
            ].join(' ')}>
            {characteristics[characteristic].description}
          </p>
        )}
      </div>
    </div>
  );
};
