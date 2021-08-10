import React, { FC } from 'react';
import { useTheme } from 'styled-components/native';

import type { InputProps } from './input.interface';
import { Root, TextField } from './input.styled';

const Input: FC<InputProps> = ({ ...props }) => {
  const theme = useTheme();
  return (
    <Root style={theme.elevation.small}>
      <TextField {...props} />
    </Root>
  );
};

export default Input;
