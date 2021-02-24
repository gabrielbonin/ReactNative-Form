import React, {useState} from 'react';
import {View, Text, TextInput, Switch, Image, TouchableOpacity, ScrollView} from 'react-native';

import Slider from '@react-native-community/slider';
import DropDownPicker from 'react-native-dropdown-picker';

import {useNavigation} from '@react-navigation/native';

import styles from './styles';

import imgCad from '../../assets/bank.png';

export default function Cadastro(){

  const [nome, setNome] = useState();
  const [idade, setIdade] = useState();
  const [sexo, setSexo] = useState();
  const [limite, setLimite] = useState(500);
  const [estudante, setEstudante] = useState(false);

  const navigation = useNavigation();

  function enviarDados(){
    navigation.navigate('Final', {nome: nome, idade: idade, estudante: estudante, limite: limite})
  }
  
  return(
    <View style={styles.container}>
      <Text style={styles.text1}>Seja muito Bem vindo!</Text>
      <Image source={imgCad}/>
      <Text style={styles.text2}>Crie sua conta abaixo:</Text>
        <ScrollView style={styles.ScrollView}>
        <View style={styles.containerForm}>
          
          <Text style={styles.textForm}>Nome:</Text>
          <TextInput style={styles.inputForm} 
          placeholder="Digite seu nome"
          onChangeText={(value)=> setNome(value)}
          ></TextInput>

          <Text style={styles.textForm}>Idade:</Text>
          <TextInput style={styles.inputForm}
          placeholder="Digite sua idade"
          keyboardType="numeric"
          onChangeText={(value)=> setIdade(value)}
          ></TextInput>

          <Text style={styles.textForm}>Informe seu sexo:</Text>
          <DropDownPicker
          items={[
            {label: 'Masculino', value: 'Masculino'},
            {label: 'Feminino' , value: 'Feminino'}
          ]}
          placeholder={'Selecione o sexo'}
          labelStyle={{fontSize: 16, textAlign: 'center', fontWeight: 'bold'}}
          defaultValue={sexo}
          arrowSize={0}
          containerStyle={{height: 40, width: '80%', marginBottom: 20, marginTop: 5}}
          style={{borderWidth: 2, borderColor: '#0AA1A1'}}
          itemStyle={{justifyContent: 'center'}}
          onChangeItem={(item) => setSexo(item.value)}
          />

          <Text style={styles.textSlider}>Seu limite desejavel: R$ ${limite.toFixed(0)}</Text>
          <Slider
          style={{width: '87%', height: 30}}
          minimumValue={500}
          maximumValue={2000}
          step={500}
          value={limite}
          onValueChange={(limite)=> setLimite(limite)}
          ></Slider>

          <View style={styles.formEstudante}>
          <Text style={styles.textForm}>Você é Estudante?</Text>
          <Switch
          trackColor={{false: '#767577', true: '#0AA1A1'}}
          onValueChange={(valEstudante)=> setEstudante(valEstudante)}
          value={estudante}
          ></Switch>
          </View>
          <TouchableOpacity style={styles.btnCadastro} onPress={enviarDados}>
            <Text style={styles.textBtnCadastro}>Abrir Conta</Text>
          </TouchableOpacity>
        </View>
        </ScrollView>
        
    </View>

  )
}