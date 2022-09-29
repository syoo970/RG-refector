import { User, PrivacyProfile, Manner, Post } from "common";

export type UserInfoResponse = Promise<{
  manner: Manner;
  privacyProfile: PrivacyProfile;
  ridingProfile: User;
  ridings: {
    canEvaluated: Post[];
    finished: Post[];
    leading: Post[];
    scheduled: Post[];
  };
}>;
