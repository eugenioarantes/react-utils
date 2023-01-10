import ReactSelect from 'react-select';
import { convertPixelToRem } from 'css-blocks-styled-components';
import { getReactSelectStyle } from '../../components/ReactSelectStyle';
import { useState } from 'react';
import { Container } from './styles';

type optionSelect = {
  value: string;
  label: string;
} | null;


const SORT_BY_OPTIONS = [
  { value: 'A-Z-numbers', label: 'starting A-Z-numbers' },
  { value: 'numbers-A-Z', label: 'starting numbers-A-Z' },
  { value: 'newer-dates', label: 'newer dates' },
  { value: 'older-dates', label: 'older dates' },
];

const Home: React.FC = () => {
  const [sortBySelector, setSortBySelector] = useState('A-Z-numbers');

  const selectStyle = getReactSelectStyle({
    background: '#f5fafd',
    borderColor: '#296795',
    width: convertPixelToRem(165),
    color: '#296795',
  });

  const handleChangeSelector = (option: optionSelect): void => {
    if (!option) return;

    setSortBySelector(option.value);

    console.log(sortBySelector);

  };

  return (
    <Container>
      <ReactSelect
      options={SORT_BY_OPTIONS}
      defaultValue={SORT_BY_OPTIONS[0]}
      onChange={handleChangeSelector}
      isSearchable={false}
      styles={selectStyle}
    />
    </Container>
  );
};

export default Home;