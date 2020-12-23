import React, { useState } from 'react';

import { TextInput } from 'react-native-paper';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconAntFontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

export default function SignUp() {
  const [text, setText] = useState('');
  const navigation = useNavigation();

  function handleNavigateRegister() {
    
    navigation.navigate('Register');
  }
  return (
    <View style={styles.containerComponent}>
      <View style={styles.container}>
        <View style={styles.boxTitle}>
          <Text style={styles.title}>Registre-se</Text>
        </View>
        <TextInput
          style={styles.input}
          mode="outlined"
          label="Nome"
          value={text}
          onChangeText={text => setText(text)}
          underlineColor="transparent"
        />
        <TextInput
          style={styles.input}
          mode="outlined"
          label="Email"
          value={text}
          onChangeText={text => setText(text)}
          underlineColor="transparent"
        />
        <TextInput
          style={styles.input}
          mode="outlined"
          label="Senha"
          value={text}
          secureTextEntry={true}
          onChangeText={text => setText(text)}
          right={<TextInput.Icon name="eye" color='#9b9ea0' onPress={() => {}} />}  
        />
        <TextInput
          style={styles.input}
          mode="outlined"
          label="Confirmar Senha"
          value={text}
          secureTextEntry={true}
          onChangeText={text => setText(text)}
          right={<TextInput.Icon name="eye" color='#9b9ea0' onPress={() => {}} />}  
        />
        
        <TouchableOpacity style={styles.buttonLogin} onPress={() => {}}>
          <Text style={styles.buttonLoginText}>
            Cadastrar
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
    flex: 1,
    justifyContent: 'center',
    
  },
  boxTitle: {
    alignItems: 'center',
    marginBottom: 30
  },
  title: {
    fontFamily: 'roboto-bold',
    fontSize: 30
  },
  input: {
    backgroundColor: '#fff',
    paddingTop: 20
  },
  forgotPasswordText: {
    paddingTop: 5,
    color: '#abacad',
    fontFamily: 'roboto-medium'
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
  boxNewAccount: {
    marginTop: 30,
    flexDirection: 'row'
  },
  textNewAccount: {
    fontFamily: 'roboto-regular',
    fontSize: 15,
  },
  linkNewAccount: {
    paddingStart: 10
  },
  linkNewAccountText: {
    fontFamily: 'roboto-medium',
    fontSize: 15,
    color: '#6c3bd0',
  },
  boxSignInSocialMedia: {
    borderTopColor: '#abacad',
    borderTopWidth: 1,
    bottom: 0,
    marginTop: 90,
    alignItems: 'center'
  },
  signInSocialMediaText: {
    fontFamily: 'roboto-regular',
    fontSize: 15,
    marginTop: 10
  },
  boxButtons: {
    marginTop: 15,
    flexDirection: 'row',
    paddingTop: 10
  },
  buttonSocialMediaGoogle: {
    backgroundColor: '#ea534e',
    height: 50,
    width: 120,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginEnd: 20
  },
  buttonSocialMediaFacebook: {
    backgroundColor: '#3c5a99',
    height: 50,
    width: 120,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center'
  },
});
