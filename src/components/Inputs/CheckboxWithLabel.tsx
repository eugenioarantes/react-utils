import { Checkbox } from '../Material';

import { StyledCheckBox } from './styles';

type Props = {
  children?: never;
  checked: boolean;
  label: string;
  color?: string;
  onToggle: () => void;
  disabled?: boolean;
};

function CheckboxWithLabel({ onToggle, checked, label, disabled, color }: Props): JSX.Element {
  return (
    <StyledCheckBox
      control={<Checkbox onChange={onToggle} checked={checked} disabled={disabled} />}
      label={label}
      color={color}
    />
  );
}

export default CheckboxWithLabel;
