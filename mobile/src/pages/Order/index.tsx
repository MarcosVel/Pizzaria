import { Feather } from "@expo/vector-icons";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import {
  FlatList,
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
import ListItem from "../../components/ListItem";
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

type ProductProps = {
  id: string;
  name: string;
};

type ItemProps = {
  id: string;
  product_id: string;
  name: string;
  amount: string | number;
};

type OrderRouteProps = RouteProp<RouteDetailParams, "Order">;

export default function Order() {
  const route = useRoute<OrderRouteProps>();
  const navigation = useNavigation();
  const [categories, setCategories] = useState<CategoryProps[] | []>([]);
  const [categorySelected, setCategorySelected] = useState<CategoryProps>();
  const [amount, setAmount] = useState("1");
  const [modalCategoryOpen, setModalCategoryOpen] = useState(false);
  const [products, setProducts] = useState<ProductProps[] | []>([]);
  const [productSelected, setProductSelected] = useState<ProductProps>();
  const [modalProductVisible, setModalProductVisible] = useState(false);
  const [items, setItems] = useState<ItemProps[]>([]);

  useEffect(() => {
    async function loadInfo() {
      const response = await api.get("/category");

      setCategories(response.data);
      setCategorySelected(response.data[0]);
    }

    loadInfo();
  }, []);

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get(
        `/category/product?category_id=${categorySelected?.id}`
      );

      setProducts(response.data);
      setProductSelected(response.data[0]);
    }

    loadProducts();
  }, [categorySelected]);

  function handleChangeCategory(item: CategoryProps) {
    setCategorySelected(item);
  }

  function handleChangeProduct(item: ProductProps) {
    setProductSelected(item);
  }

  async function handleAddItem() {
    const response = await api.post("/order/add", {
      order_id: route.params.order_id,
      product_id: productSelected?.id,
      amount: Number(amount),
    });

    let data = {
      id: response.data.id,
      product_id: productSelected?.id as string,
      name: productSelected?.name as string,
      amount: amount,
    };

    setItems(oldArray => [...oldArray, data]);
  }

  async function handleDeleteItem(item_id: string, item_name: string) {
    await api.delete("/order/remove", {
      params: {
        item_id: item_id,
      },
    });

    let removeItem = items.filter(item => {
      return item.id !== item_id;
    });

    ToastAndroid.show(`Item removido: ${item_name}`, ToastAndroid.SHORT);

    setItems(removeItem);
  }

  async function handleCloseOrder() {
    if (items.length !== 0) {
      return ToastAndroid.show(
        "A mesa possui itens em aberto",
        ToastAndroid.SHORT
      );
    } else {
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

        {products.length !== 0 && (
          <TouchableOpacity
            style={styles.select}
            onPress={() => setModalProductVisible(true)}
          >
            <Text style={{ fontSize: 17, color: theme.colors.white }}>
              {productSelected?.name}
            </Text>
          </TouchableOpacity>
        )}

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
          <TouchableOpacity
            style={[styles.button, { opacity: items.length === 0 ? 0.3 : 1 }]}
            disabled={items.length === 0}
          >
            <Text style={styles.buttonText}>Avançar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.buttonAdd,
              { opacity: products.length === 0 ? 0.3 : 1 },
            ]}
            disabled={products.length === 0}
            onPress={handleAddItem}
          >
            <Feather name="plus" size={28} color={theme.colors.white} />
          </TouchableOpacity>
        </View>

        <FlatList
          showsVerticalScrollIndicator={false}
          style={{ flex: 1, marginTop: 24 }}
          data={items}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <ListItem data={item} deleteItem={handleDeleteItem} />
          )}
        />

        <Modal transparent visible={modalCategoryOpen} animationType="fade">
          <ModalPicker
            handleCloseModal={() => setModalCategoryOpen(false)}
            options={categories}
            selectedItem={handleChangeCategory}
          />
        </Modal>

        <Modal transparent visible={modalProductVisible} animationType="fade">
          <ModalPicker
            handleCloseModal={() => setModalProductVisible(false)}
            options={products}
            selectedItem={handleChangeProduct}
          />
        </Modal>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}
