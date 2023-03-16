import { Link } from 'react-router-dom';
import SettingsIcon from '@mui/icons-material/Settings';
import { StyledRow, Title, StyledIconButton } from './styles';

const Header: React.FC = () => {
  return (
    <StyledRow justifyContent="space-between">
      <Link to="/">
        <Title>MY SYSTEM</Title>
      </Link>
      <Link to="/settings">
        <StyledIconButton>
          <SettingsIcon />
        </StyledIconButton>
      </Link>
    </StyledRow>
  );
};

export default Header;
