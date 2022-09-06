import {
  AvatarGroup as MuiAvatarGroup,
  AvatarGroupProps,
  AvatarProps,
} from "@mui/material";
import Avatar from "@/components/Avatar";

interface Props extends AvatarGroupProps {
  avatars?: {
    alt: string;
    src: string;
    options?: AvatarProps;
  }[];
}

const AvatarGroup = ({ avatars, ...props }: Props) => {
  return (
    <MuiAvatarGroup {...props}>
      {avatars?.map(({ alt, src }) => (
        <Avatar alt={alt} src={src} key={alt} />
      ))}
    </MuiAvatarGroup>
  );
};

export default AvatarGroup;
