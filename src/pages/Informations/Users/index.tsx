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
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import { Column, Row } from '../../../components/Containers';
import { User, USERS } from '../../../mocks/Users';
import { FilterButton } from '../../Home/styles';
import { useToggle } from '../../../hooks/toggle';
import FilterModal from './FilterModal';

export type UserFilter = Record<'profession' | 'professionLevel', string[]>;

type FilterKey = keyof UserFilter;

const filterResolvers: {
  [key in FilterKey]: (user: User, filters: string[]) => boolean;
} = {
  profession: (user, filters) => filters.includes(user.profession.id),

  professionLevel: (user, filters) => filters.includes(user.level.id),
};

function Users(): JSX.Element {
  const { isOn: modalFilterOpen, turnOff: closeFilterModal, turnOn: openFilterModal } = useToggle();

  const [filters, setFilters] = useState<UserFilter>({} as UserFilter);

  const hasFilter = !!Object.keys(filters).length;

  const filteredUsers = useMemo(() => {
    const activeFilterEntries = Object.entries(filters);

    if (!activeFilterEntries.length) return USERS;

    return USERS.filter((user) => {
      const allFiltersMatch = activeFilterEntries.every(([filter, values]) =>
        filterResolvers[filter as FilterKey](user, values),
      );

      return allFiltersMatch;
    });
  }, [filters]);

  return (
    <Column gap={30}>
      <Row>
        <Row>
          <GroupsOutlinedIcon fontSize="large" color="action" />

          <Typography fontSize={25} color="#555" align="center">
            Users
          </Typography>
        </Row>

        <FilterButton $hasFilter={hasFilter} onClick={openFilterModal}>
          <FilterListIcon />
        </FilterButton>
      </Row>

      <FilterModal
        isOpen={modalFilterOpen}
        close={closeFilterModal}
        setUsersFilters={setFilters}
        usersFilters={filters}
      />

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell width={300}>Name</TableCell>
              <TableCell width={400}>Age</TableCell>
              <TableCell width={300}>Profession</TableCell>
              <TableCell width={300}>Level</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {!USERS.length ? (
              <TableRow>
                <TableCell colSpan={4}>
                  <Typography fontSize={30} align="center">
                    No tasks found
                  </Typography>
                </TableCell>
              </TableRow>
            ) : (
              filteredUsers.map(
                ({
                  name,
                  age,
                  profession: { name: professionName },
                  level: { name: professionLevel },
                }) => (
                  <TableRow>
                    <TableCell>{name}</TableCell>

                    <TableCell>{age}</TableCell>

                    <TableCell>{professionName}</TableCell>

                    <TableCell>{professionLevel}</TableCell>
                  </TableRow>
                ),
              )
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Column>
  );
}

export default Users;
