import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const HomeScreen = (props) => {
    const [city, setCity] = useState('');

    const getWeather = async () => {

        const APIKey = '41c1957da326302055c726cc7da9564c';
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}&units=metric`;


        try {
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);
            props.navigation.navigate('Weather', { data: data });
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <LinearGradient
        style={styles.gradientBack}
        colors={['#0099DD', '#00ABBD']}
        >
            <StatusBar hidden={false} backgroundColor='#0099DD' />
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    value={city}
                    onChangeText={setCity}
                    placeholder='Geben Sie einen Ort ein!'
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={getWeather}>
                    <Text style={styles.textButton}>
                        Anzeigen</Text>
                </TouchableOpacity>
            </View>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    gradientBack: {
        flex: 1,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginBottom: 30,
        textAlign: 'center',
    },
    input: {
        height: 40,
        borderColor: 'white',
        backgroundColor: '#ffffff40',
        borderWidth: 1,
        borderRadius: 5,
        marginTop: 20,
        marginBottom: 20,
        padding: 10,
        textAlign: 'center',
        color: 'white',
    },
    button: {
        marginTop: 30,
        alignItems: 'center',
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        width: 90,
        borderRadius: 20,
        borderColor: 'white',
        backgroundColor: '#ffffff40'
    },
    textButton: {
       fontWeight: 'bold',
    }
});

export default HomeScreen;