
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack } from "expo-router";

export default function Cnpj() {
  const [cnpj, setCnpj] = useState("");
  const [empresa, setEmpresa] = useState({});
  const [erro, setErro] = useState("");
  const [carregando, setCarregando] = useState(false);

  async function buscar() {
    const numero = cnpj.replace(/\D/g, "");

    if (numero.length !== 14) {
      setErro("Digite um CNPJ com 14 números.");
      setEmpresa({});
      return;
    }

    setErro("");
    setEmpresa({});
    setCarregando(true);

    try {
      const resposta = await fetch(
        `https://www.receitaws.com.br/v1/cnpj/${numero}`
      );

      const dados = await resposta.json();

      if (
        dados.status === "ERROR" ||
        dados.message ||
        !dados.nome
      ) {
        setErro(dados.message || "Não foi possível encontrar o CNPJ.");
        setEmpresa({});
      } else {
        setEmpresa(dados);
        setErro("");
      }
    } catch (e) {
      setErro("Erro ao consultar a API. Verifique sua conexão.");
    } finally {
      setCarregando(false);
    }
  }

  return (
    <SafeAreaView style={styles.tela} edges={["bottom"]}>
      <Stack.Screen options={{ title: "Buscar CNPJ" }} />

      <TextInput
        style={styles.campo}
        value={cnpj}
        onChangeText={(texto) =>
          setCnpj(texto.replace(/\D/g, "").slice(0, 14))
        }
        placeholder="Digite o CNPJ, só números"
        keyboardType="numeric"
        maxLength={14}
      />

      <Button
        title={carregando ? "Buscando..." : "Buscar"}
        onPress={buscar}
        disabled={carregando}
      />

      {erro !== "" && (
        <Text style={styles.erro}>{erro}</Text>
      )}

      {empresa.nome && (
        <>
          <Text style={styles.titulo}>
            Razão social: {empresa.nome}
          </Text>

          <Text>
            Nome fantasia: {empresa.fantasia || "Não informado"}
          </Text>

          <Text>
            Cidade: {empresa.municipio}
          </Text>

          <Text>
            Estado: {empresa.uf}
          </Text>
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
    fontSize: 16,
    fontWeight: "600",
  },
});
