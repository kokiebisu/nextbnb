import React from 'react';

/**
 * Styles
 */
import space from '../../../styles/space.module.scss';
import styles from '../../../styles/index.module.scss';
import layout from '../../../styles/layout.module.scss';
import color from '../../../styles/color.module.scss';
import shape from '../../../styles/shape.module.scss';
import font from '../../../styles/font.module.scss';
import header from './header.module.scss';

/**
 * Components
 */
import { menu as menuModal } from '../../organisms/modal/modal.stories';
import { Modal } from '../modal/modal.component';
import { Button } from '../../../components/atoms/button/button.component';

/**
 * Vectors
 */
import { NameLogo, NoNameLogo } from '../../../public/svg/logo';
import { MagnifyGlass } from '../../../public/svg/original';

/**
 * Props
 */
import { TransparentHeaderProps } from './props';

/**
 * Contexts
 */
import { useToggleState } from '../../../context/toggle';

/**
 * Renders the transparent header
 */
export const TransparentHeader: React.FC<TransparentHeaderProps> = ({
  data,
}) => {
  let toggleState = useToggleState();
  return (
    <header className={[space['p-h--0'], space['p-v--16']].join(' ')}>
      <div
        className={[
          header['display__transparent--md'],
          layout['items-center'],
          layout['justify-between'],
          layout['relative'],
        ].join(' ')}>
        <div>
          <div className={styles['searchbar__logo--md']}>
            <NoNameLogo fill='white' width={30} height={32} />
          </div>
          <div className={styles['searchbar__logo--lg']}>
            <NameLogo fill='white' width={102} height={32} />
          </div>
        </div>
        <div className={[layout['items-center']].join(' ')}>
          <div className={styles['searchbar__host']}>
            <Button type='host' inverse to='/host/homes' />
          </div>
          <div
            className={[
              space['m-t--0'],
              space['m-r--12'],
              space['m-b--0'],
              space['m-l--8'],
            ].join(' ')}>
            <Button type='globe' inverse />
          </div>
          <div>
            <Button authenticated={data} type='menu' inverse />
          </div>
        </div>
        <Modal
          authenticated={data}
          criteria={toggleState.menu}
          type='menu'
          extendsTo={[
            layout['absolute'],
            layout['r--0'],
            layout['t--55'],
            color['bg--transparent'],
          ].join(' ')}
        />
      </div>
      <div
        className={[
          header['display__transparent--sm'],
          layout['items-center'],
          space['p-v--10'],
          space['p-h--25'],
          shape['br--30'],
          shape['shadow'],
          color['bg--white__0'],
        ].join(' ')}>
        <div className={[space['m-r--15']].join(' ')}>
          <MagnifyGlass stroke={'black'} strokeWidth={4} width={17} />
        </div>
        <div>
          <input
            className={[
              color['b--0'],
              font['size--16'],
              font['weight--300'],
              shape['outline--none'],
            ].join(' ')}
            placeholder='Where are you going'
          />
        </div>
      </div>
    </header>
  );
};
