import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const WeatherCard = (props) => {

    return (
        <View style={styles.card}>
            <Text style={styles.textTitle}>{props.weatherData.name}</Text>
            <Image
                style={styles.icon}
                source={{ uri: `http://openweathermap.org/img/wn/${props.weatherData.weather[0].icon}.png` }}
            />
            <Text style={styles.textTemp}>{props.weatherData.main.temp} °C</Text>
            <View style={styles.textContainer}>
                <View style={styles.feelsContainer}>
                    <Image 
                    source={require('../../feels-like.png')} 
                    style={styles.iconFeel} 
                    resizeMode='contain' 
                    />
                    <Text style={styles.text}>{props.weatherData.main.feels_like} °C</Text>
                </View>
                <View style={styles.windContainer}>
                    <Image 
                    source={require('../../wind.png')} 
                    style={styles.iconWind}
                    resizeMode='contain' 
                    />
                    <Text style={styles.text}>{props.weatherData.wind.speed} km/h</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        width: 250,
        height: 350,
        marginBottom: 60,
        padding: 20,
        borderRadius: 10,
        elevation: 10,
        textAlign: 'center',
        alignItems: 'center',
    },
    textTemp: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 35,
        marginTop: 15,
        color: '#FF9933',
    },
    textContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    feelsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    windContainer: {
        flexDirection: 'row',
    },
    text: {
        fontSize: 12,
        color: '#FF9933',
    },
    textTitle: {
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 10,
        color: '#FF9933',
    },
    icon: {
        height: 100,
        width: 150,
        borderRadius: 10,
    },
    iconWind: {
        width: 34,
        height: 20,
    },
    iconFeel: {
        width: 30,
        height: 16,
    },
});

export default WeatherCard;