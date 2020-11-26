import React, { useState, useEffect } from 'react';
import { Alert, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import { Container, Form, Item, Input, Label, Text, Button } from 'native-base';
import { Image, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../../redux/actions/userActions.js'
import * as LocalAuthentication from 'expo-local-authentication';
import LottieView from 'lottie-react-native';
import s from './styles.js';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

const API_URL = "192.168.0.6:3000";


const Touch = ({ navigation }) =>{
    const user = useSelector((state) => state.userReducer);
    const [suportted, setSuportted] = useState(null);
    const [nombre, setNombre] = useState('Usuario');
    useEffect(() => {
        LocalAuthentication.supportedAuthenticationTypesAsync()
            .then(success => {
                setSuportted(true);
            })
            .catch((error) => {
                console.log("Error touch: " + error)
                alert("Tu dispositivo no es compatible")
            })
    }, []);
  
    function handleLogin() {
        const config = {
            promptMessage: "Autenticacion Touch ID",
            color: "#FF0000",
            fallbackLabel: 'Touch ID invalido'
        };
        LocalAuthentication.authenticateAsync(config)
            .then(success => {
               
                navigation.navigate('Home');
            })
            .catch(error => {
                console.log('La auntenticacion fallo: ' + error)
            })
    }

    return(
        <Container style={s.container}>
        <KeyboardAvoidingView 
            behavior='position'>
            <View style={s.imageContainer}>
                <Image source={require('../../../assets/nova.png')} style={s.image} />
            </View>
            <View style={s.optionsContainer}>
                <TouchableOpacity style={s.buttonBiometric} onPress={() => handleLogin()}>
                    <LottieView style={s.fingerPrint} source={require('../../../assets/lf30_editor_ftmbz2nl.json')} autoPlay loop />
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    </Container>
    )
}
export default Touch;