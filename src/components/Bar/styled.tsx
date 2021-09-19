import styled from '@emotion/native';
import {Dimensions} from 'react-native';

export const BarContainer = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 120px;
  justify-content: space-between;
  align-items: center;
  padding: 30px 50px 0px 50px;
  background-color: #0b0b0b;
`;

export const NavigationIcon = styled.TouchableHighlight`
  display: flex;
  width: 25px;
  height: 25px;
  justify-content: center;
  align-items: center;
`;

export const NavigationSearchBar = styled.TextInput`
  display: flex;
  width: 60%;
  border-radius: 200px;
  height: 35px;
  padding: 0px 0px 0px 10
  px;
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
  flex: 1;
  margin-top: 120px;
  position: absolute;
  flex-direction: column;
  width: 80%;
  height: 100%;
  background-color: white;
`;
