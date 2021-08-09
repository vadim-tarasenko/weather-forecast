import React, { FC } from 'react';

import type { InputProps } from './input.interface';
import { Root, TextField } from './input.styled';

const Input: FC<InputProps> = ({ ...props }) => {
  return (
    <Root>
      <TextField {...props} />
    </Root>
  );
};

export default Input;
