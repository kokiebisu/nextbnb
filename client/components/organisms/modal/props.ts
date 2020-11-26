export interface PrivacyModalProps {}

export interface MenuModalProps {
  refProp?: any;
  authenticated?: boolean;
}

export interface RegisterModalProps {}

export interface AvailabilityModalProps {
  ratings?: number;
  reviews?: number;
}

export interface BookingModalProps {
  availables?: any;
}

export interface ModalProps {
  extendsTo?: string;
  type: string;
  dispatchType?: string;
  criteria?: any;
  [x: string]: any;
}
