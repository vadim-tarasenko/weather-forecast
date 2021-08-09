import styled from 'styled-components/native';

export const Root = styled.View`
  flex: 1;
  background-color: #fff;
`;

export const TextField = styled.TextInput`
  flex: 1;
  padding: 0 20px;
  font-size: 20px;
  border: 1px solid ${props => props.theme.palette.lightGray};
`;
