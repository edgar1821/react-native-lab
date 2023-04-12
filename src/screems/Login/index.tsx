import { View, Text, StyleSheet } from "react-native";
import Button from "../../components/Button";

function Login({ navigation }: any) {
  function redirect() {
    navigation.navigate("pepe");
  }
  return (
    <View style={styles.container}>
      <Text>Esta es la pagina de Login</Text>
      <Button onPress={redirect}>Siguiente pagina</Button>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    display: "flex",
    flexDirection: "row",
    padding: 10,
    backgroundColor: "gray",
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
  },
});
export default Login;
