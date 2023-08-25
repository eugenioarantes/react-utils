import { ChangeEvent } from 'react';

import Label from '../../Label';
import { Skeleton, TextFieldProps } from '../../Material';

import { Input, StyledColumn, StyledRow } from './styles';

interface InputLabelProps {
  label?: string | null;
  width?: number;
  loading?: boolean;
  height?: number;
  labelGap?: number;
  handleChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  orientation?: 'vertical' | 'horizontal';
}

type InputLabelComposedProps = InputLabelProps & Omit<TextFieldProps, 'label'>;

export function InputWithLabel({
  label,
  width,
  loading = false,
  handleChange,
  height = 45,
  labelGap = 8,
  orientation = 'vertical',
  ...props
}: InputLabelComposedProps): JSX.Element {
  const Wrapper = orientation === 'vertical' ? StyledColumn : StyledRow;

  const id = props.id || props.name;

  return (
    // TS is giving an error it should not, this call is perfect
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    <Wrapper gap={labelGap} $width={width}>
      {label && <Label htmlFor={id}>{label}</Label>}

      {loading ? (
        <Skeleton height={height} variant="rounded" />
      ) : (
        <Input onChange={handleChange} $height={height} {...props} id={id} />
      )}
    </Wrapper>
  );
}
