import { FC, ReactNode } from 'react';
import { useFitScreen } from '../../hooks/fitScreen';

import { Container } from './styles';

interface FullHeightContainerProps {
  bottomOffset?: number;
  manageOverflow?: boolean;
  className?: string;
  children: ReactNode;
}

const FullHeightContainer: FC<FullHeightContainerProps> = ({
  children,
  bottomOffset = 0,
  manageOverflow = true,
  className,
  ...props
}) => {
  const [containerMaxHeight, setRef] = useFitScreen({ bottomDistance: bottomOffset });

  return (
    <Container
      $manageOverflow={manageOverflow}
      className={className}
      $maxHeight={containerMaxHeight}
      ref={setRef}
      {...props}
    >
      {children}
    </Container>
  );
};

export default FullHeightContainer;
