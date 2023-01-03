import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity, View } from "react-native";
import { Text } from "../../Atom";
import { RootTabParamList } from "../../../../types";
import { BottomTabNavigationEventMap } from "@react-navigation/bottom-tabs";
import { NavigationHelpers, ParamListBase } from "@react-navigation/native";

interface TabProps {
  navigation: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>;
  state: Readonly<{
    index: number;
  }>;
  TABS: Array<{
    name: keyof RootTabParamList;
    component: ({ navigation }: any) => JSX.Element;
    title: string;
    icon: React.ComponentProps<typeof AntDesign>["name"];
  }>;
}

export const Tab = (props: TabProps) => {
  return (
    <>
      <View
        style={{
          height: 90,
          width: "100%",
          padding: 20,
          alignSelf: "center",
          flexDirection: "row",
          justifyContent: "space-between",
          backgroundColor: "#FFF",
        }}
      >
        {props.TABS.map(({ icon, title, name }, index) => (
          <TouchableOpacity
            onPress={() => props.navigation.navigate(name, { active: name })}
            style={{
              alignSelf: "center",
              alignItems: "center",
            }}
            key={name}
          >
            <AntDesign
              color={props.state.index === index ? "#050505" : "#646464dd"}
              size={30}
              style={{ marginBottom: -3 }}
              name={icon}
            />
            <Text color={props.state.index === index ? "#050505" : "#646464dd"}>
              {title}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </>
  );
};
