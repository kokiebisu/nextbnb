export interface TransparentHeaderProps {
  data?: any;
}

export interface WhiteHeaderProps {
  spread?: boolean;
  data?: any;
}

export interface DetailsHeaderProps {
  layoutType?: string;
  spread?: boolean;
}

export interface HomesHeaderProps {
  spread?: boolean;
}

export interface ExperiencesHeaderProps {}

export interface OnlineHostHeaderProps {}

export interface HeaderProps {
  extendsTo?: string;
  type: string;
  [x: string]: any;
}
