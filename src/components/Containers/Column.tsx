import { ReactNode, CSSProperties, useMemo } from 'react';
import styled from 'styled-components';

interface ColumnProps
  extends Pick<CSSProperties, 'gap' | 'alignItems' | 'justifyContent' | 'flexWrap' | 'position'> {
  children: ReactNode;
  className?: string;
  as?: 'header' | 'div' | 'article' | 'footer';
  fullHeight?: boolean;
  title?: string;
}

const ColumnBase = styled.div<{ $fullHeight?: boolean }>`
  display: flex;
  flex-direction: column;
  width: 100%;

  ${({ $fullHeight }) => $fullHeight && 'height: 100%;'};
`;

function Column({
  children,
  className,
  as,
  title,
  fullHeight,
  gap = 16,
  ...styles
}: ColumnProps): JSX.Element {
  const actualStyles = useMemo(() => ({ ...styles, gap }), [gap, styles]);

  return (
    <ColumnBase
      title={title}
      as={as}
      style={actualStyles}
      $fullHeight={fullHeight}
      className={className}
    >
      {children}
    </ColumnBase>
  );
}

export default Column;
