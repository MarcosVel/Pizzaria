import { Feather } from "@expo/vector-icons";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { theme } from "../../styles/theme";
import styles from "./styles";

export type ItemProps = {
  data: {
    id: string;
    product_id: string;
    name: string;
    amount: string | number;
  };
  deleteItem: (item_id: string, item_name: string) => void;
};

export default function ListItem({ data, deleteItem }: ItemProps) {
  function handleDeleteItem() {
    deleteItem(data.id, data.name);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.item}>
        {data?.amount} - {data?.name}
      </Text>
      <TouchableOpacity onPress={handleDeleteItem}>
        <Feather name="trash-2" color={theme.colors.red900} size={25} />
      </TouchableOpacity>
    </View>
  );
}
