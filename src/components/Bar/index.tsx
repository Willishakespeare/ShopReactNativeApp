import React, {Dispatch, FC, SetStateAction, useState} from 'react';
import {
  BarContainer,
  NavigationIcon,
  NavigationImage,
  NavigationSearchBar,
  SideBarContainer,
  SideBarContainerOption,
  SideBarContainerText,
} from './styled';
import {useNavigation, useRoute} from '@react-navigation/native';
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

const SideBarOptions = [
  {title: `Inicio`, value: `Home`},
  {title: `Buscar`, value: `Search`},
  {title: `Categorias`, value: `Category`},
  {title: `Notificaciones`, value: `Notify`},
  {title: `Mis Compras`, value: `MyShop`},
  {
    title: `Favoritos`,
    value: `Favorites`,
  },
];

export const SideBar: FC<Props> = ({}) => {
  const navigation = useNavigation<any>();
  const route = useRoute();
  return (
    <SideBarContainer>
      {SideBarOptions.map((item, i) => (
        <SideBarContainerOption
          onPress={() => {
            navigation.navigate(item.value);
          }}
          selected={route.name === item.value}
          key={`ContentSideBarOptions${i + 1}`}>
          <SideBarContainerText selected={route.name === item.value}>
            {item.title}
          </SideBarContainerText>
        </SideBarContainerOption>
      ))}
    </SideBarContainer>
  );
};
