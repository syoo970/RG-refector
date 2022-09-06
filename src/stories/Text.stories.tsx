import { ComponentMeta, ComponentStory } from "@storybook/react";
import Text from "@/components/Text";

export default {
  title: "MUI/Text",
  component: Text,
} as ComponentMeta<typeof Text>;

export const Template: ComponentStory<typeof Text> = (args) => (
  <Text {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: "Hello world",
  variant: "h2",
};

export const Error = Template.bind({});
Error.args = {
  children: "Hello world",
  variant: "error",
};
