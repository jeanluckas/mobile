import { Stack, router } from "expo-router";
import { StyleSheet, Text, View, Button } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect, useState } from "react";



export default function App() {

    const [numero, setNumero] = useState(0);
    function aumentarNumero() {
        setNumero(numero + 1);
    }

    function diminuirNumero() {
        setNumero(numero + -1);
    }

    return (
        <SafeAreaView style={styles.main}>
            <Stack.Screen options={{ title: "App Contador" }} />
            <View style={styles.cabecalho}>
                <Text style={styles.textoCabecalho}>CONTADOR</Text>
            </View>
            <View style={styles.caixinha}>
                <View style={styles.botao}>
                    <Button title="-" color="black" onPress={diminuirNumero} />
                </View>
                <Text style={styles.texto}>{numero}</Text>
                <View style={styles.botao}>
                    <Button title="+" color="black" onPress={aumentarNumero} />
                </View>
            </View>
            <View style={{ flex: 1 }}></View>

            <Button title="VOLTAR" onPress={() => router.back()} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        paddingTop: 50,
        padding: 10,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: "flex-start"
    },

    caixinha: {
        flexDirection: "row",
        alignItems: "center",
        height: 200,
        width: 300,
        justifyContent: "space-between"
    },

    botao: {
        backgroundColor: "#b6d6e9",
        borderRadius: 15,
        width: 100,
        height: 100,
        justifyContent: "center"
    },

    texto: {
        fontSize: 35
    },

    textoCabecalho: {
        fontSize: 50
    }
});
