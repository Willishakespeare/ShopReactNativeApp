import React, {Dispatch, FC, SetStateAction, useState} from 'react';
import {
  BarContainer,
  NavigationIcon,
  NavigationImage,
  NavigationSearchBar,
  SideBarContainer,
} from './styled';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../views/RootStackPrams';
import {Text} from 'react-native';

type navigationScreenProp = StackNavigationProp<RootStackParamList>;
interface Props {
  state: [sideBar: boolean, setSideBar: Dispatch<SetStateAction<boolean>>];
}

const Bar: FC<Props> = ({state}) => {
  const [sideBar, setSideBar] = state;
  const navigation = useNavigation<navigationScreenProp>();
  return (
    <>
      <BarContainer>
        <NavigationIcon
          onPress={() => {
            setSideBar(!sideBar);
          }}>
          <NavigationImage source={require(`../../assets/icons/menu.png`)} />
        </NavigationIcon>
        <NavigationIcon
          onPress={() => {
            navigation.navigate('Favorites');
          }}>
          <NavigationImage
            source={require(`../../assets/icons/shopping-cart.png`)}
          />
        </NavigationIcon>
      </BarContainer>
    </>
  );
};

export default Bar;

export const SideBar: FC<Props> = ({state}) => {
  const [sideBar, setSideBar] = state;
  return (
    <SideBarContainer>
      {Array.from({length: 10}, (v, i) => (
        <Text>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,
        </Text>
      ))}
    </SideBarContainer>
  );
};
