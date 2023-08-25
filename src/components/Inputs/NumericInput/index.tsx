import { ChangeEvent } from 'react';

import { useToggleV2 } from '../../../hooks/toggleV2';
import StyledLabel from '../../Label';
import { Column, Row } from '../../Containers';

import NumberFormat from './NumberFormat';

import { Input, MIN_INPUT_WIDTH } from './styles';

import DecimalFormat from './DecimalFormat';

interface NumericInputProps {
  value: string;
  name: string;
  id?: string;
  width?: number;
  decimal?: boolean;
  placeholder?: string;

  handleValueChange?: (event: ChangeEvent<HTMLInputElement>) => void;

  disabled?: boolean;
  required?: boolean;

  label?: string;
  labelGap?: number;
  error?: boolean;
  orientation?: 'vertical' | 'horizontal';
}

const CHARS_WIDTH_LIMIT = 7;
const ADDITIONAL_CHAT_WIDTH = 10;

function calculateMinValueWidth({ value, width }: { value: string; width?: number }): string {
  const normalized = Number(value).toFixed(2);

  const withinLimit = normalized.length < CHARS_WIDTH_LIMIT;

  if (withinLimit) return width ? `${width}px` : `${MIN_INPUT_WIDTH}px`;

  const extraChars = normalized.length - CHARS_WIDTH_LIMIT;
  const additionalWidth = ADDITIONAL_CHAT_WIDTH * extraChars;

  const minAccepted = MIN_INPUT_WIDTH + additionalWidth;

  if (!width) return `${minAccepted}px`;

  return `${minAccepted <= width ? width : minAccepted}px`;
}

export function NumericInput({
  handleValueChange,
  disabled = false,
  required = false,
  label,
  labelGap = 16,
  error,
  orientation = 'vertical',
  id,
  name,
  value,
  decimal,
  placeholder,
  width,
}: NumericInputProps): JSX.Element {
  const Wrapper = orientation === 'vertical' ? Column : Row;

  const InputFormat = decimal ? DecimalFormat : NumberFormat;

  const [inputFocused, inputHandlers] = useToggleV2();

  const shouldAlignInputLabel = !value && !inputFocused;

  return (
    <Wrapper gap={labelGap} fullWidth={false}>
      {label && <StyledLabel>{label}</StyledLabel>}

      <Row fullWidth={false}>
        <Input
          label={placeholder ?? 'Valor'}
          id={id}
          name={name}
          value={value}
          disabled={disabled}
          required={required}
          onChange={handleValueChange}
          autoComplete="false"
          aria-autocomplete="none"
          InputProps={{
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            inputComponent: InputFormat as any,
            inputProps: width
              ? {
                  sx: { textAlign: 'end' },
                }
              : undefined,
          }}
          onFocus={inputHandlers.turnOn}
          onBlur={inputHandlers.turnOff}
          error={error}
          $adjustTopAlignment={shouldAlignInputLabel}
          $minWidth={calculateMinValueWidth({ value, width })}
          sx={
            width
              ? { width, minWidth: calculateMinValueWidth({ value, width }) }
              : { minWidth: calculateMinValueWidth({ value, width }) }
          }
        />
      </Row>
    </Wrapper>
  );
}
