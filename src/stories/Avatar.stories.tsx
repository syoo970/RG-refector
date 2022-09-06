import { ComponentMeta, ComponentStory } from "@storybook/react";
import Avatar from "@/components/Avatar";
import AvatarGroup from "@/components/AvatarGroup";

export default {
  title: "MUI/Avatar",
  component: Avatar,
} as ComponentMeta<typeof Avatar>;

const DEFAULT_IMG =
  "https://cdn.pixabay.com/photo/2019/10/14/22/58/ukraine-4550155__340.jpg";
const IMG2 =
  "https://cdn.pixabay.com/photo/2022/04/03/13/54/woman-7109043__340.jpg";

const GROUP_DATA = [
  { alt: "test1", src: DEFAULT_IMG },
  { alt: "test2", src: IMG2 },
  { alt: "test3", src: DEFAULT_IMG },
];

const SingleTemplate: ComponentStory<typeof Avatar> = (args) => {
  return <Avatar src={DEFAULT_IMG} alt="testing" {...args} />;
};

const GroupTemplate: ComponentStory<typeof AvatarGroup> = (args) => {
  return <AvatarGroup {...args} />;
};

export const Default = SingleTemplate.bind({});

export const Group = GroupTemplate.bind({});
Group.args = {
  max: 3,
  avatars: GROUP_DATA,
};
