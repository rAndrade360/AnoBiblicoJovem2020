import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
  
`;

export const Top = styled.View`
  flex-direction: row;
  
`;
export const Icon = styled.Image`
  width: 40px;
  height: 37px;
  margin: 10px;
`;

export const Title = styled.Text`
  text-transform: uppercase;
  color: #152c54ff;
  font-size: 44px;
  font-family: 'Roboto' ;
`;

export const Alternate = styled.TouchableOpacity`
    background-color:#152c54ff;
    border-color: #152c54ff;
    border-radius: 4px;
    height: 30px;
    width: 35px;
    margin: 10px ;
    margin-top: 20px; 
    justify-content: center; 
    align-items: center;
    border-width: 2px; 
`;

export const Arr = styled.View`
justify-content: flex-end;
width: 100%;
align-items: center;
`;


export const Bottom = styled.View`
flex: 1;
`;


export const ModalView = styled.View`
    flex-direction: column;
   justify-content: center;
   align-items: center;
    justify-content: space-around;
    background-color: #152c54ff;
    flex: 1;
`;

export const MonthView = styled.View`
    flex-direction: row;
   align-items: center;
    justify-content: space-around;
    width: 100%;
    flex: 1;
`;

export const Option = styled.TouchableOpacity`
    background-color: #152c54ff;
    border-color: #fff;
    border-radius: 4px;
    border-width: 2px;
    height: 80px;
    width: 80px;
    margin: 10px ;
    margin-top: 10px; 
    justify-content: center; 
    
`;

export const OptionText = styled.Text`
    color: #fff;
    font-size: 12px;
    font-weight: bold;
    text-align: center;
    text-transform: uppercase;
`;

export const TouchableView = styled.View`
    flex-direction: row;
   justify-content: center;
   align-items: center;
    justify-content: space-around;
    
    flex: 1;
`;

export const ModalButtom = styled.TouchableHighlight`
    width: 100%;
    background-color: #ff0000;
    width: 90%;
    height: 47px;
    border-radius: 7px;
    margin-top: 10px;
    justify-content: center;
    elevation: 2;
`;

export const ModalButtomText = styled.Text`
    font-size: 20px;
    text-align: center;
    color: #FFF;
    font-weight: bold;
`;

export const SelectAll = styled.View`
   flex-direction: row;
    margin: 10px 10px 0px 10px;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
`;


export const Captions = styled.Text`
    font-size: 20px;
    margin-left: 20px;
    color: #152c54ff;
`;
