import React, { useState } from 'react';

import { TextInput } from 'react-native-paper';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import ImgForgotPassword from '../../assets/forgotPassword.png';

export default function ForgotPassword() {
  const [text, setText] = useState('');
  const navigation = useNavigation();

  function handleNavigateLogin() {
    navigation.navigate('SignIn');
  }

  function handleNavigateForgotPassword() { 
    navigation.navigate('ForgotPassword');
  }
  return (
    <View style={styles.containerComponent}>
      <View style={styles.container}>
        <View style={styles.boxTitle}>
          <Image style={styles.img} source={ImgForgotPassword} />
          <Text style={styles.title}>Esqueceu Sua senha?</Text>
          <Text style={styles.text}>
            Por favor, informe o E-mail associado a sua
            conta que enviaremos um link para o mesmo
            com as intruções para restauração de sua 
            senha.
          </Text>
        </View>
        <TextInput
          style={styles.input}
          mode="outlined"
          label="Email"
          value={text}
          onChangeText={text => setText(text)}
          underlineColor="transparent"
        />
        <TouchableOpacity style={styles.buttonLogin} onPress={handleNavigateLogin}>
          <Text style={styles.buttonLoginText}>
            Enviar
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerComponent:{
    flex: 1,
    backgroundColor: '#fff'
  },
  container: {
    marginRight: 30,
    marginLeft: 30,
    justifyContent: 'center',
  },
  img: {
    marginTop: 20,
    marginBottom: 40
  },
  boxTitle: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 20
  },
  title: {
    fontFamily: 'roboto-bold',
    fontSize: 30
  },
  text: {
    fontFamily: 'roboto-regular',
    fontSize: 15,
    marginTop: 10
  },
  input: {
    backgroundColor: '#fff',
    paddingTop: 20
  },
  buttonLogin: {
    backgroundColor: '#6c3bd0',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    marginTop: 30
  },
  buttonLoginText: {
    fontFamily: 'roboto-regular',
    fontSize: 20,
    color: '#fff'
  },
});
