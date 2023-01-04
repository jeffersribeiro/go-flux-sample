import { useNavigation } from "@react-navigation/native";
import { Button, Text, View } from "../components/Atomic/Atom";
import { OrderHistoric } from "../components/Atomic/template/OrderHistoric";
import { useAuthContext } from "../contexts/AuthContext";
import useHistoricOrder from "../hooks/useHistoricOrder";

const OrderScreen = () => {
  const navigation = useNavigation();
  const { user } = useAuthContext();
  const { orders } = useHistoricOrder();

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

  return <OrderHistoric DATA={orders} />;
};

export default OrderScreen;
