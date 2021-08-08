import React, { FC } from 'react';

import type { InputProps } from './input.interface';
import { Root, TextField } from './input.styled';

const Input: FC<InputProps> = () => {
  return (
    <Root>
      <TextField />
    </Root>
  );
};

export default Input;
