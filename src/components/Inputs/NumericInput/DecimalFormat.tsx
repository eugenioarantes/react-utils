import { forwardRef } from 'react';
import { NumericFormat, NumericFormatProps } from 'react-number-format';

interface CustomProps {
  onChange: (event: { target: { id: string | undefined; name: string; value: string } }) => void;
  name: string;
  id: string;
}

const DecimalFormat = forwardRef<NumericFormatProps, CustomProps>(function DecimalFormat(
  props,
  ref,
): JSX.Element {
  const { onChange, ...other } = props;

  // This verification is being done because when an id is not passed in the input,
  // the lib creates one like this: :r1n:
  const id = props.id.startsWith(':') ? undefined : props.id;

  return (
    <NumericFormat
      {...other}
      getInputRef={ref}
      onValueChange={(values) => {
        onChange({
          target: {
            id,
            name: props.name,
            value: values.value,
          },
        });
      }}
      valueIsNumericString
      allowNegative={false}
      decimalSeparator="."
      decimalScale={2}
      fixedDecimalScale
    />
  );
});

export default DecimalFormat;
