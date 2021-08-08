import styled from 'styled-components/native';

export const Root = styled.View`
  position: absolute;
  background-color: transparent;
  flex-direction: row;
  width: 100%;
  bottom: 34px;
`;

export const Tab = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  flex: 1;
  border-radius: 60px;
  background: ${props => props.theme.palette.primary};
  color: #fff;
  height: 50px;
`;
