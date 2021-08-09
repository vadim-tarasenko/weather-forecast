import React, { FC } from 'react';
// components
import Input from '../input';

import type { SearchProps } from './search.interface';
import { Root, Button } from './search.styled';

const Search: FC<SearchProps> = () => (
  <Root>
    <Input />
    <Button />
  </Root>
);

export default Search;
