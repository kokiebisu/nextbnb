/**
 * Basic Props
 */

export interface CardBasicProps {}

/**
 * Card Categories
 */

export interface ArrangementsCardProps {
  card?: any;
}

export interface HorizontalCardProps {
  card?: any;
  save?: boolean;
  superhost?: boolean;
}

export interface VerticalCardProps {
  card?: any;
  save?: boolean;
  superhost?: boolean;
}
export interface TypeStayCardProps {
  card?: any;
}

export interface CategoryCardProps {
  imgUrl?: string;
  title?: string;
}

export interface CheckInCardProps {
  length?: number;
}

export interface ReviewCardProps {
  imgUrl?: string;
  description?: string;
}

export interface StaysCardProps {
  images?: string[];
  typeStay?: string;
  location?: string;
  title?: string;
  accomodations?: {
    guests: number;
    bedroom: number;
    beds: number;
    bath: number;
  };
  characteristics?: string[];
  ratings?: number;
  reviews?: number;
}

export interface NearbyCardProps {
  imgUrl?: string;
  city?: string;
  hours?: number;
  size?: 'sm' | 'lg';
}

export interface OnlineCardProps {
  small?: string;
  large?: string;
  title?: string;
  inverse?: boolean;
}

export interface AvailableCardProps {
  date?: string;
  from?: string;
  to?: string;
  standard?: string;
  price?: number;
}

export interface ParticipateCardProps {
  categoryType?: string;
}

export interface HostCardProps {
  imgUrl?: string;
  host?: string;
  stayType?: string;
  location?: string;
}

export interface SetCardProps {}

export interface AgainCardProps {}

export interface WorksCardProps {
  work?: string;
}

export interface CardProps {
  extendsTo?: string;
  type?: string;
  to?: string;
  [x: string]: any;
}
