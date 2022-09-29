declare module "common" {
  export interface User {
    id?: number | string;
    nickname?: string;
    ridingStartYear?: number | string;
    profileImage?: string;
    introduction?: string;
    favoriteRegionCode?: number;
    level?: string;
  }

  export interface PrivacyProfile {
    kakaoEmail?: string | null;
    phoneNumber?: string;
  }

  export interface Manner {
    banned?: string | null;
    mannerPoint?: number;
    noShow?: number;
  }

  export interface Post {
    bicycles?: string[];
    departurePosition?: {
      lat: number;
      lng: number;
    };
    estimatedTime?: string;
    id?: number;
    ridingCourses?: string[];
    ridingDate?: string;
    ridingLevel?: string;
    thumbnail?: string;
    title?: string;
  }
}
