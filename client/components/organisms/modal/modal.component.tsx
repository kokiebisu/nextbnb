import { AnimatePresence } from 'framer-motion';
import useOnClickOutside from '../../../hooks/useOnClickOutside';
import React, { useRef } from 'react';
import { MenuModal } from './modal.menu';
import { PrivacyModal } from './modal.privacy';
import { RegisterModal } from './modal.register';
import { useToggleDispatch } from '../../../context/toggle';

export interface ModalProps {
  extendsTo?: string;
  criteria?: any;
  type: string;
  refProp?: any;
  dispatchType?: string;
}

interface mapProps {
  [key: string]: JSX.Element;
}

export const Modal: React.FC<ModalProps> = ({
  type,
  extendsTo,
  dispatchType,
  ...props
}) => {
  const { criteria } = props;
  const ref = useRef();
  const toggleDispatch = useToggleDispatch();
  useOnClickOutside(ref, () => toggleDispatch({ type: `${dispatchType}` }));

  const types: mapProps = {
    privacy: <PrivacyModal {...props} />,
    menu: <MenuModal refProp={ref} {...props} />,
    register: <RegisterModal {...props} />,
  };
  if (criteria !== undefined) {
    return (
      <AnimatePresence>
        {criteria ? <div className={extendsTo}>{types[type]}</div> : null}
      </AnimatePresence>
    );
  }
  return <div className={extendsTo}>{types[type]}</div>;
};