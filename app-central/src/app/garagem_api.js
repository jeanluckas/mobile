
import { useEffect, useState } from "react";
import { Button, FlatList, StyleSheet, Text, TextInput, Alert, View } from "react-native";
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
    const [idEditando, setIdEditando] = useState(0);


    // GET: busca a lista de carros na API.
    async function carregar() {
        const resposta = await fetch(API);
        const dados = await resposta.json();
        setLista(dados);
    }

    // POST: cadastra um carro na API.
    async function salvar() {
        //If para ver se tem campo vazio
        if (!marca.trim() || !modelo.trim() || !ano.trim() || !cor.trim() || !placa.trim()) {
            Alert.alert("Atenção", "Preencha todos os campos!");
            return;
        }
        if (idEditando === 0) {
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
        } else {
            await fetch(API + "/" + idEditando, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    marca: marca,
                    modelo: modelo,
                    ano: ano,
                    cor: cor,
                    placa: placa,
                }),
            });
            setIdEditando(0);
        }

        setMarca("");
        setModelo("");
        setAno("");
        setCor("");
        setPlaca("");

        // Atualiza a lista após cadastrar.
        carregar();
    }

    async function excluir(id) {
        await fetch(`${API}/${id}`, {
            method: "DELETE",
        });
        carregar();
    }

    async function editar(item) {
        setIdEditando(item.id);
        setMarca(item.marca);
        setModelo(item.modelo);
        setAno(item.ano);
        setCor(item.cor);
        setPlaca(item.placa);
    }

    useEffect(() => {
        carregar();
    }, []);

    return (
        <SafeAreaView style={styles.tela} edges={["bottom"]}>
            <Stack.Screen options={{ title: "Minha Garagem" }} />

            <Text style={styles.tituloCampos}>Marca do carro</Text>
            <TextInput
                style={styles.campo}
                value={marca}
                onChangeText={setMarca}
            />

            <Text style={styles.tituloCampos}>Modelo do carro</Text>
            <TextInput
                style={styles.campo}
                value={modelo}
                onChangeText={setModelo}
            />

            <Text style={styles.tituloCampos}>Ano do carro</Text>
            <TextInput
                style={styles.campo}
                value={ano}
                onChangeText={setAno}
                keyboardType="numeric"
            />

            <Text style={styles.tituloCampos}>Cor do carro</Text>
            <TextInput
                style={styles.campo}
                value={cor}
                onChangeText={setCor}
            />

            <Text style={styles.tituloCampos}>Placa do carro</Text>
            <TextInput
                style={styles.campo}
                value={placa}
                onChangeText={setPlaca}
            />

            <Button title="Salvar carro" onPress={salvar} />

            <FlatList
                style={styles.lista}
                data={lista}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.listinha}>
                        <View style={styles.infoItens}>
                            <Text style={styles.item}>Marca: {item.marca}</Text>
                            <Text style={styles.item}>Modelo: {item.modelo}</Text>
                            <Text style={styles.item}>Ano: {item.ano}</Text>
                            <Text style={styles.item}>Cor: {item.cor}</Text>
                            <Text style={styles.item}>Placa: {item.placa}</Text>
                        </View>

                        <View style={styles.botoes}>
                            <Button title="Excluir" onPress={() => excluir(item.id)} />
                            <Button title="Editar" onPress={() => editar(item)} />
                        </View>
                    </View>

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

    listinha: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 12,
        backgroundColor: "#F1F3F6",
        padding: 10,
        borderRadius: 12,
    },

    infoItens: {
        flexDirection: "column",
        flex: 1,
    },

    item: {
        fontSize: 15,
        color: "#111827",
        marginBottom: 6,
    },

    botoes: {
        flexDirection: "column",
        gap: 10,
        width: 110,
    },

    tituloCampos: {
        fontSize: 18,
    }
});
