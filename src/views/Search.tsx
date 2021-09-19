import React from "react";
import styled, { css } from "@emotion/native";
import { FC } from "react";
import Layout from "../components/Layout";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "./RootStackPrams";

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

type authScreenProp = StackNavigationProp<RootStackParamList>;
interface Props {}

const App: FC<Props> = (props) => {
  const navigation = useNavigation<authScreenProp>();
  return (
    <Layout>
      <Description>Page 2</Description>
      <Image source={{ uri: "https://picsum.photos/200" }} />
      <Button
        onPress={() => {
          navigation.navigate("Home");
        }}
      >
        <ButtonText> Back to Page 1</ButtonText>
      </Button>
    </Layout>
  );
};

export default App;
