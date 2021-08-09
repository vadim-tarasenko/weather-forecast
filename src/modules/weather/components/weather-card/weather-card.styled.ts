import styled from 'styled-components/native';

export const Root = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px 0 10px;
  height: 45px;
  border-radius: 6px;
  background-color: #85caff;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.08);
`;

export const DayName = styled.Text`
  color: #fff;
  font-size: 14px;
`;

export const Degree = styled.Text`
  color: #fff;
  font-size: 20px;
`;
