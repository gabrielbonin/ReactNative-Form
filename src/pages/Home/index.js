import React, {Component} from 'react';
import {View, Image, TouchableOpacity, Text} from 'react-native';
import styles from './styles';

import {useNavigation} from '@react-navigation/native';

import logo from '../../assets/logo.png';

export default function Home(){
  const navigation = useNavigation();

  function irCadastro(){
    navigation.navigate('Cadastro');
  }

    return (
      <View style={styles.container}>
        <Image style={styles.img} source={logo}/>
        <TouchableOpacity style={styles.buttonCadastro} onPress={irCadastro}>
          <Text style={styles.botaoTexto}>Primeiro Acesso</Text>
        </TouchableOpacity>
      </View>
    );
}


