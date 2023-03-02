import { StyleSheet, Dimensions } from "react-native"

export const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width * 0.45,
        backgroundColor: '#e6e6e6',
        margin: 5,
        padding: 10,
        borderRadius: 7
    },
    fullContainer: {
        width: Dimensions.get('window').width * 0.92,
        backgroundColor: '#e6e6e6',
        margin: 5,
        padding: 10,
        borderRadius: 7
    },
    image: {
        width: Dimensions.get('window').width * 0.40,
        height: Dimensions.get('window').height * 0.30,
        borderRadius: 7,
        alignSelf: 'center',
    },
    fullImage: {
        width: Dimensions.get('window').width * 0.87,
        height: Dimensions.get('window').height * 0.30,
        borderRadius: 7,
        alignSelf: 'center',
    },
    title: {
        fontSize: 16,
        fontWeight: '600',
        color: 'black',
        marginTop: 10
    },
    price: {
        color: 'gray',
        fontWeight: 'bold',
    },
    stock: {
        color: 'red',
        fontSize: 16,
        fontWeight: '600'
    }

})