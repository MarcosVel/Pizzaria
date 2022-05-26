import { Feather } from "@expo/vector-icons";
import { RouteProp, useRoute } from "@react-navigation/native";
import {
  Keyboard,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { theme } from "../../styles/theme";
import styles from "./styles";

type RouteDetailParams = {
  Order: {
    number: string | number;
    order_id: string;
  };
};

type OrderRouteProps = RouteProp<RouteDetailParams, "Order">;

export default function Order() {
  const route = useRoute<OrderRouteProps>();

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Mesa: {route.params.number}</Text>
          <TouchableOpacity>
            <Feather name="trash-2" size={28} color={theme.colors.red900} />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.select}>
          <Text style={{ fontSize: 17, color: theme.colors.white }}>
            Pizzas
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.select}>
          <Text style={{ fontSize: 17, color: theme.colors.white }}>
            Pizza de calabreza
          </Text>
        </TouchableOpacity>

        <View style={styles.wtdContainer}>
          <Text style={styles.qtdText}>Quantidade</Text>
          <TextInput
            style={[styles.select, styles.input]}
            placeholder="0"
            placeholderTextColor={theme.colors.placeholder}
            keyboardType="numeric"
          />
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}
