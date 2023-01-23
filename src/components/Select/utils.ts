import { ReactSelectOption } from './types';

export function transformArrayInSelectOptions(items: any[]): ReactSelectOption[] {
  const options = items.map((item) => {
    return { value: item.id, label: item.name };
  });

  return options;
}
