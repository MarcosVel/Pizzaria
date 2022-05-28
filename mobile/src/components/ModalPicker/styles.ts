import { Dimensions, StyleSheet } from "react-native";
import { theme } from "../../styles/theme";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.4)"
  },
  content: {
    width: WIDTH - 32,
    maxHeight: HEIGHT / 2,
    backgroundColor: theme.colors.dark900,
    borderRadius: 4,
  },
  option: {
    alignSelf: "center",
    width: '90%',
    borderBottomWidth: 0.8,
    borderBottomColor: theme.colors.gray100,
    padding: 16,
  },
  itemName: {
    color: theme.colors.white,
    fontSize: 18,
    fontWeight: "bold",
  }
});
