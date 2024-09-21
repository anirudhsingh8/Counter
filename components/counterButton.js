import { StyleSheet, Text, TouchableOpacity } from "react-native";

const CounterButton = ({ title, onPress }) => {
    return <TouchableOpacity activeOpacity={0.8} style={styles.button} onPress={onPress}>
        <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
}

const styles = StyleSheet.create({
    button: {
        paddingHorizontal: 28,
        paddingVertical: 20,
        backgroundColor: 'purple',
        justifyContent: 'center',
        margin: 10,
        alignItems: 'center',
        borderRadius: 50,
    },
    title: { 
        color: 'white', 
        fontSize: 20, 
        fontWeight: 'bold', 
    },
});

export default CounterButton;