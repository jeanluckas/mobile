import { Stack, router } from "expo-router";
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect, useState } from "react";



export default function App() {

    const [texto, setTexto] = useState("");
    const [lista, setLista] = useState([]);

    function adicionar() {
        setLista([...lista, texto]);
        setTexto("");
    }

    return (
        <SafeAreaView style={styles.main}>
            <Stack.Screen options={{ title: "App Lista" }} />
            <TextInput
                style={styles.input}
                value={texto}
                onChangeText={setTexto}
                placeholder="Nova tarefa"
            />
            <View style={styles.botao}>
                <Button title="Adicionar" onPress={adicionar} />
            </View>

            <FlatList
                style={styles.lista}
                data={lista}
                renderItem={({ item }) => (
                    <View style={styles.caixaLista}>
                        <Text style={styles.item}>{item}</Text>
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
        backgroundColor: "#f2d177",
        width: 200,
        alignItems: "center",
        padding: 5,
        borderWidth: 1,
        borderColor: "#a38534"

    },

    botao: {
        backgroundColor: "#f2d177",
        borderRadius: 15,
        width: 150,
        borderColor: "#a38534",
        borderWidth: 1

    }
});
