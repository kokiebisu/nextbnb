import React from 'react';

/**
 * Components
 */
import { DetailsHeader } from './header.details';
import { ExperiencesHeader } from './header.experiences';
import { HomesHeader } from './header.homes';
import { OnlineHostHeader } from './header.onlinehost';
import { TransparentHeader } from './header.transparent';
import { WhiteHeader } from './header.white';
import { HeaderProps } from './props';

interface mapProps {
  [key: string]: JSX.Element;
}

/**
 * Bundles the header components
 * @param {string} extendsTo - Add custom styling to the specified component
 * @param {string} type - Specifies the type of header component
 */
export const Header: React.FC<HeaderProps> = ({
  type,
  extendsTo,
  ...props
}) => {
  const types: mapProps = {
    transparent: <TransparentHeader {...props} />,
    white: <WhiteHeader {...props} />,
    details: <DetailsHeader {...props} />,
    homes: <HomesHeader {...props} />,
    experiences: <ExperiencesHeader {...props} />,
    onlinehost: <OnlineHostHeader {...props} />,
  };
  return <div className={extendsTo}>{types[type]}</div>;
};
