import { ComponentMeta, ComponentStory } from "@storybook/react";
import Button from "@/components/Button";
import IconButton from "@/components/IconButton";

export default {
  title: "MUI/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

export const Default: ComponentStory<typeof Button> = () => (
  <Button variant="contained" color="rg">
    hello world
  </Button>
);

export const WithImage: ComponentStory<typeof Button> = () => (
  <Button variant="contained" color="rg" component="label">
    Upload
    <input hidden accept="image/*" multiple type="file" />
  </Button>
);

export const WithIcon: ComponentStory<typeof Button> = () => (
  <Button
    variant="contained"
    color="rg"
    useIcon={{ position: "start", iconName: "add_circle" }}
  >
    Add
  </Button>
);

export const IconBtn: ComponentStory<typeof IconButton> = () => (
  <IconButton iconName="add_circle" color="rg" />
);
