import { useMemo, useState } from 'react';

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
import { SingleTask, TASKS } from '../../mocks/Tasks';

import { FilterButton } from './styles';
import { useToggle } from '../../hooks/toggle';
import FilterModal from './FilterModal';
import { USERS } from '../../mocks/Users';

export type TaskFilter = Record<'status' | 'owners', string[]>;

type FilterKey = keyof TaskFilter;

const filterResolvers: {
  [key in FilterKey]: (tasks: SingleTask[], filters: string[]) => boolean;
} = {
  status: (tasks, filters) => tasks.some(({ status }) => filters.includes(status)),

  owners: (tasks, filters) => tasks.some(({ owners }) => owners.some((id) => filters.includes(id))),
};

const taskFilterResolvers: {
  [key in FilterKey]: (task: SingleTask, filters: string[]) => boolean;
} = {
  status: (task, filters) => filters.includes(task.status),

  owners: (task, filters) => task.owners.some((ownerId) => filters.includes(ownerId)),
};

function Home(): JSX.Element {
  const { isOn: modalFilterOpen, turnOff: closeFilterModal, turnOn: openFilterModal } = useToggle();

  const [filters, setFilters] = useState<TaskFilter>({} as TaskFilter);

  const hasFilter = !!Object.keys(filters).length;

  const filteredProjects = useMemo(() => {
    const activeFilterEntries = Object.entries(filters);

    if (!activeFilterEntries.length) return TASKS;

    return TASKS.filter(({ tasks }) => {
      const allFiltersMatch = activeFilterEntries.every(([filter, values]) =>
        filterResolvers[filter as FilterKey](tasks, values),
      );

      return allFiltersMatch;
    }).map(({ id, name, tab, tasks }) => ({
      id,
      name,
      tab,
      tasks: tasks.filter((task) => {
        const allFiltersMatch = activeFilterEntries.every(([filter, values]) =>
          taskFilterResolvers[filter as FilterKey](task, values),
        );

        return allFiltersMatch;
      }),
    }));
  }, [filters]);

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

      <FilterModal
        isOpen={modalFilterOpen}
        close={closeFilterModal}
        setTasksFilters={setFilters}
        tasksFilters={filters}
      />

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
            {!TASKS.length ? (
              <TableRow>
                <TableCell colSpan={4}>
                  <Typography fontSize={30} align="center">
                    No tasks found
                  </Typography>
                </TableCell>
              </TableRow>
            ) : (
              filteredProjects.map(({ tasks }) =>
                tasks.map(({ id, name, status, owners }) => (
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
