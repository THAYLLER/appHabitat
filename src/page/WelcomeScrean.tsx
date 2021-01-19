import React from 'react';

import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

import TodoListImg from '../../assets/To-do-list.png';

export default function WelcomeScrean() {
  const navigation = useNavigation();

  function handleNavigateHome() { 
    navigation.navigate('Home');
  }

  return (
    <View style={styles.container}>
      <Image source={TodoListImg} style={styles.img} />
      <Text style={styles.title}>
        Olá!
      </Text>
      <Text style={styles.description}>
        Eu sou! Seu assistente para se aperfeiçoar, vou ajudá-lo a criar bons 
        hábitos e abandonar os de banda, definir novos objetivos e alcançá-los.
      </Text>

      <TouchableOpacity onPress={handleNavigateHome} style={styles.btn}>
        <IconAntDesign name="arrowright" size={30} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fa3c22',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: 360,
    height: 360
  },
  title: {
    fontFamily: 'roboto-bold',
    fontSize: 30,
    color: '#fff'
  },
  description: {
    fontFamily: 'roboto-regular',
    fontSize: 18,
    padding: 10,
    color: '#fff'
  },
  btn: {
    borderRadius: 200,
    width: 70,
    height: 70,
    backgroundColor: '#008000',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    top: 60
  }
});
