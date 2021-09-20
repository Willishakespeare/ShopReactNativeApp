import styled from '@emotion/native';
import {Dimensions} from 'react-native';

export const BarContainer = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 120px;
  justify-content: space-between;
  align-items: center;
  padding: 30px 40px 0px 40px;
  background-color: #0b0b0b;
`;

export const NavigationIcon = styled.TouchableHighlight`
  display: flex;
  width: 50px;
  height: 50px;
  justify-content: center;
  align-items: center;
  padding: 15px 15px;
`;

export const NavigationSearchBar = styled.TextInput`
  display: flex;
  width: 60%;
  border-radius: 200px;
  height: 35px;
  padding: 0px 0px 0px 10 px;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

export const NavigationImage = styled.Image`
  width: 100%;
  height: 100%;
`;

export const SideBarContainer = styled.ScrollView`
  display: flex;
  top: 0;
  left: 0;
  flex: 1;
  margin-top: 120px;
  position: absolute;
  flex-direction: column;
  width: 80%;
  height: 100%;
  background-color: white;
`;

type Props = {
  selected?: boolean;
};

export const SideBarContainerOption = styled.TouchableHighlight<Props>`
  display: flex;
  align-items: flex-start;
  width: 100%;
  margin: 5px 0px 0px 0px;
  background-color: ${({selected}) => (selected ? '#0b0b0b' : 'white')};
`;

export const SideBarContainerText = styled.Text<Props>`
  color: ${({selected}) => (selected ? 'white' : '#0b0b0b')};
  font-size: 20px;
  padding: 20px 20px;
`;
