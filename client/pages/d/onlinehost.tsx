import React from 'react';
import { Banner } from '../../components/organisms/banner/banner.component';
import { Header } from '../../components/organisms/header/header.component';
import { Section } from '../../components/organisms/section/section.component';
import layout from '../../styles/layout.module.scss';

const OnlineHost = () => {
  return (
    <div>
      <div>
        <Header type='onlinehost' />
      </div>
      <div>
        <div className={[layout['container']].join(' ')}>
          <Banner type='onlinehost' />
        </div>
      </div>
      <div className={[layout['container']].join(' ')}>
        <Section type='works' />
      </div>
    </div>
  );
};

export default OnlineHost;
