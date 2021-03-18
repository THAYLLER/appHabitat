import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView, Dimensions } from 'react-native';

import banner from '../../assets/banner.png';

export default function MyPublicProfile() {
  return (
    <View style={styles.container}>
      <FontAwesome name="user-circle-o" color="#bdbdbe" size={100} />
      <View style={styles.boxBanner}>
        <Text style={styles.title}>Thayller Vilela Cintra</Text>
      </View>
      <Text style={styles.text}>Minha classificação: #1</Text>
      <View style={styles.boxMenu} >
        <View style={styles.rowInfo}>
          <View style={styles.itemInfo}>
            <Text style={styles.textBoldInfo}>
              0
            </Text>
            <Text style={styles.textInfo}>
              AMIGOS
            </Text>
          </View>
          <View style={styles.itemInfo}>
            <Text style={styles.textBoldInfo}>
              0
            </Text>
            <Text style={styles.textInfo}>
              GRUPOS
            </Text>
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.textBtn}>Editar meu perfil</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    width: '100%',
    alignItems: 'center',
    height: Dimensions.get("window").height,
  },
  boxBanner: {
    alignItems: 'center',
    width: '100%', 
    height: 50,
  },
  title: {
    fontFamily: 'roboto-bold',
    fontSize: 18,
    color: '#000',
    marginTop: 10
  },
  text: {
    fontFamily: 'roboto-medium',
    fontSize: 14,
    color: '#928f8f'
  },
  boxMenu: {
    width: '100%',
    marginTop: 20,
  },
  rowInfo: {
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10
  },
  itemInfo: {
    flex: 1,
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textInfo: {
    fontFamily: 'roboto-medium',
    color: '#928f8f',
    fontSize: 12
  },
  textBoldInfo: {
    fontFamily: 'roboto-bold',
    color: '#000',
    fontSize: 14
  },
   btn: {
     width: 200,
     height: 30,
     borderWidth: 1,
     borderColor: '#cecdcd',
     backgroundColor: '#cecdcd',
     justifyContent: 'center',
     marginTop: 30,
     borderRadius: 5
   }, 
   textBtn: {
    fontFamily: 'roboto-medium',
    color: '#000',
    fontSize: 14,
    textAlign: 'center'
   }, 
});
