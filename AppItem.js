import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native'

export default function AppItem(props) {
    return (
        <View 
        style={styles.container}>
            <Text style={styles.textItem}>
                {props.items}
            </Text>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.deleteButton}
                >
                    <Text style={styles.buttonText}>X</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.editButton}
                >
                    <Text style={styles.buttonText}>EDITAR</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FDFDFD',
        marginTop: 20,
        width: '100%',
    },
    textItem: {
        fontSize: 20,
    },
    buttonContainer: {
        flexDirection: 'row-reverse',
        alignItems: 'flex-end',
        borderBottomWidth: 1,
        borderBottomColor: '#CCCCCC',
        paddingBottom: 10,
        marginTop: 10,
    },
    deleteButton: {
        marginLeft: 10,
        height: 40,
        width: 40,
        backgroundColor: 'red',
        borderRadius: 10,
        paddind: 10,
        fontSize: 12,
        alignItems: 'center'
    },
    buttonText: {
        color: '#FDFDFD',
        fontWeight: 'bold',
    },
    editButton: {

    },
})