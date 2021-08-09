import React, { FC } from 'react';
import { useTheme } from 'styled-components/native';
// components
import Input from '../input';
// assets
import SearchIcon from '../../../../assets/icons/icon/search.svg';

import type { SearchProps } from './search.interface';
import { Root, Button } from './search.styled';

const Search: FC<SearchProps> = () => {
  const theme = useTheme();

  return (
    <Root>
      <Input placeholder="Type city name..." />
      <Button>
        <SearchIcon width={32} height={32} color={theme.palette.primary} />
      </Button>
    </Root>
  );
};

export default Search;
