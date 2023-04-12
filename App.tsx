import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// screems
import Login from "./src/screems/Login";
import HomeScreem from "./src/screems/Home";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="login">
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen
          name="home"
          component={HomeScreem}
          options={{ title: "Inicio" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
