import { ComponentMeta, ComponentStory } from "@storybook/react";
import Button from "@/components/Button";

export default {
  title: "MUI/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

export const Default: ComponentStory<typeof Button> = () => (
  <Button variant="contained" color="rg">
    hello world
  </Button>
);
