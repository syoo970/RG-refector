import { ComponentMeta, ComponentStory } from "@storybook/react";
import { FormProvider, useForm } from "react-hook-form";
import CheckBoxGroup from "@/components/CheckBoxGroup";

export default {
  title: "CUSTOM/CheckBoxGroup",
  component: CheckBoxGroup,
} as ComponentMeta<typeof CheckBoxGroup>;

type DefaultProps = {
  test1?: boolean;
  test2?: boolean;
};

const DATA = [
  { label: "Test 1", checkBoxName: "test1" },
  { label: "Test 2", checkBoxName: "test2" },
];

export const Default: ComponentStory<typeof CheckBoxGroup> = () => {
  const methods = useForm<DefaultProps>({
    defaultValues: {
      test1: false,
      test2: true,
    },
  });

  const onSubmit = (data: DefaultProps) => console.log(data);

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <CheckBoxGroup data={DATA} row />
        <button type="submit">Submit</button>
      </form>
    </FormProvider>
  );
};
