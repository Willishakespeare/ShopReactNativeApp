import React, { FC } from "react";
import { StatusBar } from "react-native";
import { ContainerLayout, ContainerLayoutContainer } from "./styled";

interface Props {}

const Layout: FC<Props> = ({ children }) => (
  <ContainerLayout>
    <StatusBar
      animated={true}
      translucent={true}
      backgroundColor="transparent"
      hidden={false}
      barStyle="light-content"
    />
    <ContainerLayoutContainer>{children}</ContainerLayoutContainer>
  </ContainerLayout>
);

export default Layout;
