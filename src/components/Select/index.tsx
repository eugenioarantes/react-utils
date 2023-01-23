/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useMemo } from 'react';
import ReactSelect from 'react-select';
import Skeleton from '@mui/material/Skeleton';

import Label from '../Label';
import { Column, Row } from '../Containers';

import { getBaseReactSelectStyle } from './styles';

import { ReactSelectOption, SelectValue } from './types';

interface BaseSelectProps<Entity extends Record<string, any>> {
  id: string;

  options: Entity[];

  propConfig: {
    unique: keyof Entity;
    label: keyof Entity;
  };

  isSearchable?: boolean;
  disabled?: boolean;
  isMulti?: boolean;
  width?: string | number;
  label?: string;
  labelPosition?: 'left' | 'top';
  className?: string;
  loading?: boolean;
  placeholder?: string;
}

type SelectValueOptions =
  | { isMulti: true; value: string[]; onChange: (values: string[]) => void }
  | { isMulti?: false; value: string; onChange: (values: string) => void };

type SelectProps<Entity extends Record<string, any>> = BaseSelectProps<Entity> & SelectValueOptions;

function Select<Entity extends Record<string, any>>({
  id,
  options,
  propConfig,
  value,
  isSearchable = true,
  isMulti = false,
  width = '100%',
  label,
  disabled,
  className,
  onChange,
  labelPosition = 'left',
  loading,
  placeholder,
}: SelectProps<Entity>): JSX.Element {
  const baseStyle = getBaseReactSelectStyle({ width });

  const Container = labelPosition === 'left' ? Row : Column;

  const reactSelectOptions = useMemo(() => {
    const { unique, label: labelConfig } = propConfig;

    return options.map((entity) => ({
      value: entity[unique],
      label: entity[labelConfig],
    })) as ReactSelectOption[];
  }, [options, propConfig]);

  const reactSelectValue = isMulti
    ? reactSelectOptions.filter((option) => value.includes(option.value as string))
    : reactSelectOptions.find((option) => option.value === value);

  const handleChange = useCallback(
    // eslint-disable-next-line no-shadow
    (value: SelectValue) => {
      if (!value) return onChange((isMulti ? [] : '') as string[] & string);

      const updatedValue = Array.isArray(value)
        ? value.map((option) => option.value)
        : (value as ReactSelectOption).value;

      onChange(updatedValue as string[] & string);
    },
    [onChange, isMulti],
  );

  return (
    <Container className={className} gap={8} fullWidth={false}>
      {label && <Label htmlFor={id}>{label}</Label>}

      {loading ? (
        <Skeleton variant="rounded" width="100%" height={42} />
      ) : (
        <ReactSelect
          isDisabled={disabled}
          inputId={id}
          options={reactSelectOptions}
          value={reactSelectValue}
          onChange={handleChange}
          menuPlacement="auto"
          menuPosition="fixed"
          isSearchable={isSearchable}
          styles={baseStyle}
          isMulti={isMulti}
          placeholder={placeholder}
        />
      )}
    </Container>
  );
}

export default Select;
