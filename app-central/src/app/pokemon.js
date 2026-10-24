
import { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack } from "expo-router";

export default function Pokemon() {
  const [nome, setNome] = useState("");
  const [dados, setDados] = useState({});
  const [erro, setErro] = useState("");

  async function buscar() {
    if (!nome.trim()) {
      setErro("Digite o nome de um Pokémon.");
      setDados({});
      return;
    }

    try {
      const resposta = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${nome.trim().toLowerCase()}`
      );

      if (!resposta.ok) {
        setErro("Pokémon não encontrado.");
        setDados({});
        return;
      }

      const resultado = await resposta.json();

      setDados(resultado);
      setErro("");
    } catch (e) {
      setErro("Erro ao consultar a API.");
      setDados({});
    }
  }

  return (
    <SafeAreaView style={styles.tela} edges={["bottom"]}>
      <Stack.Screen options={{ title: "Buscar Pokémon" }} />

      <TextInput
        style={styles.campo}
        value={nome}
        onChangeText={setNome}
        placeholder="Digite o nome do Pokémon"
        autoCapitalize="none"
      />

      <Button title="Buscar" onPress={buscar} />

      <Text style={styles.erro}>{erro}</Text>

      {dados.name && (
        <>
          <Image
            source={{ uri: dados.sprites.front_default }}
            style={styles.imagem}
            resizeMode="contain"
          />

          <Text style={styles.titulo}>
            Nome: {dados.name}
          </Text>

          <Text>Altura: {dados.height}</Text>
          <Text>Peso: {dados.weight}</Text>
        </>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    padding: 16,
    gap: 8,
  },

  campo: {
    borderWidth: 1,
    borderColor: "#D9DDE3",
    borderRadius: 12,
    padding: 12,
    fontSize: 16,
    marginBottom: 6,
  },

  erro: {
    marginTop: 16,
    color: "#B91C1C",
  },

  titulo: {
    fontSize: 18,
    fontWeight: "600",
  },

  imagem: {
    width: 200,
    height: 200,
    alignSelf: "center",
  },
});
