import {
  useController,
  FieldValues,
  FieldPath,
  UseControllerProps,
} from "react-hook-form";
import { TextField, TextFieldProps } from "@mui/material";

interface MuiProps {
  textFieldProps?: TextFieldProps;
  labelName?: string;
}

const Input = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
  textFieldProps,
  ...props
}: MuiProps & UseControllerProps<TFieldValues, TName>) => {
  const {
    field,
    fieldState: { error },
  } = useController(props);

  return (
    <TextField
      {...textFieldProps}
      {...field}
      error={!!error}
      helperText={!!error && error.message}
    />
  );
};

export default Input;
