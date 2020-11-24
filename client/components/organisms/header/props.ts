export interface TransparentHeaderProps {}

export interface WhiteHeaderProps {
  spread?: boolean;
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
