import { Stack, router } from "expo-router";
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect, useState } from "react";
import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabaseSync("flores.db");

db.execSync(`
    CREATE TABLE IF NOT EXISTS flor (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome VARCHAR(255) NOT NULL,
        cor VARCHAR(255) NOT NULL,
        nomecientifico VARCHAR(255) NOT NULL
  );
`);

function listar() {
    return db.getAllSync("SELECT * FROM flor ORDER BY id DESC");
}

function salvar(nome, cor, nomeCientifico) {
    db.runSync("INSERT INTO flor (nome, cor, nomecientifico) VALUES (?, ?, ?)", [nome, cor, nomeCientifico]);
}

function excluir(codigo) {
    db.runSync("DELETE FROM flor WHERE id = ?", [codigo]);
}

function edita(nome, cor, nomeCientifico, id) {
    db.runSync("UPDATE flor SET nome = ?, cor = ?, nomecientifico = ? WHERE id = ?", [
        nome,
        cor,
        nomeCientifico,
        id,
    ]);
}


export default function App() {

    const [nome, setNome] = useState("");
    const [cor, setCor] = useState("");
    const [nomeCientifico, setNomeCientifico] = useState("");
    const [lista, setLista] = useState([]);
    const [idEditando, setIdEditando] = useState(0);


    function carregar() {
        setLista(listar());
    }

    function guardarOuEditar() {
        if (idEditando === 0) {
            salvar(nome, cor, nomeCientifico);
        } else {
            edita(nome, cor, nomeCientifico, idEditando);
        }
        setNome("");
        setCor("");
        setNomeCientifico("");
        setIdEditando(0);
        carregar();
    }

    function remover(codigo) {
        excluir(codigo);
        carregar();
    }

    function editar(flor) {
        setIdEditando(flor.id);
        setNome(flor.nome);
        setCor(flor.cor);
        setNomeCientifico(flor.nomecientifico)
    }

    return (
        <SafeAreaView style={styles.main}>
            <Stack.Screen options={{ title: "App Bordel" }} />
            <Text style={styles.titulo}>Cadastro de bordel</Text>
            <TextInput
                style={styles.input}
                value={nome}
                onChangeText={setNome}
                placeholder="Nome da flor"
                placeholderTextColor="#555"
            />
            <TextInput
                style={styles.input}
                value={cor}
                onChangeText={setCor}
                placeholder="Cor da flor"
                placeholderTextColor="#555"
            />
            <TextInput
                style={styles.input}
                value={nomeCientifico}
                onChangeText={setNomeCientifico}
                placeholder="Nome cientifico da flor"
                placeholderTextColor="#555"
            />

            <View style={styles.botao}>
                <Button title="Salvar" color="#000000" onPress={guardarOuEditar} />
            </View>

            <FlatList
                style={styles.lista}
                data={lista}
                renderItem={({ item }) => (
                    <View style={styles.caixaLista}>
                        <Text style={styles.item}>Nome: {item.nome}</Text>
                        <Text style={styles.item}>Cor: {item.cor}</Text>
                        <Text style={styles.item}>Cor: {item.nomecientifico}</Text>

                        <Button title="Editar" color="#ff0000" onPress={() => editar(item)} />
                        <Button title="Excluir" color="#ff0000" onPress={() => remover(item.id)} />
                    </View>)}
            />

            <Button title="VOLTAR" onPress={() => router.back()} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        paddingTop: 50,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: "flex-start",
        gap: 10
    },

    titulo: {
        fontWeight: "bold",
        fontSize: 25
    },

    input: {
        borderWidth: 1,
        borderColor: "#D9DDE3",
        borderRadius: 12,
        width: 300,
        padding: 12,
        fontSize: 16,
        color: "#111827",
        marginBottom: 12,
    },

    caixaLista: {
        backgroundColor: "#ffffff",
        width: "100%",
        alignItems: "center",
        justifyContent: "space-around",
        flexDirection: "row",
        padding: 5,
        borderWidth: 1,
        borderColor: "#000000",



    },

    botao: {
        backgroundColor: "#d5f2f3",
        borderRadius: 15,
        width: 150,
        borderColor: "#000000",
        borderWidth: 1

    },

    lista: {
        padding: 10
    }
});
