import { StyleSheet, Dimensions } from 'react-native';

/**
 * Fetch Device width.
 */
const width = Dimensions.get('window').width;

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        height: undefined,
        width: undefined
    },
    inputView: {
        height: 180,
        marginHorizontal: 30,
        padding: 10,
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
    },
    trueView: {
        backgroundColor: '#0086fe',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        width: width - 30,
        flexDirection: 'row',
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
    },
    trueText: {
        color: '#fff',
        margin: 10,
        fontSize: 14,
        fontWeight: "500",
    },
    subTrueOne: {
        flex: 0.1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    subTrueTwo: {
        flex: 0.9,
        justifyContent: 'center',
        alignItems: 'center'
    },
    trueDescView: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 5
    },
    truecallerImage: {
        width: 20,
        height: 20,
    },
    orText: {
        color: 'black',
        fontSize: 16,
        fontWeight: "500",
        marginVertical: 20
    },
    verifyText: {
        color: "black",
        marginTop: 20,
        marginBottom: 20,
        alignSelf: 'center',
        fontSize: 16,
        fontWeight: "300"
    },
    underline: {
        height: 1,
        backgroundColor: 'gray',
    },
    countryNameView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10
    },
    text: {
        color: "gray"
    },
    touchFlag: {
        height: 40,
        width: width - 100
    },
    numberView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10
    },
    textInput: {
        width: width - 100,
        height: 38
    },
    buttonView: {
        backgroundColor: 'yellow',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        width: width - 30,

        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
    },
    buttonText: {
        color: 'black',
        margin: 10,
        fontSize: 14,
        fontWeight: "500"
    },
    buttonDescView: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    },
    buttonDescText: {
        color: 'gray',
        fontSize: 11,
        fontWeight: "500"
    },
    skipText: {
        color: 'black',
        fontSize: 12,
        fontWeight: "500",
        marginTop: 20
    }
});
