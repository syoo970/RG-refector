import { Button as MuiButton, ButtonProps, Icon } from "@mui/material";
import { ElementType } from "react";

interface Props extends ButtonProps {
  component?: ElementType;
  useIcon?: {
    iconName: string;
    position: "start" | "end";
  };
}

const Button = ({ useIcon, ...props }: Props) => {
  const iconProp = useIcon && {
    [useIcon?.position === "start" ? "startIcon" : "endIcon"]: (
      <Icon>{useIcon?.iconName}</Icon>
    ),
  };
  return <MuiButton {...iconProp} {...props} />;
};

export default Button;
