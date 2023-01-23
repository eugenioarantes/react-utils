import { CSSProperties } from 'react';

import { grey } from '@mui/material/colors';
import { GroupBase, StylesConfig } from 'react-select';
import { ReactSelectOption } from './types';

interface ReactSelectStyleProps {
  width: string | number;
}

export function getBaseReactSelectStyle({
  width,
}: ReactSelectStyleProps): StylesConfig<ReactSelectOption, boolean, GroupBase<ReactSelectOption>> {
  const style = {
    control: (styles: CSSProperties) => ({
      ...styles,
      background: '#fff',
      borderRadius: '4px',
      borderColor: grey[400],
      fontSize: '1rem',
      width,
      minHeight: 45,
    }),

    container: (styles: CSSProperties) => ({
      ...styles,
      width: '100%',
    }),

    singleValue: (styles: CSSProperties) => ({
      ...styles,
      color: 'rgba(0, 0, 0, 0.6)',
    }),

    indicatorSeparator: (styles: CSSProperties) => ({
      ...styles,
      display: 'none',
    }),

    dropdownIndicator: (styles: CSSProperties) => ({
      ...styles,
      color: grey[600],
      padding: '0',
      marginRight: '8px',
    }),

    menu: (styles: CSSProperties) => ({
      ...styles,
      fontSize: '1rem',
      margin: '0',
      borderRadius: '4px',
      color: 'rgba(0, 0, 0, 0.6)',
    }),

    menuPortal: (styles: CSSProperties) => ({
      ...styles,
      zIndex: 9999,
    }),
  };

  return style as StylesConfig<ReactSelectOption, boolean, GroupBase<ReactSelectOption>>;
}
