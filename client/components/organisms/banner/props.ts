export interface HomesBannerProps {
  hosts?: any;
}

export interface ExperiencesBannerProps {}

export interface LandingBannerProps {
  data?: any;
}

export interface OnlineHostBannerProps {}

export interface BannerProps {
  extendsTo?: string;
  type?: string;
  [x: string]: any;
}
