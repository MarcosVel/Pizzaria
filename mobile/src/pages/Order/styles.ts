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
});
