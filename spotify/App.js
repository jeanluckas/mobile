import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.telaPrincipal}>
      <View style={styles.cabecalho}>
        <View>
          <Text style={{ color: "white" }}>Hora atual</Text>
        </View>
        <Text style={{ color: "white" }}>jealucasr</Text>
        <View style={styles.quadradoCabecalho}></View>
      </View>
      <View style={styles.pesquisa}>
        <View style={styles.desenhoPesquisa}></View>
        <Text>Pesquise ou pergunta a Meta AI</Text>
      </View>
      <View style={styles.nota}>
        <View style={{
          width: 60, height: 50, backgroundColor: "gray",
          borderRadius: 15, alignContent: "center"
        }}>
          <Text style={{ fontSize: 9, textAlign: "center" }}>Deixe este espaço com sua cara...</Text>
        </View>
        <View style={styles.fotoNota}>
        </View>
        <Text style={{ color: "gray" }}>Sua nota</Text>
      </View>
      <View style={styles.mensagensPedidos}>
        <Text style={{ color: "white" }}>Mensagens</Text>
        <Text style={{ color: "white" }}>Pedidos</Text>
      </View>
      <View style={styles.mensagem}>
        <View style={{
          width: 50, height: 50, backgroundColor: "gray", borderRadius: 25
        }}></View>
        <View style={styles.textoMensagem}>
          <Text style={{color: "white"}}>Caua Fernando Wahlbrinck</Text>
          <Text style={{color: "gray"}}>Vista há 2 h</Text>
        </View>
      </View>
      <View style={styles.mensagem}>
        <View style={{
          width: 50, height: 50, backgroundColor: "gray", borderRadius: 25
        }}></View>
        <View style={styles.textoMensagem}>
          <Text style={{color: "white"}}>cu melado</Text>
          <Text style={{color: "gray"}}>Enviada há 17 h</Text>
        </View>
      </View>
      <View style={styles.mensagem}>
        <View style={{
          width: 50, height: 50, backgroundColor: "gray", borderRadius: 25
        }}></View>
        <View style={styles.textoMensagem}>
          <Text style={{color: "white"}}>Marcus (Emoji foda de arco)</Text>
          <Text style={{color: "gray"}}>Enviou um post de pituomatutointeli... 19h</Text>
        </View>
      </View>
      <View style={styles.mensagem}>
        <View style={{
          width: 50, height: 50, backgroundColor: "gray", borderRadius: 25
        }}></View>
        <View style={styles.textoMensagem}>
          <Text style={{color: "white"}}>Carla Rodrigues</Text>
          <Text style={{color: "gray"}}>Enviou um reel de xhakinha 3 d</Text>
        </View>
      </View>
      <View style={styles.mensagem}>
        <View style={{
          width: 50, height: 50, backgroundColor: "gray", borderRadius: 25
        }}></View>
        <View style={styles.textoMensagem}>
          <Text style={{color: "white"}}>carol</Text>
          <Text style={{color: "gray"}}>Curtiu uma mensagem 3 d</Text>
        </View>
      </View>
      <View style={{flex: 1}}></View>
      <View style={styles.barra}>
        <View style={styles.icone}></View>
        <View style={styles.icone}></View>
        <View style={styles.icone}></View>
        <View style={styles.icone}></View>
        <View style={styles.icone}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  telaPrincipal: {
    flex: 1,
    backgroundColor: '#0B1014',
    padding: 15,
    paddingTop: 60,
    alignItems: "center",
    gap: 10,
  },

  cabecalho: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10
  },

  quadradoCabecalho: {
    width: 50,
    height: 50,
    backgroundColor: "#ffffff"
  },

  pesquisa: {
    width: "80%",
    backgroundColor: "#24292D",
    flexDirection: "row",
    borderRadius: 10,
    gap: 5

  },

  desenhoPesquisa: {
    width: 25,
    height: 25,
    backgroundColor: "gray",
    borderRadius: 25,
  },

  fotoNota: {
    width: 50,
    height: 50,
    backgroundColor: "gray",
    borderRadius: 25,
  },

  nota: {
    alignSelf: "flex-start",
    alignItems: "flex-start",
    gap: 5,
  },

  mensagensPedidos: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%"
  },

  mensagem: {
    width: "100%",
    flexDirection: "row",
    gap: 5,
    alignItems: "center"
  },

  barra: {
    flexDirection: "row",
    width: "90%",
    backgroundColor: "white",
    justifyContent: "center",
    borderRadius: 25,
    gap: 10
  },

  icone: {
    width: 50,
    height: 50,
    backgroundColor: "gray",
    borderRadius: 25,
  }
});
