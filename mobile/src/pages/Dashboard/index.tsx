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
  TouchableWithoutFeedback
} from "react-native";
import { StackParamsList } from "../../routes/app.routes";
import { theme } from "../../styles/theme";
import styles from "./styles";

export default function Dashboard() {
  const navigation = useNavigation<NativeStackNavigationProp<StackParamsList>>();
  const [number, setNumber] = useState("");

  async function openOrder() {
    if (number === "") {
      return ToastAndroid.show("Insira o número da mesa", ToastAndroid.SHORT);
    }

    navigation.navigate("Order", {
      number: number,
      order_id: '2fded6aa-2bae-412b-b54b-9cd107ca5166'
    });
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
