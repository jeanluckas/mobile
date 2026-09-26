import { Stack, router } from "expo-router";
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect, useState } from "react";
import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabaseSync("bordel.db");

db.execSync(`
    CREATE TABLE IF NOT EXISTS bordel (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        texto VARCHAR(255) NOT NULL,
        cor VARCHAR(255) NOT NULL
  );
`);

function listar() {
    return db.getAllSync("SELECT * FROM bordel ORDER BY id DESC");
}

function adicionar(texto, cor) {
    db.runSync("INSERT INTO bordel (texto, cor) VALUES (?, ?)", [texto, cor]);
}

export default function App() {

    const [texto, setTexto] = useState("");
    const [lista, setLista] = useState([]);
    const [cor, setCor] = useState("");

    function carregar() {
        setLista(listar());
    }

    useEffect(() => {
        carregar();
    }, []);

    function salvar() {
        adicionar(texto, cor);
        setTexto("");
        setCor("");
        carregar();
    }

    function excluir(id) {
        db.runSync("DELETE FROM bordel WHERE id = ?", id);
        carregar();
    }

    return (
        <SafeAreaView style={styles.main}>
            <Stack.Screen options={{ title: "App Bordel" }} />
            <Text style={styles.titulo}>Cadastro de bordel</Text>
            <TextInput
                style={styles.input}
                value={texto}
                onChangeText={setTexto}
                placeholder="Novo bordel"
                placeholderTextColor="#555"
            />
            <TextInput
                style={styles.input}
                value={cor}
                onChangeText={setCor}
                placeholder="Cor"
                placeholderTextColor="#555"
            />

            <View style={styles.botao}>
                <Button title="Adicionar" color="#000000" onPress={salvar} />
            </View>

            <FlatList
                style={styles.lista}
                data={lista}
                renderItem={({ item }) => (
                    <View style={styles.caixaLista}>
                        <Text style={styles.item}>Nome: {item.texto}</Text>
                        <Text style={styles.item}>Cor: {item.cor}</Text>
                        <Button title="Excluir" color="#ff0000" onPress={() => excluir(item.id)} />
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
        backgroundColor: "#d5f2f3",
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
