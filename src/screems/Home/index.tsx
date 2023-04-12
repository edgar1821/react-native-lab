import { View, Text } from "react-native";
import Button from "../../components/Button";
function HomeScreen({ navigation }: any) {
  function Goback() {
    navigation.goBack();
  }
  function GoFirstScreem() {
    navigation.popToTop();
  }
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Este es el home</Text>
      <Button onPress={Goback}>Ir Atras</Button>
      <Button onPress={GoFirstScreem}>Ir a la primera pagina</Button>
    </View>
  );
}

export default HomeScreen;
