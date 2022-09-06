import { Avatar as MuiAvatar, AvatarProps } from "@mui/material";

const Avatar = ({ ...props }: AvatarProps) => {
  return <MuiAvatar {...props} />;
};

export default Avatar;
