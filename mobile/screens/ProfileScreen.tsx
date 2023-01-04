import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { Button, Text, View } from "../components/Atomic/Atom";
import { useAuthContext } from "../contexts/AuthContext";
import { removeToken } from "../helpers/userToken";
import * as api from "../services/api/session";

const ProfileScreen = () => {
  const navigation = useNavigation();
  const { user, setUser } = useAuthContext();

  if (!user)
    return (
      <View>
        <Button
          onPress={() => {
            navigation.navigate("Login");
          }}
        >
          <Text fontSize="22px" color="#5e5e5e">
            Já tem um endereço salvo?
          </Text>
          <Text fontSize="15px" color="gray">
            Entre na sua conta para selecionar seu endereço
          </Text>
          <View width="auto">
            <Text fontSize="24px" color="red">
              Entrar ou cadastrar
            </Text>
          </View>
        </Button>
      </View>
    );

  return (
    <View>
      <View>
        <TouchableOpacity>
          <View
            style={{
              alignItems: "center",
              justifyContent: "space-between",
            }}
            width="100%"
            direction="row"
          >
            <View
              style={{
                alignItems: "center",
                justifyContent: "space-between",
              }}
              direction="row"
            >
              <AntDesign
                color="#717171"
                style={{ marginRight: 10 }}
                size={26}
                name="setting"
              />
              <Text fontSize="22px" color="#717171">
                Meus Dados
              </Text>
            </View>
            <AntDesign color="#717171" size={20} name="right" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View
            style={{
              alignItems: "center",
              justifyContent: "space-between",
            }}
            width="100%"
            direction="row"
          >
            <View
              style={{
                alignItems: "center",
                justifyContent: "space-between",
              }}
              direction="row"
            >
              <AntDesign
                color="#717171"
                style={{ marginRight: 10 }}
                size={26}
                name="creditcard"
              />
              <Text fontSize="22px" color="#717171">
                Pagamentos
              </Text>
            </View>
            <AntDesign color="#717171" size={20} name="right" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View
            style={{
              alignItems: "center",
              justifyContent: "space-between",
            }}
            width="100%"
            direction="row"
          >
            <View
              style={{
                alignItems: "center",
                justifyContent: "space-between",
              }}
              direction="row"
            >
              <Feather
                name="shield"
                color="#717171"
                style={{ marginRight: 10 }}
                size={26}
              />
              <Text fontSize="22px" color="#717171">
                Segurança
              </Text>
            </View>
            <AntDesign color="#717171" size={20} name="right" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            api.logout().then(() => {
              removeToken();
              setUser(undefined);
            });
          }}
        >
          <View
            style={{
              alignItems: "center",
              justifyContent: "space-between",
            }}
            width="100%"
            direction="row"
          >
            <View
              style={{
                alignItems: "center",
                justifyContent: "space-between",
              }}
              direction="row"
            >
              <Ionicons
                name="ios-exit-outline"
                style={{ marginRight: 10 }}
                size={26}
                color="#717171"
              />
              <Text fontSize="22px" color="#717171">
                Sair
              </Text>
            </View>
            <AntDesign color="#717171" size={20} name="right" />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfileScreen;
