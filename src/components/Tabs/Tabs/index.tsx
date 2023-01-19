import { styled } from '@mui/material/styles';
import MuiTabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { grey } from '@mui/material/colors';

interface StyledTabsProps {
  children?: React.ReactNode;
  value: number;
  onChange: (event: React.SyntheticEvent, newValue: number) => void;
}

const StyledTabs = styled((props: StyledTabsProps) => (
  <MuiTabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))(({ theme }) => ({
  '& .MuiTabs-indicator': {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    bottom: 10,
  },
  '& .MuiTabs-indicatorSpan': {
    maxWidth: 40,
    width: '100%',
    backgroundColor: theme.palette.primary.main,
  },
}));

interface StyledTabProps {
  label: string;
}

const StyledTab = styled((props: StyledTabProps) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: 'none',
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    color: 'rgba(255, 255, 255, 0.7)',
    '&.Mui-selected': {
      color: grey[500],
    },
    '&.Mui-focusVisible': {
      backgroundColor: theme.palette.primary.main,
    },
    '&.MuiButtonBase-root': {
      color: grey[500],
      minHeight: 36,
      padding: '8px 12px',
    },
  }),
);

interface TabsProps {
  children?: never;
  value: string;
  onChange: (value: string) => void;
  tabs: Array<{
    label: string;
    id: string;
    render?: boolean;
  }>;
}

function Tabs({ value, onChange, tabs }: TabsProps): JSX.Element {
  const tabsToDisplay = tabs.filter(({ render = true }) => render);

  const tabIndex = tabsToDisplay.findIndex((tab) => tab.id === value);

  return (
    <StyledTabs
      value={tabIndex}
      onChange={(_, val) =>
        onChange(tabsToDisplay.find((_unused, index) => index === val)?.id as string)
      }
    >
      {tabsToDisplay.map(({ label, id }) => (
        <StyledTab key={id} label={label} />
      ))}
    </StyledTabs>
  );
}

export default Tabs;
