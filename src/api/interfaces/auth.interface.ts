export interface OAuthLoginProp {
  authorizationCode: string;
}

export type OAuthResponse = Promise<{
  accessToken: string;
  isNew: boolean;
}>;
