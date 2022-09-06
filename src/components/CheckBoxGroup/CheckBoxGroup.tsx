import {
  FormGroup,
  FormGroupProps,
  FormControlLabel,
  CheckboxProps,
} from "@mui/material";
import { useFormContext } from "react-hook-form";
import CheckBox from "@/components/CheckBox";

interface CheckBoxGroupProps {
  data: {
    label: string | number;
    checkBoxName: string;
    checkBoxProp?: CheckboxProps;
  }[];
}

type Props = FormGroupProps & CheckBoxGroupProps;

const CheckBoxGroup = ({ row, data, ...props }: Props) => {
  const { control, getValues } = useFormContext();
  return (
    <FormGroup row={row || false} {...props}>
      {data.map(({ label, checkBoxName, checkBoxProp }) => (
        <FormControlLabel
          key={checkBoxName}
          control={
            <CheckBox
              name={checkBoxName}
              {...checkBoxProp}
              control={control}
              defaultChecked={getValues(checkBoxName)}
            />
          }
          label={label}
        />
      ))}
    </FormGroup>
  );
};

export default CheckBoxGroup;
