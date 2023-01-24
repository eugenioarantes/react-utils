import { useNavigate } from 'react-router-dom';

import IconButton from '@mui/material/IconButton';
import BackArrow from '../Icons/BackArrow';

interface GoBackButtonProps {
  children?: never;
  to: string;
}

function GoBackButton({ to }: GoBackButtonProps): JSX.Element {
  const navigate = useNavigate();

  return (
    <IconButton onClick={() => navigate(to)}>
      <BackArrow />
    </IconButton>
  );
}

export default GoBackButton;
