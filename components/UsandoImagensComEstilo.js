import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
    },
    stretch: {
        width: 200,
        height: 200,
        resizeMode: 'stretch',
    },
});

const UsandoImagensComEstilo = () => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.stretch}
                source={require('../assets/iconCat.png')}
            />
        </View>
    );
};

export default UsandoImagensComEstilo;