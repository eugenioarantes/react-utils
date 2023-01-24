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
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import { Column, Row } from '../../../components/Containers';
import { USERS } from '../../../mocks/Users';

function Users(): JSX.Element {
  return (
    <Column gap={30}>
      <Row justifyContent="center">
        <GroupsOutlinedIcon fontSize="large" color="action" />

        <Typography fontSize={25} color="#555" align="center">
          Users
        </Typography>
      </Row>

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
