import { Link } from 'react-router-dom';
import { StyledRow, Title } from './styles';

const Header: React.FC = () => {
  return (
    <StyledRow justifyContent="space-between">
      <Link to="/">
        <Title>Header System</Title>
      </Link>
      <Title>Other informations</Title>
    </StyledRow>
  );
};

export default Header;
