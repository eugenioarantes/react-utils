import Typography from '@mui/material/Typography';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { useState } from 'react';
import { GoBackButton } from '../../components/Buttons';
import { Row, Column } from '../../components/Containers';
import Tabs from '../../components/Tabs/Tabs';
import MyProfile from './MyProfile';
import Users from './Users';
import { TABS } from './utils';

type Options = 'profile' | 'users';

const optionToComponent = {
  profile: MyProfile,
  users: Users,
} as Record<string, () => JSX.Element>;

function Settings(): JSX.Element {
  const [option, setOption] = useState<Options>('profile');

  const OptionComponent = optionToComponent[option];

  return (
    <Column gap={50}>
      <Row justifyContent="space-between">
        <Row fullWidth={false}>
          <GoBackButton to="/" />

          <InfoOutlinedIcon fontSize="large" color="action" />

          <Typography fontSize={25} color="#666" align="center">
            Informations
          </Typography>
        </Row>

        <Tabs value={option} tabs={TABS} onChange={setOption as (s: string) => void} />
      </Row>

      <OptionComponent />
    </Column>
  );
}

export default Settings;
