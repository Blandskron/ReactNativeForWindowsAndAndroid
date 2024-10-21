import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet, FlatList } from 'react-native';
import axios from 'axios';

const DashboardScreen = () => {
    const [input, setInput] = useState('');
    const [movies, setMovies] = useState([]);
    const [responseMessage, setResponseMessage] = useState('');
    const [error, setError] = useState('');

    const recommendMovie = () => {
        axios.post('http://10.0.2.2:8000/api/recommend/', { message: input })
            .then(response => {
                if (response.data.movies) {
                    setMovies(response.data.movies);
                } else {
                    setMovies([]);
                }
                setResponseMessage(response.data.response);
                setError('');
            })
            .catch(() => {
                setError('Failed to fetch movie recommendation. Please try again.');
                setMovies([]);
                setResponseMessage('');
            });
    };

    // Render a single movie item
    const renderMovie = ({ item }) => (
        <View style={styles.movieContainer}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.genre}>Genre: {item.genre}</Text>
            <Text style={styles.overview}>{item.overview}</Text>
            {item.poster_url ? <Image source={{ uri: item.poster_url }} style={styles.poster} /> : null}
        </View>
    );

    return (
        <View style={styles.container}>
            {error && <Text style={styles.error}>{error}</Text>}
            <Text style={styles.response}>{responseMessage}</Text>
            <FlatList
                data={movies}
                renderItem={renderMovie}
                keyExtractor={item => item.title}
                ListEmptyComponent={
                    !error && !responseMessage ? (
                        <Text style={styles.empty}>No movies to display yet.</Text>
                    ) : null
                }
            />
            <TextInput
                style={styles.input}
                placeholder="Enter your preferences or question"
                value={input}
                onChangeText={setInput}
            />
            <Button title="Get Recommendation" onPress={recommendMovie} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 20,
        justifyContent: 'flex-start',
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginTop: 20,
        paddingHorizontal: 10,
        width: '100%',
    },
    response: {
        fontSize: 16,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    error: {
        color: 'red',
        marginBottom: 10,
    },
    empty: {
        textAlign: 'center',
        color: 'gray',
        marginVertical: 10,
    },
    movieContainer: {
        alignItems: 'center',
        marginBottom: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    genre: {
        fontSize: 16,
    },
    overview: {
        marginVertical: 10,
    },
    poster: {
        width: 200,
        height: 300,
        marginTop: 10,
    },
});

export default DashboardScreen;
