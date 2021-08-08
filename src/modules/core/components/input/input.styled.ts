import styled from 'styled-components/native';

export const Root = styled.View`
  height: 50px;
  width: 100%;
  background-color: #fff;
`;

export const TextField = styled.TextInput`
  flex: 1;
  padding: 0 20px;
  font-size: 20px;
  border: 1px solid ${props => props.theme.palette.lightGray};
`;
