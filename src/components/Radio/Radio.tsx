import {
  Radio as MuiRadio,
  RadioGroup,
  FormControl,
  FormControlLabel,
  FormLabel,
  RadioGroupProps,
  FormHelperText,
} from "@mui/material";
import {
  useController,
  UseControllerProps,
  FieldValues,
  FieldPath,
} from "react-hook-form";

interface RgRadioProps extends RadioGroupProps {
  label?: string;
  data?: {
    value: string | number;
    dataLabel: string | number;
  }[];
}

const Radio = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
  label,
  data,
  ...props
}: UseControllerProps<TFieldValues, TName> & RgRadioProps) => {
  const { name, control, rules, ...rest } = props;
  const {
    field,
    fieldState: { error },
  } = useController({ name, control, rules });

  return (
    <FormControl>
      {!!label && <FormLabel>{label}</FormLabel>}
      <RadioGroup {...rest} {...field}>
        {data &&
          data.map(({ value, dataLabel }) => (
            <FormControlLabel
              key={value}
              value={value}
              label={dataLabel}
              control={<MuiRadio />}
            />
          ))}
      </RadioGroup>
      {!!error && <FormHelperText>{error.message}</FormHelperText>}
    </FormControl>
  );
};

export default Radio;
