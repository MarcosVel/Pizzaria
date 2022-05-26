import { StyleSheet } from "react-native";
import { theme } from "../../styles/theme";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.dark700,
    padding: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 24,
    marginBottom: 12,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: theme.colors.white,
  },
  select: {
    backgroundColor: theme.colors.dark900,
    width: "100%",
    borderRadius: 4,
    height: 50,
    marginBottom: 16,
    justifyContent: "center",
    paddingHorizontal: 16,
  },
  wtdContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  qtdText: {
    fontSize: 20,
    fontWeight: "bold",
    color: theme.colors.white,
  },
  input: {
    flex: 1,
    marginLeft: 32,
    textAlign: "center",
    fontSize: 18,
    color: theme.colors.white,
    marginBottom: 0,
  },
  actions: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  button: {
    height: 45,
    backgroundColor: theme.colors.green900,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
    width: "30%",
  },
  buttonAdd: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#3fd1ff",
    marginLeft: 24,
    height: 45,
    borderRadius: 4,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    lineHeight: 22,
    color: theme.colors.dark900,
  },
});
