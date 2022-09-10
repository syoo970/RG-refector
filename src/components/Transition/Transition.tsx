import React from "react";
import { TransitionProps } from "@mui/material/transitions";
import { Slide, SlideProps } from "@mui/material";

const Transition = React.forwardRef<
  React.Ref<unknown>,
  TransitionProps & SlideProps
>(({ ...props }, ref) => {
  return <Slide {...props} ref={ref} direction="up" />;
});

export default Transition;
