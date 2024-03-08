import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

const FaceTimeScreen = () => {
    return (
        <View style={styles.container}>
            {/* FaceTime content */}
            <View style={styles.content}>
                <Text style={styles.text}>FaceTime Screen</Text>
            </View>

            <View style={styles.cameraContainer}>
                {/* Front camera */}
                <View style={styles.camera} />
            </View>
            
            {/* Close button */}
            <View style={styles.actionButtons}>
                <TouchableOpacity onPress={() => router.back()} style={styles.closeButton}>
                    <Ionicons name="close" size={30} color="white" />
                </TouchableOpacity>

                {/* Volume icon */}
                <TouchableOpacity style={styles.volumeIcon}>
                    <Ionicons name="volume-high" size={30} color="white" />
                </TouchableOpacity>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 24,
        color: 'white',
    },
    closeButton: {
        padding: 16,
        borderRadius: 50,
        backgroundColor: 'rgba(90, 25, 1, 0.3)',
    },
    actionButtons: {
        bottom: 50,
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 16,
    },
    volumeIcon: {
        padding: 16,
        borderRadius: 50,
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
    },
    cameraContainer: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        padding: 16,
        height: '25%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    camera: {
        width: 100,
        height: '100%',
        borderRadius: 16,
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
    },
});

export default FaceTimeScreen;