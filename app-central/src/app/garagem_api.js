
import { useEffect, useState } from "react";
import { Button, FlatList, StyleSheet, Text, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack } from "expo-router";

const API = "https://6aee22a9a677fe0fc14fc524.mockapi.io/api/v1/carros";

export default function GaragemApi() {
    const [lista, setLista] = useState([]);
    const [marca, setMarca] = useState("");
    const [modelo, setModelo] = useState("");
    const [ano, setAno] = useState("");
    const [cor, setCor] = useState("");
    const [placa, setPlaca] = useState("");

    // GET: busca a lista de carros na API.
    async function carregar() {
        const resposta = await fetch(API);
        const dados = await resposta.json();
        setLista(dados);
    }

    // POST: cadastra um carro na API.
    async function salvar() {
        await fetch(API, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                marca: marca,
                modelo: modelo,
                ano: ano,
                cor: cor,
                placa: placa,
            }),
        });

        setMarca("");
        setModelo("");
        setAno("");
        setCor("");
        setPlaca("");

        // Atualiza a lista após cadastrar.
        carregar();
    }

    useEffect(() => {
        carregar();
    }, []);

    return (
        <SafeAreaView style={styles.tela} edges={["bottom"]}>
            <Stack.Screen options={{ title: "Minha Garagem" }} />

            <TextInput
                style={styles.campo}
                value={marca}
                onChangeText={setMarca}
                placeholderTextColor="#555"
                placeholder="Marca do carro"
            />

            <TextInput
                style={styles.campo}
                value={modelo}
                onChangeText={setModelo}
                placeholderTextColor="#555"
                placeholder="Modelo do carro"
            />

            <TextInput
                style={styles.campo}
                value={ano}
                onChangeText={setAno}
                placeholder="Ano do carro"
                placeholderTextColor="#555"
                keyboardType="numeric"
            />

            <TextInput
                style={styles.campo}
                value={cor}
                onChangeText={setCor}
                placeholderTextColor="#555"
                placeholder="Cor do carro"
            />

            <TextInput
                style={styles.campo}
                value={placa}
                onChangeText={setPlaca}
                placeholderTextColor="#555"
                placeholder="Placa do carro"
            />

            <Button title="Salvar carro" onPress={salvar} />

            <FlatList
                style={styles.lista}
                data={lista}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <Text style={styles.item}>
                        {item.id} - {item.marca} {item.modelo} - {item.ano} - {item.cor} - {item.placa}
                    </Text>
                )}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    tela: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        paddingHorizontal: 16,
        paddingTop: 16,
    },

    campo: {
        borderWidth: 1,
        borderColor: "#D9DDE3",
        borderRadius: 12,
        padding: 12,
        fontSize: 16,
        color: "#111827",
        marginBottom: 12,
    },

    lista: {
        flex: 1,
        marginTop: 16,
    },

    item: {
        backgroundColor: "#F1F3F6",
        borderRadius: 12,
        padding: 16,
        marginBottom: 8,
        fontSize: 15,
        color: "#111827",
    },
});
