import { Dispatch, SetStateAction } from 'react';

import Dialog from '@mui/material/Dialog';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';

import { Column, Row } from '../../../../components/Containers';
import Select from '../../../../components/Select';

import { Container, StyledButton } from './styles';
import { removeUndefinedProperties } from '../../../../utils/object';
import { PROFESSIONS } from '../../../../mocks/Users';
import { UserFilter } from '..';

interface FilterProjectsProps {
  isOpen: boolean;
  close: () => void;
  setUsersFilters: Dispatch<SetStateAction<UserFilter>>;
  usersFilters: UserFilter;
}

function FilterProjects({
  close,
  isOpen,
  setUsersFilters,
  usersFilters,
}: FilterProjectsProps): JSX.Element {
  const handleChange = (filters: string[], filterKey: keyof UserFilter): void => {
    setUsersFilters(
      (old) =>
        removeUndefinedProperties({
          ...old,
          [filterKey]: filters.length ? filters : undefined,
        }) as UserFilter,
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
              id="select-owner-filter"
              options={PROFESSIONS}
              value={usersFilters.profession || []}
              onChange={(newFilter) => handleChange(newFilter, 'profession')}
              placeholder="Profession filter"
              label="Profession"
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
