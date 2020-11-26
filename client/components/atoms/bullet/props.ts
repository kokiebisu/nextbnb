export interface CharacteristicBulletProps {
  characteristic?: string;
  time?: number;
  languages?: string[];
  devices?: string[];
  people?: number;
  group?: number;
}

export interface AmenityBulletProps {
  amenityType?: string;
  title?: string;
  removed?: boolean;
}

export interface ScoreBulletProps {
  category?: string;
  average?: number;
  reviews?: {
    imgUrl: string;
    name: string;
    date: string;
    description: string;
  }[];
}

export interface HostBulletProps {
  total?: number;
  categoryType?: string;
}

export interface KnowBulletProps {
  categoryType?: string;
  checkin?: any;
  checkout?: string;
}

export interface RatingBulletProps {
  ratings?: number;
  reviews?: number;
}

export interface BringBulletProps {
  title?: string;
}

export interface ExperienceBulletProps {
  experienceType?: 'hosts' | 'activities' | 'global';
}

export interface PriorityBulletProps {
  priority?: 'protection' | 'guidance' | 'requirements';
}

export interface HelpBulletProps {
  help?: 'support' | 'tools' | 'insights' | 'education';
}

export interface RequiredBulletProps {
  message?: string;
}

export interface OnlineHostBulletProps {
  bullet?: string;
}

export interface BulletProps {
  extendsTo?: string;
  type: string;
  [x: string]: any;
}
