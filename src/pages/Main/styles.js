import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: #152c54ff;
  flex: 1;
`;
export const Header = styled.View`
  background-color: #152c54ff;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Action = styled.View`
  background-color: #fff;
  flex: 1;
  align-items: center;
`;

export const Top = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Bot = styled.View`
  align-items: flex-end;
  width: 100%;
`;

export const Logo = styled.Image`
  height: 130px;
  width: 160px;
  margin-top: 10px;
`;

export const Logo2 = styled.Image`
  margin: 10px 15px;
  width: 90px;
  height: 40px;
  margin-bottom: 20px;
`;

export const Hello = styled.Text`
    color: #FFF;
    font-size: 18px;
    justify-content:center;
    align-items: center;
`;

export const Name = styled.Text`
    color: #FFF;
    font-size: 18px;
    font-weight: bold;
    text-align: center;
`;

export const Intro = styled.Text`
    color: #999;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    margin-top: 20px;
    text-transform: uppercase;
`;

export const Verso = styled.Text`
    color: #555;
    font-size: 40px;
    font-weight: bold;
    text-align: center;
    margin-top: 20px;
`;

export const Button = styled.TouchableOpacity`
    background-color: ${props => props.bgcolor? props.bgcolor: '#152c54ff'};
    width: 90%;
    height: 47px;
    border-radius: 7px;
    margin-top: 20px;
    justify-content: center;
`;

export const Act = styled.Text`
    color: #FFF;
    font-size: 18px;
    font-weight: bold;
    text-align: center;
    text-transform: uppercase;
`;

export const Option = styled.TouchableOpacity`
    background-color: #FFF;
    border-color: #152c54ff;
    border-radius: 4px;
    height: 70px;
    width: 70px;
    margin: 10px ;
    margin-top: 20px; 
    justify-content: center;  
`;

export const Options = styled.View`
    flex-direction: row;
  justify-content: space-around;
 
`;