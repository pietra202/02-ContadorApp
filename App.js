import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
} from "react-native";

export default function App() {
  const [contador, setContador] = useState(0);

  const handleIncrement = () => {
    setContador(contador + 1);
  };

  const handleDecrement = () => {
    contador > 0 && setContador(contador - 1);
  };

  const handleReset = () => {
    setContador(0);
  };

  return (
    <ImageBackground
      source={require("./assets/Group 3.png")} // Certifique-se de que a imagem está na pasta correta
      style={styles.container}
      resizeMode="cover"
    >
      <Text style={styles.title}>Contador</Text>
      <Text style={styles.counterText}>{contador}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleIncrement}>
          <Text style={styles.buttonText}>Incrementar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleDecrement}>
          <Text style={styles.buttonText}>Decrementar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleReset}>
          <Text style={styles.buttonText}>Resetar</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
//visual
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#fff",
  },
  counterText: {
    fontSize: 48,
    fontWeight: "bold",
    color: "#fff",
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 20,
  },
  button: {
    backgroundColor: "#007bff",
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
