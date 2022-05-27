import { StyleSheet } from "react-native";
import { theme } from "../../styles/theme";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.dark700,
    padding: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: theme.colors.white,
    marginBottom: 24,
  },
  input: {
    width: "100%",
    height: 60,
    backgroundColor: theme.colors.dark900,
    color: theme.colors.white,
    fontSize: 20,
    borderRadius: 6,
    marginBottom: 24,
    paddingHorizontal: 16,
    textAlign: "center",
  },
  button: {
    width: "100%",
    height: 40,
    backgroundColor: theme.colors.green900,
    borderRadius: 6,
    paddingHorizontal: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: theme.colors.dark900,
    fontSize: 18,
    fontWeight: "bold",
  },
});
