import Button from '@mui/material/Button';
import { useState } from 'react';
import { GoBackButton } from '../../components/Buttons';
import { Row, Column } from '../../components/Containers';
import MyProfile from './MyProfile';
import Users from './Users';

type Options = 'profile' | 'users';

const optionToComponent = {
  profile: MyProfile,
  users: Users,
} as Record<string, () => JSX.Element>;

function Settings(): JSX.Element {
  const [option, setOption] = useState<Options>('profile');

  const OptionComponent = optionToComponent[option];

  return (
    <Column>
      <Row justifyContent="space-between">
        <Row fullWidth={false}>
          <GoBackButton to="/" />

          <h1>Settings Page</h1>
        </Row>

        <Row fullWidth={false}>
          <Button variant="contained" onClick={() => setOption('profile')}>
            My profile
          </Button>
          <Button variant="contained" onClick={() => setOption('users')}>
            Users
          </Button>
        </Row>
      </Row>

      <OptionComponent />
    </Column>
  );
}

export default Settings;
