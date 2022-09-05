import { ComponentMeta, ComponentStory } from "@storybook/react";
import { useForm } from "react-hook-form";
import Radio from "@/components/Radio";

export default {
  title: "MUI/Radio",
  component: Radio,
} as ComponentMeta<typeof Radio>;

type RadioProps = {
  test?: string;
};

type dataType = {
  value: string;
  dataLabel: string;
}[];

const radioData: dataType = [
  { value: "Apple", dataLabel: "Apple" },
  { value: "Orange", dataLabel: "Orange" },
  { value: "Watermelon", dataLabel: "Watermelon" },
];

export const Default: ComponentStory<typeof Radio> = () => {
  const { control, handleSubmit } = useForm<RadioProps>({
    defaultValues: {
      test: "",
    },
  });

  const onSubmit = (data: RadioProps) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Radio
        control={control}
        name="test"
        label="Test"
        rules={{ required: "필수 데이터!" }}
        data={radioData}
      />
      <button type="submit">Submit</button>
    </form>
  );
};
