import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Button } from 'react-native';

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

      <Text style={{ fontWeight: "bold", fontSize: 20, }}>Menu</Text>
      <View style={styles.botoesMenu}>
        <View style={styles.botaoPlaylists}>
          <Button title="PLAYLISTS" color="white" />
        </View>
        <View style={styles.botaoArtistas}>
          <Button title="ARTISTAS" color="white" />
        </View>
        <View style={styles.botaoRadio}>
          <Button title="RÁDIO" color="white" />
        </View>
      </View>

      <View style={styles.viewTocadasRec}>
        <Text style={{ fontWeight: "bold", fontSize: 15 }}>Tocadas recentemente</Text>
      </View>
      <ScrollView style={styles.scrollView}>
        <View style={styles.areaMusicas}>
          <View style={styles.listaMusicas}>
            <View style={styles.caixaMusicaTocando}>
              <View style={styles.descMusica}>
                <Text style={{ fontSize: 18 }}>Thunderstruck</Text>
                <Text style={{ fontSize: 15, color: "gray" }}>AC/DC tocando agora!</Text>
              </View>
              <Text>4:52</Text>
            </View>

            <View style={styles.caixaMusica}>
              <View style={styles.descMusica}>
                <Text style={{ fontSize: 18 }}>Chop Suey!</Text>
                <Text style={{ fontSize: 15, color: "gray" }}>System of a Down</Text>
              </View>
              <Text>3:30</Text>
            </View>

            <View style={styles.caixaMusica}>
              <View style={styles.descMusica}>
                <Text style={{ fontSize: 18 }}>Back in Black</Text>
                <Text style={{ fontSize: 15, color: "gray" }}>AC/DC</Text>
              </View>
              <Text>4:15</Text>
            </View>

            <View style={styles.caixaMusica}>
              <View style={styles.descMusica}>
                <Text style={{ fontSize: 18 }}>Toxicity</Text>
                <Text style={{ fontSize: 15, color: "gray" }}>System of a Down</Text>
              </View>
              <Text>3:39</Text>
            </View>

            <View style={styles.caixaMusica}>
              <View style={styles.descMusica}>
                <Text style={{ fontSize: 18 }}>Highway to Hell</Text>
                <Text style={{ fontSize: 15, color: "gray" }}>AC/DC</Text>
              </View>
              <Text>3:28</Text>
            </View>

            <View style={styles.caixaMusica}>
              <View style={styles.descMusica}>
                <Text style={{ fontSize: 18 }}>Aerials</Text>
                <Text style={{ fontSize: 15, color: "gray" }}>System of a Down</Text>
              </View>
              <Text>3:55</Text>
            </View>

            <View style={styles.caixaMusica}>
              <View style={styles.descMusica}>
                <Text style={{ fontSize: 18 }}>505</Text>
                <Text style={{ fontSize: 15, color: "gray" }}>Arctic Monkeys</Text>
              </View>
              <Text>4:13</Text>
            </View>

            <View style={styles.caixaMusica}>
              <View style={styles.descMusica}>
                <Text style={{ fontSize: 18 }}>Beat it</Text>
                <Text style={{ fontSize: 15, color: "gray" }}>Michael Jackson</Text>
              </View>
              <Text>4:18</Text>
            </View>

            <View style={styles.caixaMusica}>
              <View style={styles.descMusica}>
                <Text style={{ fontSize: 18 }}>The Real Slim Shady</Text>
                <Text style={{ fontSize: 15, color: "gray" }}>Eminem</Text>
              </View>
              <Text>4:44</Text>
            </View>

            <View style={styles.caixaMusica}>
              <View style={styles.descMusica}>
                <Text style={{ fontSize: 18 }}>Feel Good Inc.</Text>
                <Text style={{ fontSize: 15, color: "gray" }}>Gorillaz, De La Soul</Text>
              </View>
              <Text>3:42</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      <View style={styles.caixaAssinar}>
        <Text>Assine o Premium e ouça sem anúncios!</Text>
        <View style={styles.botaoAssinar}>
          <Button title="ASSINAR AGORA" color="white" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
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

  areaMusicas: {
    flex: 1,
    width: "100%",
    position: "relative",
  },

  caixaMusica: {
    width: "100%",
    height: 85,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#D3D3D3",
    borderRadius: 15,
    borderWidth: 1,
    padding: 15,
  },

  caixaMusicaTocando: {
    width: "100%",
    height: 85,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#b5f199",
    borderRadius: 15,
    borderWidth: 1,
    padding: 15,
  },

  descMusica: {
    gap: 8
  },

  listaMusicas: {
    gap: 10,
    paddingBottom: 10,
  },

  scrollView: {
    paddingTop: 8,
  },

  botaoAssinar: {
    width: 160,
    height: 35,
    backgroundColor: "green",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center"
  },

  caixaAssinar: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "black",
    alignItems: "center",
    borderRadius: 15,
    padding: 20,
    gap: 10,
    width: "100%"
  }

});
