import { Feather } from "@expo/vector-icons";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import {
  Keyboard,
  Modal,
  SafeAreaView,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { ModalPicker } from "../../components/ModalPicker";
import { api } from "../../services/api";
import { theme } from "../../styles/theme";
import styles from "./styles";

type RouteDetailParams = {
  Order: {
    number: string | number;
    order_id: string;
  };
};

export type CategoryProps = {
  id: string;
  name: string;
};

type OrderRouteProps = RouteProp<RouteDetailParams, "Order">;

export default function Order() {
  const route = useRoute<OrderRouteProps>();
  const navigation = useNavigation();
  const [categories, setCategories] = useState<CategoryProps[] | []>([]);
  const [categorySelected, setCategorySelected] = useState<CategoryProps>();
  const [amount, setAmount] = useState("1");
  const [modalCategoryOpen, setModalCategoryOpen] = useState(false);

  useEffect(() => {
    async function loadInfo() {
      const response = await api.get("/category");

      setCategories(response.data);
      setCategorySelected(response.data[0]);
    }

    loadInfo();
  }, []);

  function handleChangeCategory(item: CategoryProps) {
    setCategorySelected(item);
  }

  async function handleCloseOrder() {
    try {
      await api.delete(`/order?order_id=${route.params?.order_id}`);

      ToastAndroid.show(
        `Mesa ${route.params?.number} deletada`,
        ToastAndroid.SHORT
      );

      navigation.goBack();
    } catch (err) {
      console.log("erro: ", err);
    }
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Mesa: {route.params.number}</Text>
          <TouchableOpacity onPress={handleCloseOrder}>
            <Feather name="trash-2" size={28} color={theme.colors.red900} />
          </TouchableOpacity>
        </View>

        {categories.length !== 0 && (
          <TouchableOpacity
            style={styles.select}
            onPress={() => setModalCategoryOpen(true)}
          >
            <Text style={{ fontSize: 17, color: theme.colors.white }}>
              {categorySelected?.name}
            </Text>
          </TouchableOpacity>
        )}

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
            value={amount}
            onChangeText={setAmount}
          />
        </View>

        <View style={styles.actions}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Avançar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonAdd}>
            <Feather name="plus" size={28} color={theme.colors.white} />
          </TouchableOpacity>
        </View>

        <Modal transparent visible={modalCategoryOpen} animationType="fade">
          <ModalPicker
            handleCloseModal={() => setModalCategoryOpen(false)}
            options={categories}
            selectedItem={handleChangeCategory}
          />
        </Modal>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}
