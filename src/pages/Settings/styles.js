import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: #FFF;
`;

export const NameContainer = styled.View`
  width: 95%;
  flex-direction: row;
  margin-top: 20px;
`;

export const IconView = styled.View`
  justify-content: center;
  align-items: center;
  padding-right: 15px;
`;
export const ContentView = styled.View`
  flex: 1;
`;

export const Title = styled.Text`
  color: #666;
  font-size: 14px;
`;

export const TextContent = styled.Text`
  color: #333;
  font-size: 18px;
  font-family: 'Roboto';
`;

export const TextEdit = styled.TextInput`
  color: #333;
  font-size: 18px;
  font-family: 'Roboto';
  border-bottom-color: #999;
  border-bottom-width: 1px;
`;

export const EditView = styled.View`
  justify-content: center;
  align-items: center;
`;

export const EditButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  padding: 15px;
`;
