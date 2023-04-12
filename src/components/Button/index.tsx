import { Text, TouchableOpacity, GestureResponderEvent } from "react-native";
import styles from "./styles";

type ButtonProps = {
  onPress: (event: GestureResponderEvent) => void;
  children: string | JSX.Element | JSX.Element[];
};

function Button({ onPress, children }: ButtonProps) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{children}</Text>
    </TouchableOpacity>
  );
}

export default Button;
