import TextField from '@mui/material/TextField';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import Typography from '@mui/material/Typography';
import { Column, Row } from '../../../components/Containers';
import { USERS } from '../../../mocks/Users';
import { FormContainer } from './styles';

function MyProfile(): JSX.Element {
  const users = USERS;

  return (
    <Column>
      <Row justifyContent="center">
        <PermIdentityOutlinedIcon fontSize="large" color="action" />

        <Typography fontSize={25} color="#555" align="center">
          My Profile
        </Typography>
      </Row>

      <FormContainer gap={24}>
        <TextField
          required
          name="name"
          label="Name"
          disabled
          value={users[0].name}
          // onChange={({ target }) => handleTeamChange('name', target.value)}
        />

        <TextField
          required
          name="age"
          label="Age"
          disabled
          value={users[0].age}
          // onChange={({ target }) => handleTeamChange('age', target.value)}
        />

        <TextField
          required
          name="profession"
          label="Profession"
          disabled
          value={users[0].profession}
          // onChange={({ target }) => handleTeamChange('age', target.value)}
        />
      </FormContainer>
    </Column>
  );
}

export default MyProfile;
