import { MultiValue, SingleValue } from 'react-select';

export type ReactSelectOption = {
  value: string;
  label: string;
};

export type SelectValue = MultiValue<ReactSelectOption> | SingleValue<ReactSelectOption>;
