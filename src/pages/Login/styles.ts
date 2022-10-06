import { convertPixelToRem, flex, getMargin } from 'css-blocks-styled-components';
import styled from 'styled-components';

import { Form } from 'formik';

import ActionButton from '../../components/ActionButton';

import { theme } from '../../styles/theme';

export const Container = styled.div`
  display: flex;
  align-items: center;
  min-height: 100%;
  background: ${theme.gradients.main};
  padding-bottom: ${convertPixelToRem(25)};
`;

export const PageWrapper = styled.div`
  margin: 0 auto;
  min-width: 30%;
`;

export const TitleSignIn = styled.h1`
  padding-top: ${convertPixelToRem(60)};
  font-size: ${convertPixelToRem(23)};
  font-weight: 600;
  text-align: center;
  text-transform: uppercase;

  color: ${theme.colors.textSecondary};
`;

export const StyledForm = styled(Form)`
  width: 85%;
  margin: 0 auto;
`;

export const InputLabel = styled.label`
  ${getMargin(15, 0, 8)};
  font-size: ${convertPixelToRem(19)};
  color: ${theme.colors.textSecondary};
  display: block;
`;

export const StyledActionButton = styled(ActionButton)`
  margin-top: ${convertPixelToRem(25)};
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LoadingImage = styled.img`
  margin-right: ${convertPixelToRem(10)};
  width: ${convertPixelToRem(25)};
  height: ${convertPixelToRem(25)};
`;

export const SpaceComponent = styled.div`
  ${getMargin(0, 5)};
  width: ${convertPixelToRem(25)};
  height: ${convertPixelToRem(25)};
`;
