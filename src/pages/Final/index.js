import React, {useState} from 'react';
import {View, Text, TextInput, Switch, Image, TouchableOpacity, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import imgCongrats from '../../assets/congrats.jpg';
import styles from './styles';
export default function Final({route}){
  const navigation = useNavigation();
  return(
    <View style={styles.container}>
      <Image source={imgCongrats} style={{width: '100%', height: 200}}/>
      <Text style={styles.text1}>Parabéns por criar sua conta: {route.params.nome}</Text>
      <Text style={styles.text2}>Seja muito Bem vindo(a) abaixo estão algumas de suas informações:</Text>
      <Text style={styles.text3}>Sua idade: {route.params.idade}</Text>
      <Text style={styles.text3}>Estudante?: {(route.params.estudante) ? 'Sim' : 'Não'}</Text>
      <Text style={styles.text3}>Seu limite de crédito: {route.params.limite}</Text>
    </View>
  );

}