import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import Database from './Database'
export default function AppForm({ navigation, route }) {

    const [id, setId] = useState('')
    const [description, setDescription] = useState('')
    const [quantity, setQuantity] = useState('')

    function handleDescriptionChange(text) {
        setDescription(text)
    }
    useEffect(() => {
        if (!route.params) return;
        setId(route.params.id);
        setDescription(route.params.description);
        setQuantity(route.params.quantity.toString());
    }, [route])

    function handleQuantityChange(text) {
        setQuantity(text)
    }
    async function handleButtonPress() {
        const listItem = { description: description, quantity: parseInt(quantity) }
        Database.saveItem(listItem, id)
            .then(response => {
                setId('');
                setDescription('')
                setQuantity('')
                navigation.navigate("AppList", listItem)
            })
    }
    function handleButtonClear() {
        Database.apagar()
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Item para comprar</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    onChangeText={handleDescriptionChange}
                    placeholder="O que está faltando em casa?"
                    clearButtonMode='always'
                    value={description}
                />
                <TextInput
                    style={styles.input}
                    onChangeText={handleQuantityChange}
                    placeholder="Digite a Quantidade"
                    keyboardType='numeric'
                    clearButtonMode='always'
                    value={quantity}
                />
                <TouchableOpacity
                    style={styles.button}
                    activeOpacity={0.8}
                    onPress={handleButtonPress}
                >
                    <Text style={styles.buttonText}>SALVAR</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    activeOpacity={0.8}
                    onPress={handleButtonClear}
                >
                    <Text style={styles.buttonText}>APAGAR</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.bottomLine}></View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#AABBCC',
        alignItems: 'center',
        justifyContent: 'center',
    },
    bottomLine: {
        backgroundColor: '#AABBCC',
        height: 20,
    },
    title: {
        color: '#FDFDFD',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 50,
    },
    inputContainer: {
        flex: 1,
        marginTop: 30,
        width: '90%',
        padding: 20,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        alignItems: 'stretch',
        backgroundColor: '#FDFDFD',
    },
    input: {
        marginTop: 10,
        marginBottom: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#444444',
        height: 60,
        backgroundColor: '#FDFDFD',
        paddingHorizontal: 24,
        fontSize: 16,
        alignItems: 'stretch'
    },
    button: {
        marginTop: 10,
        height: 60,
        backgroundColor: 'navy',
        borderRadius: 10,
        paddingHorizontal: 24,
        fontSize: 16,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        color: '#FDFDFD',
        fontWeight: 'bold'
    }

})