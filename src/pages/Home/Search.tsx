import { ChangeEvent, FC, useCallback, useEffect, useState } from 'react';

import Search from '../../components/Icons/Search';
import { useDebounce } from '../../hooks/debounce';

import { SearchInputContainer } from './styles';

interface SearchProjectProps {
  children?: never;
  term: string;
  updateTerm: (term: string) => void;
}

const SearchProject: FC<SearchProjectProps> = ({ term, updateTerm }) => {
  const [localValue, setLocalValue] = useState(term);
  const debouncedSearch = useDebounce(localValue, 300);

  useEffect(() => {
    updateTerm(debouncedSearch);
  }, [debouncedSearch, updateTerm]);

  const handleUpdate = useCallback(({ target }: ChangeEvent<HTMLInputElement>) => {
    setLocalValue(target.value);
  }, []);

  return (
    <SearchInputContainer>
      <input value={localValue} onChange={handleUpdate} placeholder="Search project" />
      <Search />
    </SearchInputContainer>
  );
};

export default SearchProject;
