import { Dispatch, SetStateAction, useMemo } from 'react';

import Dialog from '@mui/material/Dialog';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';

import { Column, Row } from '../../../components/Containers';
import Select from '../../../components/Select';

import { Container, StyledButton } from './styles';
import { TaskFilter } from '..';
import { removeUndefinedProperties } from '../../../utils/object';
import { SingleTask, TASKS } from '../../../mocks/Tasks';
import { USERS } from '../../../mocks/Users';

interface FilterProjectsProps {
  isOpen: boolean;
  close: () => void;
  setTasksFilters: Dispatch<SetStateAction<TaskFilter>>;
  tasksFilters: TaskFilter;
}

function FilterProjects({
  close,
  isOpen,
  setTasksFilters,
  tasksFilters,
}: FilterProjectsProps): JSX.Element {
  const uniqueStatus = useMemo(() => {
    const tasksList = TASKS.flatMap(({ tasks }) => tasks);

    const statusList = Array.from(new Set(tasksList.map(({ status }) => status)));

    return statusList.map(
      (status) => tasksList.find(({ status: statusFound }) => statusFound === status) as SingleTask,
    );
  }, []);

  // const uniqueOwners = useMemo(() => {
  //   const projectList = Object.values(projects);

  //   const owners = Array.from(new Set(projectList.map(({ owner }) => owner.id)));

  //   return sortByName(
  //     owners.map((id) => projectList.find(({ owner }) => owner.id === id)?.owner as User),
  //   );
  // }, [projects]);

  // const uniqueTaskOwners = useMemo(() => {
  //   const projectList = Object.values(projects);

  //   const taskOwners = projectList
  //     .map(({ tasks }) => tasks.map(({ owner: { name, id } }) => ({ id, name })))
  //     .flat();

  //   const uniqueIds = Array.from(new Set(taskOwners.map(({ id }) => id)));

  //   return sortByName(
  //     uniqueIds.map((idTaskOwner) => taskOwners.find(({ id }) => id === idTaskOwner) as User),
  //   );
  // }, [projects]);

  // const uniqueTasks = useMemo(() => {
  //   const projectList = Object.values(projects);

  //   const tasks = projectList.map(({ tasks }) => tasks.map((task) => task)).flat();

  //   const allTasks = Array.from(new Set(tasks.map(({ baseName }) => baseName)));

  //   return sortByName(
  //     allTasks.map((name) => ({
  //       ...(tasks.find(({ baseName }) => baseName === name) as FullTask),
  //       name,
  //     })),
  //   );
  // }, [projects]);

  const handleChange = (filters: string[], filterKey: keyof TaskFilter): void => {
    setTasksFilters(
      (old) =>
        removeUndefinedProperties({
          ...old,
          [filterKey]: filters.length ? filters : undefined,
        }) as TaskFilter,
    );
  };

  return (
    <Dialog maxWidth="xl" open={isOpen} onClose={close}>
      <Container gap={24}>
        <Row justifyContent="space-between">
          <Typography variant="h6" color="#666">
            Choose your filters
          </Typography>

          <IconButton onClick={close}>
            <CloseIcon />
          </IconButton>
        </Row>

        <Column gap={32}>
          <Column gap={24}>
            <Select
              id="select-status-filter"
              options={uniqueStatus}
              value={tasksFilters.status || []}
              onChange={(newFilter) => handleChange(newFilter, 'status')}
              placeholder="Status filter"
              label="Status"
              isMulti
              labelPosition="top"
              propConfig={{
                label: 'status',
                unique: 'status',
              }}
            />

            <Select
              id="select-owner-filter"
              options={USERS}
              value={tasksFilters.owners || []}
              onChange={(newFilter) => handleChange(newFilter, 'owners')}
              placeholder="Owner filter"
              label="Owner"
              isMulti
              labelPosition="top"
              propConfig={{
                label: 'name',
                unique: 'id',
              }}
            />
          </Column>

          <Row justifyContent="center">
            <StyledButton variant="contained" onClick={close}>
              Close
            </StyledButton>
          </Row>
        </Column>
      </Container>
    </Dialog>
  );
}

export default FilterProjects;
