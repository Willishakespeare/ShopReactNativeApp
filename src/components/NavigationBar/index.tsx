import React, {FC} from 'react';
import {
  NavigationBarContainer,
  NavigationIcon,
  NavigationImage,
} from './styled';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../views/RootStackPrams';

type navigationScreenProp = StackNavigationProp<RootStackParamList>;
interface Props {}

const NavigationBar: FC<Props> = () => {
  const navigation = useNavigation<navigationScreenProp>();
  return (
    <NavigationBarContainer>
      <NavigationIcon
        onPress={() => {
          navigation.navigate('Search');
        }}>
        <NavigationImage source={require(`../../assets/icons/search.png`)} />
      </NavigationIcon>
      <NavigationIcon
        onPress={() => {
          navigation.navigate('Home');
        }}>
        <NavigationImage source={require(`../../assets/icons/home.png`)} />
      </NavigationIcon>
      <NavigationIcon
        onPress={() => {
          navigation.navigate('Favorites');
        }}>
        <NavigationImage source={require(`../../assets/icons/heart.png`)} />
      </NavigationIcon>
      <NavigationIcon
        onPress={() => {
          navigation.navigate('User');
        }}>
        <NavigationImage source={require(`../../assets/icons/user.png`)} />
      </NavigationIcon>
    </NavigationBarContainer>
  );
};

export default NavigationBar;
