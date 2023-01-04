import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { Text, View } from "../../Atom";
import { RootTabParamList } from "../../../../types";
import { BottomTabNavigationEventMap } from "@react-navigation/bottom-tabs";
import { NavigationHelpers, ParamListBase } from "@react-navigation/native";
import styled from "styled-components/native";

interface TabProps {
  navigation: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>;
  state: Readonly<{
    index: number;
  }>;
  TABS: Array<{
    name: keyof RootTabParamList;
    Component: (props: any) => JSX.Element;
    title: string;
    icon: React.ComponentProps<typeof AntDesign>["name"];
  }>;
}

export const Wrapper = styled.View`
  height: 90px;
  width: 100%;
  padding: 20px;
  align-self: center;
  flex-direction: row;
  justify-content: space-between;
  background-color: #fff;
`;

export const Tab = (props: TabProps) => {
  return (
    <>
      <Wrapper>
        {props.TABS.map(({ icon, title, name }, index) => (
          <TouchableOpacity
            onPress={() => props.navigation.navigate(name, { active: name })}
            key={name}
          >
            <View align="center">
              <AntDesign
                color={props.state.index === index ? "#050505" : "#646464dd"}
                size={30}
                name={icon}
              />
              <Text
                color={props.state.index === index ? "#050505" : "#646464dd"}
              >
                {title}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </Wrapper>
    </>
  );
};
