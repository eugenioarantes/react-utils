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

import FilterListIcon from '@mui/icons-material/FilterList';

import { Column, Row } from '../../components/Containers';
import { TASKS } from '../../mocks/Tasks';

import { FilterButton } from './styles';
import { useToggle } from '../../hooks/toggle';

function Home(): JSX.Element {
  const { isOn: modalFilterOpen, turnOff: closeFilterModal, turnOn: openFilterModal } = useToggle();

  const hasFilter = true;

  return (
    <Column>
      <Row justifyContent="space-between">
        <Typography fontSize={30} align="center">
          All tasks
        </Typography>

        <FilterButton $hasFilter={hasFilter} onClick={openFilterModal}>
          <FilterListIcon />
        </FilterButton>
      </Row>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell width={100}>Id</TableCell>
              <TableCell width={300}>Task name</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {!TASKS.length ? (
              <TableRow>
                <TableCell colSpan={4}>
                  <Typography fontSize={30} align="center">
                    No tasks found
                  </Typography>
                </TableCell>
              </TableRow>
            ) : (
              TASKS.map(({ tasks }) =>
                tasks.map(({ id, name, status }) => (
                  <TableRow>
                    <TableCell>{id}</TableCell>

                    <TableCell>{name}</TableCell>

                    <TableCell>{status}</TableCell>
                  </TableRow>
                )),
              )
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Column>
  );
}

export default Home;
