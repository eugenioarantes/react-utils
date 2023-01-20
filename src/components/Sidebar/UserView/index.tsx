import Collapse from '@mui/material/Collapse';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import GroupsIcon from '@mui/icons-material/Groups';

import { USERS } from '../../../mocks/Users';

import { useToggle } from '../../../hooks/toggle';

import { UsersWrapper } from './styles';
import { ActionButton } from '../styles';
import SingleUserView from '../SingleUserView';

function UsertView(): JSX.Element | null {
  const { isOn, toggle } = useToggle();

  return (
    <>
      <ActionButton onClick={toggle}>
        {isOn ? <KeyboardArrowDownIcon /> : <KeyboardArrowRightIcon />}

        <GroupsIcon />

        <span>USERS ({USERS.length})</span>
      </ActionButton>

      <Collapse in={isOn}>
        <UsersWrapper gap={8}>
          {USERS.map((user) => (
            <SingleUserView user={user} key={`${user.id}-side-bar-view`} />
          ))}
        </UsersWrapper>
      </Collapse>
    </>
  );
}

export default UsertView;
