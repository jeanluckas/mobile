import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.main}>
      <View style={styles.cabecalho}>
        <Text style={{ fontSize: 25, fontWeight: "bold" }}>Lajeado, RS</Text>
        <Text style={{ fontSize: 20, color: "gray" }}>Ter 28/08</Text>
      </View>

      <View style={styles.temperatura}>
        <View style={styles.temperaturaCaixa}>
          <Text style={{ fontSize: 50, fontWeight: "bold", color: "#3a4a91" }}>18°</Text>
          <Text style={styles.textoTemperatura}>Parcialmente nublado</Text>
          <View style={{ flexDirection: "row", gap: 20 }}>
            <Text style={styles.textoTemperatura}>Máx 24°</Text>
            <Text style={styles.textoTemperatura}>Mín 13°</Text>
          </View>
        </View>
      </View>

      <View style={{ width: "100%", padding: 10, }}>
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>Próximos dias</Text>
      </View>

      <View style={styles.menuProxDias}>
        <View style={styles.proxDiasQuadrado}>
          <Text>Qua</Text>
          <View style={styles.quadradoProxDias}></View>
          <Text style={styles.textoProxDias}>22°</Text>
        </View>
        <View style={styles.proxDiasQuadrado}>
          <Text>Qui</Text>
          <View style={styles.quadradoProxDias}></View>
          <Text style={styles.textoProxDias}>19°</Text>
        </View>
        <View style={styles.proxDiasQuadrado}>
          <Text>Sex</Text>
          <View style={styles.quadradoProxDias}></View>
          <Text style={styles.textoProxDias}>17°</Text>
        </View>
        <View style={styles.proxDiasQuadrado}>
          <Text>Sáb</Text>
          <View style={styles.quadradoProxDias}></View>
          <Text style={styles.textoProxDias}>21°</Text>
        </View>
        <View style={styles.proxDiasQuadrado}>
          <Text>Dom</Text>
          <View style={styles.quadradoProxDias}></View>
          <Text style={styles.textoProxDias}>25°</Text>
        </View>
      </View>

      <View style={styles.viewAlerta}>
        <View style={styles.alerta}>
          <Text style={{ fontWeight: "bold", color: "#664e31" }}>Alerta</Text>
          <Text style={{ color: "#664e31" }}>Possibilidade de chuva forte até as 18h.</Text>
        </View>
      </View>

      <View style={{ flex: 1 }}></View>

      <View style={styles.viewBotao}>
        <View style={styles.botao}>
          <Button title="VER SEMANA COMPLETA" color="white"></Button>
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingTop: 50,
    padding: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: "flex-start"
  },

  cabecalho: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  temperaturaCaixa: {
    width: 365,
    height: 165,
    backgroundColor: "#cce9f0",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#354f57",
  },

  textoTemperatura: {
    fontSize: 20,
    color: "#3a4a91",
    textAlign: "center",
  },

  temperatura: {
    borderCurve: 25,
    paddingTop: 10
  },

  quadradoProxDias: {
    width: 35,
    height: 35,
    backgroundColor: "#99b8de",
    borderRadius: 15
  },

  proxDiasQuadrado: {
    width: 60,
    height: 100,
    backgroundColor: "#d0cfd4",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    gap: 5
  },

  menuProxDias: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },

  alerta: {
    width: "100%",
    height: 50,
    backgroundColor: "#f0d586",
    borderRadius: 15,
    borderColor: "#c2aa5f",
    borderWidth: 1,
    justifyContent: "center",
    padding: 10,

  },

  viewAlerta: {
    width: "100%",
    padding: 10
  },

  botao: {
    width: 350,
    height: 35,
    backgroundColor: "#515bcf",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5
  },

  viewBotao: {
    padding: 10
  },

  textoProxDias: {
    fontWeight: "bold"
  }
});
