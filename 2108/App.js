import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.principal}>
      <View style={styles.cabecalho}>
        <View style={styles.circulo}></View>
        <View></View>
      </View>
      <View>
        <View></View>
        <View></View>
        <View></View>
      </View>
      <View>
        <View></View>
        <View></View>
        <View></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  principal: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 70,
  },

  circulo: {
    width: 100,
    height: 100,
    borderCurve: 50,
    backgroundColor: "gray",
  },

  cabecalho: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start"
  }
});
