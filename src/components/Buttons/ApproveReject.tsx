import { useCallback } from 'react';

import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { alpha, styled } from '@mui/material/styles';

interface ApproveRejectButtonGroupProps {
  children?: never;
  value: boolean | null;
  onChange: (state: boolean) => void;
}

const StyledToggle = styled(ToggleButton)(({ theme }) => ({
  '&': {
    padding: 7,
  },

  '&.Mui-selected': {
    '&:first-of-type': {
      borderColor: theme.palette.success.light,
      color: theme.palette.success.main,
      backgroundColor: alpha(theme.palette.success.light, 0.15),
    },

    '&:last-of-type': {
      borderColor: theme.palette.error.light,
      color: theme.palette.error.light,
      backgroundColor: alpha(theme.palette.error.light, 0.08),
    },
  },
}));

function ApproveRejectButtonGroup({ value, onChange }: ApproveRejectButtonGroupProps): JSX.Element {
  const handleChange = useCallback(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (_: any, val: string) => {
      if (!val) return;

      onChange(val === 'true');
    },
    [onChange],
  );

  return (
    <ToggleButtonGroup
      value={typeof value === 'boolean' ? `${value}` : null}
      exclusive
      onChange={handleChange}
    >
      <StyledToggle value="true">Accept</StyledToggle>
      <StyledToggle value="false">Reject</StyledToggle>
    </ToggleButtonGroup>
  );
}

export default ApproveRejectButtonGroup;
