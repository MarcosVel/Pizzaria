import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useState } from "react";
import {
  Keyboard,
  SafeAreaView,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import { StackParamsList } from "../../routes/app.routes";
import { api } from "../../services/api";
import { theme } from "../../styles/theme";
import styles from "./styles";

export default function Dashboard() {
  const navigation =
    useNavigation<NativeStackNavigationProp<StackParamsList>>();
  const [number, setNumber] = useState("");

  async function openOrder() {
    if (number === "") {
      return ToastAndroid.show("Insira o número da mesa", ToastAndroid.SHORT);
    }

    const response = await api.post("/order", {
      table: Number(number),
    });

    navigation.navigate("Order", {
      number: number,
      order_id: response.data.id,
    });

    setNumber("");
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Novo pedido</Text>

        <TextInput
          placeholder="Número da mesa"
          placeholderTextColor={theme.colors.placeholder}
          style={styles.input}
          keyboardType="number-pad"
          value={number}
          onChangeText={setNumber}
        />

        <TouchableOpacity style={styles.button} onPress={openOrder}>
          <Text style={styles.buttonText}>Abrir mesa</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}
