import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 20px;
  justify-content: space-around;
`;

export const FormView = styled.View``;

export const ShapeWrapper = styled.View`
  width: 100%;
  height: 50px;
  align-items: center;
`;

export const Input = styled.TextInput`
  height: 50px;
  background-color: blue;
  margin: 10px;
`;

export const SimpleText = styled.Text`
  padding: 10px;
  font-size: 16px;
`;

export const ErrorText = styled.Text`
  padding: 5px 0 10px 10px;
  color: #ff5555;
`;

export const CheckBoxWrapper = styled.View`
  display: flex;
  justify-content: space-between;
  background-color: magenta;
`;
