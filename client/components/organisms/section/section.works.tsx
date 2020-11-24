import { Layout } from '../../../layout/layout.component';
import React from 'react';
import { WorksSectionProps } from './props';
import { Card } from '../../../components/atoms/card/card.component';
import layout from '../../../styles/layout.module.scss';
import section from './section.module.scss';
import space from '../../../styles/space.module.scss';

export const WorksSection: React.FC<WorksSectionProps> = () => {
  const categories = ['design', 'share', 'submit', 'setup'];
  return (
    <div>
      <Layout type='section' sectionType='homes' title='How hosting works'>
        <div>
          {categories.map((category, index) => {
            return (
              <div className={[space['m-b--8']].join(' ')} key={index}>
                <Card type='works' work={category} />
              </div>
            );
          })}
        </div>
      </Layout>
    </div>
  );
};
