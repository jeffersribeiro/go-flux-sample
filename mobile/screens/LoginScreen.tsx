import { Controller } from "react-hook-form";
import { ActivityIndicator } from "react-native";
import { Button, Text, View } from "../components/Atomic/Atom";
import TextInput from "../components/Atomic/Molecule/TextInput";
import useLogin from "../hooks/useLogin";

const LoginScreen = () => {
  const { control, isSubmitting, onSubmit, handleSubmit } = useLogin();
  return (
    <View width="95%">
      <Text color="#777777" fontSize="22px">
        Informe o seu e-mail para continuar
      </Text>
      <Controller
        name="email"
        control={control}
        render={({
          fieldState: { error },
          field: { onChange, value, onBlur },
        }) => (
          <TextInput
            error={error}
            onChangeText={onChange}
            value={value}
            onBlur={onBlur}
            placeholder="Informe o seu e-mail"
            keyboardType="email-address"
          />
        )}
      />
      <Controller
        name="password"
        control={control}
        render={({
          fieldState: { error },
          field: { onChange, value, onBlur },
        }) => (
          <TextInput
            error={error}
            onChangeText={onChange}
            value={value}
            onBlur={onBlur}
            placeholder="Ensira a sua senha"
            secureTextEntry
          />
        )}
      />
      <Button backgorund="#ea1d2c" onPress={handleSubmit(onSubmit)}>
        {isSubmitting ? (
          <ActivityIndicator style={{ padding: 5 }} color="#FFF" size="large" />
        ) : (
          <Text fontSize="24px" color="white">
            Continuar
          </Text>
        )}
      </Button>
    </View>
  );
};

export default LoginScreen;
