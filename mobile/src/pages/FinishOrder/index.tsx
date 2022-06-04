import { Feather } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";
import { theme } from "../../styles/theme";
import styles from "./styles";

export default function FinishOrder() {
  return (
    <View style={styles.container}>
      <Text style={styles.alert}>Você deseja finalizar este pedido?</Text>
      <Text style={styles.title}>Mesa 30</Text>

      <TouchableOpacity style={styles.button}>
        <Feather name="shopping-cart" size={20} color={theme.colors.dark900} />
        <Text style={styles.textButton}>Finalizar pedido</Text>
      </TouchableOpacity>
    </View>
  );
}
