import { ComponentMeta, ComponentStory } from "@storybook/react";
import Chip from "@/components/Chip";

export default {
  title: "MUI/Chip",
  component: Chip,
} as ComponentMeta<typeof Chip>;

export const Default: ComponentStory<typeof Chip> = () => (
  <Chip label="Default" />
);

export const Colored: ComponentStory<typeof Chip> = () => (
  <Chip label="main color" color="rg" />
);
