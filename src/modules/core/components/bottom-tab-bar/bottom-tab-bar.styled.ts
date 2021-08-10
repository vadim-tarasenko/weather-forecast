import styled, { css } from 'styled-components/native';

export const Root = styled.View`
  position: absolute;
  background-color: transparent;
  flex-direction: row;
  width: 100%;
  bottom: 34px;
`;

export const Tab = styled.TouchableOpacity.attrs({
  activeOpacity: 0.9,
})<{ isActive: boolean }>`
  align-items: center;
  justify-content: center;
  flex: 1;
  border-radius: 60px;
  background: ${props => props.theme.palette.primary};
  color: #fff;
  height: 50px;

  ${props =>
    !props.isActive &&
    css`
      background-color: #63adee;
    `}
`;

export const TabText = styled.Text`
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
`;
