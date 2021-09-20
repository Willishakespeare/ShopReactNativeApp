import React, {FC, useState} from 'react';
import {StatusBar} from 'react-native';
import Bar, {SideBar} from '../Bar';
import NavigationBar from '../NavigationBar';
import {ContainerLayout, ContainerLayoutContainer} from './styled';

interface Props {}

const Layout: FC<Props> = ({children}) => {
  const [sideBar, setSideBar] = useState(false);
  return (
    <ContainerLayout>
      <StatusBar
        animated={true}
        translucent={true}
        backgroundColor="transparent"
        hidden={false}
        barStyle="light-content"
      />
      <Bar state={[sideBar, setSideBar]} />
      <ContainerLayoutContainer>{children}</ContainerLayoutContainer>
      <NavigationBar />
      {sideBar && <SideBar state={[sideBar, setSideBar]} />}
    </ContainerLayout>
  );
};

export default Layout;
