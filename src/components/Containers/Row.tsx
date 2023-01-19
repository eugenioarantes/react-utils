import { ReactNode, CSSProperties, useMemo } from 'react';
import styled, { css } from 'styled-components';

interface RowProps
  extends Pick<CSSProperties, 'gap' | 'alignItems' | 'justifyContent' | 'flexWrap'> {
  children: ReactNode;
  className?: string;
  as?: 'header' | 'div' | 'article' | 'footer';
  fullWidth?: boolean;
  title?: string;
}

const RowBase = styled.div<{ $fullWidth: boolean }>`
  display: flex;

  ${({ $fullWidth }) =>
    $fullWidth &&
    css`
      width: 100%;
    `};
`;

function Row({
  children,
  className,
  gap = 16,
  alignItems = 'center',
  as,
  title,
  fullWidth = true,
  ...styles
}: RowProps): JSX.Element {
  const actualStyles = useMemo(() => ({ ...styles, gap, alignItems }), [gap, alignItems, styles]);

  return (
    <RowBase
      title={title}
      as={as}
      style={actualStyles}
      className={className}
      $fullWidth={fullWidth}
    >
      {children}
    </RowBase>
  );
}

export default Row;
