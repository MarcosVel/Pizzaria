import { StyleSheet } from "react-native";
import { theme } from "../../styles/theme";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.dark700,
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  alert: {
    fontSize: 20,
    color: theme.colors.white,
    fontWeight: "bold",
    marginBottom: 12,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: theme.colors.white,
    marginBottom: 24,
  },
  button: {
    backgroundColor: theme.colors.green900,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "65%",
    height: 40,
    borderRadius: 4,
  },
  textButton: {
    fontSize: 18,
    marginLeft: 8,
    fontWeight: "bold",
    color: theme.colors.dark900,
  },
});
