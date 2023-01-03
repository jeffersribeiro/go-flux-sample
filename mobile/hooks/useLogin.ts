import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import Login from "../interfaces/Login";
import * as api from "../services/api/session";
import { useSnackContext } from "../contexts/SnackContext";
import { loginValidator } from "../validators/session.validator";
import axios from "axios";
import { setToken } from "../helpers/userToken";
import { useAuthContext } from "../contexts/AuthContext";
import { useNavigation } from "@react-navigation/native";

const useLogin = () => {
  const navigation = useNavigation();
  const { snackBar } = useSnackContext();
  const { setUser } = useAuthContext();
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<Login>({
    resolver: yupResolver(loginValidator),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: Login) => {
    try {
      const session = await api.login(data);

      setUser(session.user);
      setToken(session.token);
      navigation.goBack();
    } catch (error) {
      if (axios.isAxiosError(error)) {
        snackBar(error.response?.data.message);
      }
    }
  };

  return {
    errors,
    control,
    onSubmit,
    isSubmitting,
    handleSubmit,
  };
};

export default useLogin;
