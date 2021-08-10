import styled from 'styled-components/native';

export const Root = styled.View`
  flex-direction: row;
  width: 100%;
  height: 50px;
`;

export const Button = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  width: 60px;
  flex-grow: 0;
  border: 1px solid ${props => props.theme.palette.primary};
  margin-left: 5px;
  border-radius: 30px;
  background-color: #fff;
`;
