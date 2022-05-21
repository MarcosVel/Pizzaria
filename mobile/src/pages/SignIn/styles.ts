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
  logo: {
    marginBottom: 32,
  },
  inputContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    width: "100%",
    height: 45,
    backgroundColor: theme.colors.dark900,
    color: theme.colors.white,
    borderRadius: 6,
    marginBottom: 12,
    paddingHorizontal: 16,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 45,
    backgroundColor: theme.colors.green900,
    borderRadius: 6,
    marginTop: 8,
  },
  buttonText: {
    fontSize: 18,
    color: theme.colors.dark900,
    fontWeight: "bold",
  },
});
