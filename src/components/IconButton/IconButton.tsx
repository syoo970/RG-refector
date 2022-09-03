import {
  IconButton as MuiIconButton,
  IconButtonProps,
  Icon,
} from "@mui/material";

interface Props extends IconButtonProps {
  iconName: string;
}

const IconButton = ({ ...props }: Props) => {
  return (
    <MuiIconButton {...props}>
      <Icon>{props.iconName}</Icon>
    </MuiIconButton>
  );
};

export default IconButton;
