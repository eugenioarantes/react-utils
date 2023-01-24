import TextField from '@mui/material/TextField';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import Typography from '@mui/material/Typography';
import { Column, Row } from '../../../components/Containers';
import { USERS } from '../../../mocks/Users';
import { FormContainer } from './styles';

function MyProfile(): JSX.Element {
  const user = USERS[0];

  const editedUser = Object.fromEntries(Object.entries(user).filter(([key, _]) => key !== 'id'));

  return (
    <Column>
      <Row justifyContent="center">
        <PermIdentityOutlinedIcon fontSize="large" color="action" />

        <Typography fontSize={25} color="#555" align="center">
          My Profile
        </Typography>
      </Row>

      <FormContainer gap={24}>
        {Object.entries(editedUser).map(([key, val]) => (
          <TextField
            required
            name={val}
            label={key.charAt(0).toUpperCase() + key.slice(1)}
            disabled
            value={val}
          />
        ))}
      </FormContainer>
    </Column>
  );
}

export default MyProfile;
