import { StyleSheet } from "react-native";
import { theme } from "../../styles/theme";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.dark900,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    marginBottom: 12,
    padding: 12,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: theme.colors.gray100,
  },
  item: {
    color: theme.colors.white,
    fontSize: 16,
    fontWeight: "bold",
  },
});
