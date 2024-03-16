import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22,
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
});

const ListaDinamica = () => {
    return (
        <View style={styles.container}>
            <FlatList
                data={[
                    { key: 'Eu' },
                    { key: 'estou' },
                    { key: 'aprendendo' },
                    { key: 'Reactive' },
                    { key: 'Native' },
                    { key: '!' },
                    { key: 'Estou' },
                    { key: 'muito' },
                    { key: 'feliz' },
                    { key: ':)' },
                ]}
                renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
            />
        </View>
    );
};

export default ListaDinamica;