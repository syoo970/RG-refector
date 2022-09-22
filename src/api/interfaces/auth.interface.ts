export type OAuthResponse = Promise<{
  accessToken: string;
  isNew: boolean;
}>;
