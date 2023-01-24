import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';

import { GoBackButton } from '../../components/Buttons';
import { Row, Column } from '../../components/Containers';
import Tabs from '../../components/Tabs/Tabs';

import { TABS, TASKS } from '../../mocks/Tasks';
import { USERS } from '../../mocks/Users';

const TaskTabs = ['today', 'week', 'month'];

function Tasks(): JSX.Element {
  const [searchParams] = useSearchParams();

  const queryTab = searchParams.get('tab') || 'today';

  const validTab = TaskTabs.some((tab) => tab === queryTab);

  const [tab, setTab] = useState(() => {
    if (validTab) return queryTab;
    return 'today';
  });

  useEffect(() => {
    setTab(queryTab);
  }, [searchParams, queryTab]);

  const tasksToPrint = TASKS.find(({ tab: taskTab }) => taskTab === tab)?.tasks || [];
  return (
    <Column>
      <Row justifyContent="space-between">
        <Row fullWidth={false}>
          <GoBackButton to="/" />

          <h1>{validTab ? `Tasks ${tab}` : 'Not found tasks'}</h1>
        </Row>

        <Tabs value={tab} tabs={TABS} onChange={setTab as (s: string) => void} />
      </Row>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell width={100}>Id</TableCell>
              <TableCell width={300}>Task name</TableCell>
              <TableCell width={300}>Status</TableCell>
              <TableCell>Owner</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {!tasksToPrint.length ? (
              <TableRow>
                <TableCell colSpan={4}>
                  <Typography variant="body1" align="center" color="gray">
                    No tasks found
                  </Typography>
                </TableCell>
              </TableRow>
            ) : (
              tasksToPrint.map(({ id, name, status, owners }) => (
                <TableRow>
                  <TableCell>{id}</TableCell>

                  <TableCell>{name}</TableCell>

                  <TableCell>{status}</TableCell>

                  <TableCell>
                    {USERS.filter(({ id: userId }) => owners.includes(userId))
                      .map(({ name: userName }) => userName)
                      .join(', ')}
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Column>
  );
}

export default Tasks;
