import IconButton from '@mui/material/IconButton';
import FloatingButton from '@mui/material/Fab';

import DehazeIcon from '@mui/icons-material/Dehaze';

import {
  TaskItem,
  Circle,
  Container,
  Header,
  Workspace,
  SettingsButton,
  MobileWrapper,
} from './styles';

import { Row, Column } from '../Containers';
import FullHeightContainer from '../FullHeightContainer';
import { useWindowSize } from '../../hooks/windowSize';
import { MAX_BREAKPOINTS } from '../../utils/constants';
import { TASKS } from '../../mocks/Tasks';
import UserView from './UserView';

interface SideBarProps {
  open: boolean;
  onToggle: () => void;
}

function Sidebar({ open, onToggle }: SideBarProps): JSX.Element {
  const { width } = useWindowSize();

  if (!open && MAX_BREAKPOINTS.MOBILE >= width)
    return (
      <MobileWrapper>
        <FloatingButton color="primary" onClick={onToggle}>
          <DehazeIcon />
        </FloatingButton>
      </MobileWrapper>
    );

  return (
    <FullHeightContainer manageOverflow={false} bottomOffset={0}>
      <Container className={open ? 'open' : 'closed'} gap={24}>
        <Column gap={24}>
          <Header>
            {open && (
              <>
                <Circle $size={28} $color="gray" />

                <Workspace>MY SIDEBAR</Workspace>
              </>
            )}

            <IconButton onClick={onToggle}>
              <DehazeIcon />
            </IconButton>
          </Header>

          {open && (
            <>
              <Row justifyContent="center">
                <SettingsButton to="/informations">Informations</SettingsButton>
              </Row>

              <Row justifyContent="center">
                <SettingsButton to="/create-task">Create Task</SettingsButton>
              </Row>

              <Column>
                {TASKS.map(({ id, name, tab }) => (
                  <TaskItem key={id} to={`/tasks?tab=${tab}`}>
                    {name}
                  </TaskItem>
                ))}
              </Column>

              <Column>
                <UserView />
              </Column>
            </>
          )}
        </Column>
      </Container>
    </FullHeightContainer>
  );
}

export default Sidebar;
