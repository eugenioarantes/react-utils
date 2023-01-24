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
import { Column } from '../../../components/Containers';
import { USERS } from '../../../mocks/Users';

function Users(): JSX.Element {
  return (
    <Column gap={30}>
      <Typography fontSize={25} color="#555" align="center">
        Users
      </Typography>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Profession</TableCell>
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
              USERS.map(({ name, age, profession }) => (
                <TableRow>
                  <TableCell>{name}</TableCell>

                  <TableCell>{age}</TableCell>

                  <TableCell>{profession}</TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Column>
  );
}

export default Users;
