import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
`;

export const Circle = styled.View`
  background-color: #152c54ff;
  width: 150px;
  height: 150px;
  justify-content:center;
  align-items: center;
  border-radius: 75px;
  margin-top: 20px;
`;

export const Img = styled.Image`
  justify-content:center;
  align-items: center;
  width: 100px;
  height: 45px;
 
`;

export const Content = styled.View`
  justify-content:center;
  align-items: center;
  margin-top: 10px;
`;

export const Title = styled.Text`
  justify-content:center;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
  font-family: 'Roboto';
`;

export const Details = styled.View`
  width: 90%;
  margin-top: 10px;
  justify-content:center;
  align-items: center;
`;
export const Description = styled.Text`
  margin-top: 2px;
  font-size: 14px;
  font-family: 'Roboto';
  color: #666;
`;

export const Giften  = styled.View`
  width: 100%;
  margin-top: 10px;
  justify-content:center;
  align-items: center;
`;

export const GiftenText = styled.Text`
  margin: 8px;
  font-size: 15px;
  font-family: 'Roboto';
  text-align: justify;
  color: #444;
`;

export const DescriptionText = styled.Text`
  margin: 8px;
  font-size: 14px;
  font-family: 'Roboto';
  font-style: italic;
  text-align: justify;
  color: #444;
`;
