import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

export default function AppItem(props) {
    return (
        <View
        style={styles.container}>
            <Text style={styles.textItem}>
                {props.item}
            </Text>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.deleteButton}
                    onPress={props.apagar}
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
        paddingHorizontal: 10,
        backgroundColor: '#FDFDFD',
        flexDirection: 'row',
        height: 35,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20,
        width: '100%',
    },
    textItem: {
        fontSize: 20,
    },
    buttonContainer: {
        flexDirection: 'row-reverse',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#CCCCCC',
        paddingBottom: 10,
        marginTop: 10,
    },
    deleteButton: {
        justifyContent: 'center',
        marginLeft: 10,
        height: 30,
        width: 30,
        backgroundColor: 'red',
        borderRadius: 10,
        paddind: 10,
        fontSize: 12,
        alignItems: 'center'
    },
    buttonText: {
        color: 'black',
        fontWeight: 'bold',
    },
    editButton: {
        backgroundColor: 'green',
    },
})