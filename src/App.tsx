import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ImmersiveMode from "react-native-immersive-mode";
import Home from "./views/Home";
import Search from "./views/Search";
import Favorites from "./views/Favorites";
import NavigationBar from "./components/NavigationBar";

const Stack = createNativeStackNavigator();

interface IContextProps {
  favorites: number[];
  setFavorites: Dispatch<SetStateAction<number[]>>;
}

export const FavoritesContext = createContext({} as IContextProps);

const App = () => {
  const [favorites, setFavorites] = useState<number[]>([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem("Favorites");
        setFavorites(jsonValue != null ? JSON.parse(jsonValue) : []);
      } catch (e) {
      }
    };
    ImmersiveMode.fullLayout(false);
    getData();
  }, []);
  return (
    <FavoritesContext.Provider value={{ favorites, setFavorites }}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ title: "Welcome" }}
          />
          <Stack.Screen name="Search" component={Search} />
          <Stack.Screen name="Favorites" component={Favorites} />
        </Stack.Navigator>
        <NavigationBar />
      </NavigationContainer>
    </FavoritesContext.Provider>
  );
};

export default App;
