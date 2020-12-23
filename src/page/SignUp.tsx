import React, { useState } from 'react';

import { TextInput } from 'react-native-paper';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function SignUp() {
  const [text, setText] = useState('');
  const navigation = useNavigation();

  function handleNavigateRegister() { 
    navigation.navigate('SignUp');
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
        
        <TouchableOpacity style={styles.buttonLogin} onPress={handleNavigateRegister}>
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
