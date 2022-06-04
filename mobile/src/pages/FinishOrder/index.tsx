import { Feather } from "@expo/vector-icons";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Text, ToastAndroid, TouchableOpacity, View } from "react-native";
import { StackParamsList } from "../../routes/app.routes";
import { api } from "../../services/api";
import { theme } from "../../styles/theme";
import styles from "./styles";

type RouteDetailParams = {
  FinishOrder: {
    number: string | number;
    order_id: string;
  };
};

type FinishOrderRouteProp = RouteProp<RouteDetailParams, "FinishOrder">;

export default function FinishOrder() {
  const route = useRoute<FinishOrderRouteProp>();
  const navigation =
    useNavigation<NativeStackNavigationProp<StackParamsList>>();

  async function handleFinish() {
    try {
      await api.put("/order/send", {
        order_id: route.params?.order_id,
      });

      ToastAndroid.show(
        `Pedido realizado mesa: ${route.params?.number}`,
        ToastAndroid.SHORT
      );

      navigation.popToTop();
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.alert}>Você deseja finalizar este pedido?</Text>
      <Text style={styles.title}>Mesa: {route.params?.number}</Text>

      <TouchableOpacity style={styles.button}>
        <Feather name="shopping-cart" size={20} color={theme.colors.dark900} />
        <Text style={styles.textButton} onPress={handleFinish}>
          Finalizar pedido
        </Text>
      </TouchableOpacity>
    </View>
  );
}
