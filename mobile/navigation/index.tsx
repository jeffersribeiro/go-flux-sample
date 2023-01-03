import * as React from "react";
import { AntDesign } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CatalogScreen from "../screens/CatalogScreen";
import ProfileScreen from "../screens/ProfileScreen";

import { RootStackParamList, RootTabParamList } from "../types";

import LinkingConfiguration from "./LinkingConfiguration";
import OrderScreen from "../screens/OrderScreen";
import LoginScreen from "../screens/LoginScreen";
import Header from "../components/Atomic/Organism/Header";
import ProductModal from "../screens/ProductModal";

import BagScreen from "../screens/BagScreen";
import { CartBar } from "../components/Atomic/Organism/Bag";
import { Tab } from "../components/Atomic/Organism/Tab";

export default function Navigation() {
  return (
    <NavigationContainer linking={LinkingConfiguration}>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        header: (props) => <Header {...props} />,
        contentStyle: {
          backgroundColor: "#FFF",
        },
      }}
    >
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: true, title: "Login" }}
      />
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen
          name="ProductModal"
          component={ProductModal}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="BagScreen"
          component={BagScreen}
          options={{ headerShown: true, title: "Sacola" }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
}

const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      tabBar={({ navigation }) => {
        const state = navigation.getState();

        return (
          <>
            <CartBar navigation={navigation} />
            <Tab TABS={TABS} navigation={navigation} state={state} />
          </>
        );
      }}
      initialRouteName="Catalog"
      sceneContainerStyle={{
        backgroundColor: "#FFF",
      }}
      screenOptions={{
        tabBarActiveTintColor: "#000",
      }}
    >
      {TABS.map(({ component, name, title }) => (
        <BottomTab.Screen
          key={name}
          name={name}
          options={{ title }}
          component={component}
        />
      ))}
    </BottomTab.Navigator>
  );
}

const TABS: Array<{
  name: keyof RootTabParamList;
  component: ({ navigation }: any) => JSX.Element;
  title: string;
  icon: React.ComponentProps<typeof AntDesign>["name"];
}> = [
  {
    name: "Catalog",
    component: CatalogScreen,
    title: "Inicio",
    icon: "home",
  },
  {
    name: "Order",
    component: OrderScreen,
    title: "Pedidos",
    icon: "filetext1",
  },
  {
    name: "Profile",
    component: ProfileScreen,
    title: "Perfil",
    icon: "user",
  },
];
