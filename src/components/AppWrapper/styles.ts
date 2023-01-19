import styled from 'styled-components';
import { getPadding, getScrollbarStyle } from 'css-blocks-styled-components';
import { grey } from '@mui/material/colors';
import { Row } from '../Containers';
import FullHeightContainer from '../FullHeightContainer';
import { CLOSED_SIDE_BAR_WIDTH, SIDE_BAR_WIDTH } from '../Sidebar/styles';
import { QUERIES } from '../../utils/constants';

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const AppContainer = styled.div`
  overflow-y: auto;
  height: 100%;
  flex: 1;
  width: 100%;
  isolation: isolate;

  ${getScrollbarStyle({
    scrollColor: grey[500],
    backgroundColor: '#f9f9f9',
  })}
`;

export const ContentWrapper = styled.div`
  ${getPadding(20, 16)}

  display: flex;
  flex-direction: column;
`;

export const StyledRow = styled(Row)`
  height: 100%;
`;

export const StyledFullHeightWrapper = styled(FullHeightContainer)`
  width: calc(100% - ${SIDE_BAR_WIDTH}px - 8px);

  &.closed {
    animation: grow 0.65s ease forwards;

    @keyframes grow {
      to {
        width: calc(100% - ${CLOSED_SIDE_BAR_WIDTH}px);
      }
    }

    ${QUERIES.PHONES} {
      width: 100%;

      @keyframes grow {
        to {
          width: 100%;
        }
      }
    }
  }

  ${QUERIES.PHONES} {
    width: calc(100% - 16px);
  }
`;
