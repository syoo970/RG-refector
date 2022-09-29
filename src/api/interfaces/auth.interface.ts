export type OAuthResponse = Promise<{
  accessToken: string;
  isNew: boolean;
}>;

export type AuthCheckResponse = Promise<{
  userId: number;
  registered: boolean;
  accessToken: string;
}>;
