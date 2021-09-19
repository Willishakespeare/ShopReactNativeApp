import React, { useContext } from "react";
import styled, { css } from "@emotion/native";
import { FC } from "react";
import Layout from "../components/Layout";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "./RootStackPrams";
import { FavoritesContext } from "../App";
import { Text } from "react-native";
import FetchHook from "../hooks/fetch";

const Description = styled.Text({
  color: "hotpink",
});

const Image = styled.Image`
  padding: 40px;
`;

const Button = styled.TouchableHighlight`
  background-color: #2f89ff;
  border-radius: 5px;
  padding: 8px 20px;
  margin: 15px 0;
`;
const ButtonText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #fff;
`;

interface Produc {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

type authScreenProp = StackNavigationProp<RootStackParamList>;
interface Props {}

const App: FC<Props> = (props) => {
  const { data, loading, errors } = FetchHook(
    "https://fakestoreapi.com/products"
  );
  const { favorites, setFavorites } = useContext(FavoritesContext);
  const navigation = useNavigation<authScreenProp>();
  return (
    <Layout>
      <Description>Page 2</Description>
      <Image source={{ uri: "https://picsum.photos/200" }} />
      {data
        ?.filter((item: Produc) => favorites.find((find) => find === item.id))
        .map((item: Produc) => (
          <Text> {item.title}</Text>
        ))}
    </Layout>
  );
};

export default App;
