import { useContext } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { AuthContext } from "../../contexts/AuthContext";

export default function Dashboard() {
  const { logOut } = useContext(AuthContext);
  return (
    <View>
      <TouchableOpacity onPress={logOut}>
        <Text>LogOut</Text>
      </TouchableOpacity>
    </View>
  );
}
