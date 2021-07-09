import styled from 'styled-components/native';

export const List = styled.FlatList`
  width: 100%;
`;

export const ListItem = styled.View`
  padding: 20px 0 20px 10px;
  margin: 0;
`;

export const Separator = styled.View`
  height: 1px;
  background-color: #44475a;
  margin-left: 10px;
`;

export const Title = styled.Text`
  font-size: 16px;
`;

export const Description = styled.Text`
  font-size: 14px;
  font-style: italic;
  padding: 10px 0 0 20px;
`;
