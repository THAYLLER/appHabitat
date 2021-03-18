import React, { useState } from 'react';

import { TextInput } from 'react-native-paper';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Opinion() {
  const [text, setText] = useState('');
  const navigation = useNavigation();

  function handleNavigateRegister() { 
    navigation.navigate('SignUp');
  }
  
  return (
    <View style={styles.containerComponent}>
      <View style={styles.container}>
        <View style={styles.boxTitle}>
          <Text style={styles.title}>Envie sua Opnião</Text>
        </View>
        <TextInput
          style={styles.input}
          mode="outlined"
          label="Insira sua opinião"
          multiline
          numberOfLines={20}
          value={text}
          onChangeText={text => setText(text)}
          underlineColor="transparent"
          theme={{colors: {primary: '#24aaff'}}}
        />
        <TouchableOpacity style={styles.buttonLogin} onPress={handleNavigateRegister}>
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
    flex: 1,
    justifyContent: 'space-between',
    height: Dimensions.get("window").height,
    paddingBottom: 20
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
    backgroundColor: '#24aaff',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 30
  },
  buttonLoginText: {
    fontFamily: 'roboto-regular',
    fontSize: 20,
    color: '#fff'
  },
  
});
