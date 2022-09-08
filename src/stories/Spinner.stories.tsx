import { ComponentMeta, ComponentStory } from "@storybook/react";
import Spinner from "@/components/Spinner";

export default {
  title: "MUI/Spinner",
  component: Spinner,
} as ComponentMeta<typeof Spinner>;

export const Default: ComponentStory<typeof Spinner> = () => (
  <Spinner color="rg" />
);
