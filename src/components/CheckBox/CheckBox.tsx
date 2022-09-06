import { Checkbox, CheckboxProps } from "@mui/material";
import {
  useController,
  UseControllerProps,
  FieldPath,
  FieldValues,
} from "react-hook-form";

const CheckBox = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
  control,
  name,
  ...props
}: UseControllerProps<TFieldValues, TName> & CheckboxProps) => {
  const { field } = useController({ control, name });

  return <Checkbox {...field} {...props} />;
};

export default CheckBox;
