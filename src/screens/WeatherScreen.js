import React from 'react';
import { View, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';
import WeatherCard from '../components/WeatherCard';
import Icon from 'react-native-vector-icons/FontAwesome';
import { LinearGradient } from 'expo-linear-gradient';

const WeatherScreen = (props) => {
    const { data } = props.route.params;

    return (
        <LinearGradient
            style={styles.gradientBack}
            colors={['#0099DD', '#00ABBD']}
        >
            <StatusBar hidden={false} backgroundColor='#0099DD' />
            <View style={styles.iconContainer}>
                <TouchableOpacity onPress={() => { props.navigation.navigate('Home') }}>
                    <Icon name='search' size={30} color='#fff' />
                </TouchableOpacity>
            </View>
            <View style={styles.cardContainer}>
                <WeatherCard weatherData={data} />
            </View>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    gradientBack: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconContainer: {
        position: 'absolute',
        top: 20,
        right: 20,
    }
});

export default WeatherScreen;