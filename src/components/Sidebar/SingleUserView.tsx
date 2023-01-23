import { Link } from 'react-router-dom';

import Collapse from '@mui/material/Collapse';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

import { useToggle } from '../../hooks/toggle';
import { ActionButton, TaskName } from './styles';
import { Column, Row } from '../Containers';

import { User } from '../../mocks/Users';
import { TASKS } from '../../mocks/Tasks';

interface TeamUserProps {
  children?: never;
  user: User;
}

function TeamUser({ user }: TeamUserProps): JSX.Element | null {
  const { isOn, toggle } = useToggle();

  const userEntries = TASKS.filter(({ tasks }) =>
    tasks.some(({ owners }) => owners.includes(user.id)),
  ).map(({ tab, tasks }) => {
    return {
      tab,
      tasks: tasks.filter(({ owners }) => owners.includes(user.id)),
    };
  });

  return (
    <>
      <Row>
        <ActionButton onClick={toggle}>
          {isOn ? <KeyboardArrowDownIcon /> : <KeyboardArrowRightIcon />}

          <Row gap={4}>
            <span>{user.name}</span>

            <small>({userEntries.reduce((acc, { tasks }) => acc + tasks.length, 0)})</small>
          </Row>
        </ActionButton>
      </Row>

      <Collapse in={isOn}>
        <Column gap={12}>
          {userEntries.map((entry) =>
            entry.tasks.map((uniqueTask) => (
              <Link key={`${uniqueTask.id}-${user.id}-user-view`} to={`/tasks?tab=${entry.tab}`}>
                <Row>
                  <TaskName>{uniqueTask.name}</TaskName>
                </Row>
              </Link>
            )),
          )}
        </Column>
      </Collapse>
    </>
  );
}

export default TeamUser;
