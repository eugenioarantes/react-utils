import { ReactNode } from 'react';
import Sidebar from '../Sidebar';
import { useToggle } from '../../hooks/toggle';
import { useWindowSize } from '../../hooks/windowSize';
import { MAX_BREAKPOINTS } from '../../utils/constants';

import Header from '../Header';

import {
  AppContainer,
  Container,
  ContentWrapper,
  StyledFullHeightWrapper,
  StyledRow,
} from './styles';

interface WrapperProps {
  children: ReactNode;
}

const AppWrapper: React.FC<WrapperProps> = ({ children }) => {
  const { width } = useWindowSize();
  const { isOn, toggle } = useToggle(width > MAX_BREAKPOINTS.MOBILE);

  return (
    <Container>
      <Header />

      <StyledRow gap={8} alignItems="stretch">
        <Sidebar open={isOn} onToggle={toggle} />
        <StyledFullHeightWrapper className={isOn ? '' : 'closed'} manageOverflow={false}>
          <AppContainer>
            <ContentWrapper>{children}</ContentWrapper>
          </AppContainer>
        </StyledFullHeightWrapper>
      </StyledRow>
    </Container>
  );
};

export default AppWrapper;
