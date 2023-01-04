import { AntDesign } from "@expo/vector-icons";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { Text, View } from "../../Atom";

const ViewWrapper = styled.View`
  width: 100%;
  height: 100px;
  background-color: #fff;
  padding: 10px 10px 20px 10px;
  flex-direction: row;
  align-items: flex-end;
  border-bottom-width: 1px;
  border-style: solid;
  border-color: rgba(0, 0, 0, 0.1);
`;

const Header = ({ navigation, options: { title } }: NativeStackHeaderProps) => (
  <ViewWrapper>
    <View width="10%">
      <TouchableOpacity onPress={navigation.goBack}>
        <AntDesign size={30} color="#ea1d2c" name="left" />
      </TouchableOpacity>
    </View>
    <View
      style={{
        height: "auto",
        alignItems: "center",
        alignSelf: "flex-end",
      }}
      width="70%"
    >
      <Text>{title}</Text>
    </View>
    <View width="10%">
      <Text>{}</Text>
    </View>
  </ViewWrapper>
);

export default Header;
