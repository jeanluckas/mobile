import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.main}>
      <View style={styles.cabecalho}>
        <View style={styles.fotoPerfil}></View>
        <View>
          <Text style={{ fontSize: 25, fontWeight: "bold" }}>Olá, estudante!</Text>
          <Text style={{ fontSize: 15, color: "gray" }}>Sua trilha do dia</Text>
        </View>
      </View>

      <View style={styles.viewMenu}>
        <Text style={{ fontWeight: "bold", fontSize: 20 }}>Menu</Text>
      </View>

      <View style={styles.botoesMenu}>
        <View style={styles.botaoPlaylists}>
          <Text style={styles.textoBotoes}>PLAYLISTS</Text>
        </View>
        <View style={styles.botaoArtistas}>
          <Text style={styles.textoBotoes}>ARTISTAS</Text>
        </View>
        <View style={styles.botaoRadio}>
          <Text style={styles.textoBotoes}>RÁDIO</Text>
        </View>
      </View>

      <View style={styles.viewTocadasRec}>
        <Text style={{fontWeight: "bold", fontSize: 15}}>Tocadas recentemente</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 50,
    padding: 15
  },

  fotoPerfil: {
    width: 80,
    height: 80,
    backgroundColor: "#eb5ee1",
    borderRadius: 50
  },

  cabecalho: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 10
  },

  viewMenu: {
    paddingTop: 20,
    width: "100%",
    justifyContent: "flex-start"
  },

  botoesMenu: {
    flexDirection: "row",
    gap: 15,
    paddingTop: 10
  },

  botaoPlaylists: {
    width: 110,
    height: 35,
    backgroundColor: "green",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center"
  },

  botaoArtistas: {
    width: 110,
    height: 35,
    backgroundColor: "blue",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center"
  },

  botaoRadio: {
    width: 110,
    height: 35,
    backgroundColor: "red",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center"
  },

  textoBotoes: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold"
  },

  viewTocadasRec: {
    width: "100%",
    paddingTop: 15
  },
});
