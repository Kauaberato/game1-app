import React, { useState } from "react"; 
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function Home () {
    const [name, setName] = useState(''); //useState do nome 
    const [idade,setIdade] =useState('');

    return (
        <View style={styles.body}>
            <TextInput 
                placeholder = "Digite seu nome"
                onChangeText={setName}
            />
             <Text style={styles.title}> 
                Olá, {name} tudo bem?
            </Text>

            <TextInput
                placeholder= "Digite sua idade"
                onChangeText ={setIdade}
             />
             <Text style={styles.title}>
                Boa, sua idade é {idade}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    body: {
        backgroundColor: "red",
        padding: "auto"
    },
    title: {
        fontSize: 19
    }
})