import styled from 'styled-components/native';

export const Root = styled.View`
  padding: 10px;
`;

export const Text = styled.Text`
  color: ${props => props.theme.palette.gray};
  font-size: 18px;
  margin: 5px 0;
`;
