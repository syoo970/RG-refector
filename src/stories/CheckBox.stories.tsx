import { ComponentMeta, ComponentStory } from "@storybook/react";
import { useForm } from "react-hook-form";
import CheckBox from "@/components/CheckBox";

export default {
  title: "MUI/CheckBox",
  component: CheckBox,
} as ComponentMeta<typeof CheckBox>;

type CheckBoxType = {
  test?: boolean;
};

const Template: ComponentStory<typeof CheckBox> = (args) => {
  const { control, handleSubmit, getValues } = useForm<CheckBoxType>({
    defaultValues: {
      test: true,
    },
  });

  const onSubmit = (data: CheckBoxType) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <CheckBox
        {...args}
        control={control}
        name="test"
        defaultChecked={getValues("test")}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export const Default = Template.bind({});
Template.args = {
  color: "rg",
};
