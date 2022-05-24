import {
  Keyboard,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import { theme } from "../../styles/theme";
import styles from "./styles";

export default function Dashboard() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Novo pedido</Text>

        <TextInput
          placeholder="Número da mesa"
          placeholderTextColor={theme.colors.placeholder}
          style={styles.input}
          keyboardType="number-pad"
        />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Abrir mesa</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}
