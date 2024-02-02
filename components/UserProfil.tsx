import { View, Text, StyleSheet } from "react-native";

interface UserProfileProps {
    name: string;
    age: number;
    email: string;
}

export default function UserProfile({ name, age, email }: UserProfileProps) {
    return (
        <View style={styles.container}>
            <Text>{name}</Text>
            <Text>{age}</Text>
            <Text>{email}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center"
    }
});
