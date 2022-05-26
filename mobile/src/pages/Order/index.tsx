import { RouteProp, useRoute } from "@react-navigation/native";
import { Text, View } from "react-native";
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
    <View style={styles.container}>
      <Text>Order</Text>
      <Text>{route.params.number}</Text>
    </View>
  );
}
