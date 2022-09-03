import { ComponentMeta, ComponentStory } from "@storybook/react";
import { useForm } from "react-hook-form";
import Input from "@/components/Input";

export default {
  title: "MUI/Input",
  component: Input,
} as ComponentMeta<typeof Input>;

interface FormValue {
  test?: string;
}

export const Default: ComponentStory<typeof Input> = () => {
  const { control, handleSubmit } = useForm<FormValue>({
    defaultValues: {
      test: "",
    },
  });

  const onSubmit = (data: FormValue) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        name="test"
        control={control}
        rules={{ required: "필수!" }}
        textFieldProps={{
          label: "Test",
        }}
      />
      <button type="submit">submit</button>
    </form>
  );
};
