interface TitleProps {
  title?: string;
}

interface LinkButtonProps {
  to?: string;
}

interface OnPressProps {
  onPress?: () => void;
}

interface MiniProps {
  mini?: boolean;
}

interface InverseProps {
  inverse?: boolean;
}

export interface AuthButtonProps {
  platform?: string;
  icon?: any;
}

export interface GlobeButtonProps extends InverseProps {}

export interface HostButtonProps extends LinkButtonProps, InverseProps {}

export interface MenuButtonProps extends InverseProps {
  authenticated?: boolean;
  data?: {
    imgUrl: string;
  };
}

export interface PrivacyButtonProps
  extends InverseProps,
    TitleProps,
    OnPressProps {}

export interface BorderButtonProps
  extends LinkButtonProps,
    InverseProps,
    TitleProps {
  size?: 'sm' | 'md' | 'lg';
  spread?: boolean;
}

export interface BannerButtonProps extends LinkButtonProps, TitleProps {}

export interface PrimaryButtonProps extends TitleProps, OnPressProps {
  size?: 'sm' | 'md' | 'lg';
  spread?: boolean;
  fill?: string;
  loading?: boolean;
}

export interface SearchbarButtonProps extends MiniProps {}

export interface PaginateButtonProps {
  direction?: string;
  disable?: boolean;
  onPress?: () => void;
}

export interface ModalButtonProps {
  onPress?: () => void;
  modalType?: 'close' | 'back';
}

export interface ExpandButtonProps extends LinkButtonProps, TitleProps {}

export interface OptionButtonProps {
  option?: string;
  bold?: boolean;
}

export interface UnderlineButtonProps {
  onPress?: () => void;
  title?: string;
  font?: number;
  color?: string;
}

export interface CloseButtonProps {
  onPress?: () => void;
}

export interface FilterButtonProps {}

export interface ReportButtonProps {}

export type ButtonProps = {
  extendsTo?: string;
  type?: string;
  [x: string]: any;
};
