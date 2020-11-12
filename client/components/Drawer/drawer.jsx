import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View, TouchableOpacity, Image, Text } from 'react-native';
import PrincipalScreen from '../PrincipalScreen/principal_screen.jsx'
import s from './style.js'
import Icon from 'react-native-vector-icons/FontAwesome5';

const Drawer = createDrawerNavigator();

const OptionDrawer = ({ iconName, optionName }) => {
    return (
        <TouchableOpacity>
            <View style={s.menuContainer}>
                <Icon size={18} name={iconName}></Icon>
                <Text style={s.tituloTxt}>{optionName}</Text>
            </View>
        </TouchableOpacity>
    );
};

const MenuDrawer = () => {
    return (
        <View style={s.container}>
            <View style={s.bgContainer}>
                <TouchableOpacity >
                    <View style={s.userContainer}>
                        <Image source={{ uri: 'https://img2.freepng.es/20180418/ujq/kisspng-metal-gear-solid-peace-walker-military-soldier-bi-5ad79833ac2a92.8090401915240786437052.jpg' }}
                            style={s.userImagen}
                        />
                    </View>
                    <View>
                        <Text style={s.userTitulo}>Kevin Vega</Text>
                        <Text style={s.userSubTitulo}>kevinvega2070@gmail.com</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <OptionDrawer iconName='home' optionName='Home' />
            <OptionDrawer iconName='hand-holding-usd' optionName='Transacciones' />
            <OptionDrawer iconName='store-alt' optionName='Mis productos' />
            <OptionDrawer iconName='user-alt' optionName='Mis datos' />
        </View>
    );
};

const MyDrawer = () => {
    return (
        <Drawer.Navigator drawerContent={() => <MenuDrawer />}>
            <Drawer.Screen name="Home" component={PrincipalScreen} />
        </Drawer.Navigator>
    );
};

export default MyDrawer;