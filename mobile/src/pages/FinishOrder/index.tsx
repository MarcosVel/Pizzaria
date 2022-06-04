import { Feather } from "@expo/vector-icons";
import { RouteProp, useRoute } from "@react-navigation/native";
import { Text, TouchableOpacity, View } from "react-native";
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

  async function handleFinish() {
    alert("Finish order")
  }

  return (
    <View style={styles.container}>
      <Text style={styles.alert}>Você deseja finalizar este pedido?</Text>
      <Text style={styles.title}>Mesa {route.params?.number}</Text>

      <TouchableOpacity style={styles.button}>
        <Feather name="shopping-cart" size={20} color={theme.colors.dark900} />
        <Text style={styles.textButton} onPress={handleFinish}>Finalizar pedido</Text>
      </TouchableOpacity>
    </View>
  );
}
