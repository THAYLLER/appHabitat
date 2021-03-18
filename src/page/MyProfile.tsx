import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import IconFeather from 'react-native-vector-icons/Feather';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import banner from '../../assets/banner.png';

export default function MyProfile() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.btnHeader} onPress={() => navigation.navigate('SettingsPanel')}>
          <IconIonicons size={30} color='#bdbdbe' name="settings-sharp" />
        </TouchableOpacity>
      </View>
      <View style={styles.body}>
        <FontAwesome name="user-circle-o" color="#bdbdbe" size={100} />
        <View style={styles.boxBanner}>
          <Image source={banner} style={styles.banner} />
          <Text style={styles.textBanner}>0 TOTAL DE DIAS</Text>
        </View>
        <Text style={styles.text}>Minha classificação: #1</Text>
        <View style={styles.boxMenu} >
          <View style={styles.rowInfo}>
            <View style={styles.itemInfo}>
              <Text style={styles.textBoldInfo}>
                0
              </Text>
              <Text style={styles.textInfo}>
                CONSECUTIV(S)
              </Text>
            </View>
            <View style={styles.itemInfo}>
              <Text style={styles.textBoldInfo}>
                0
              </Text>
              <Text style={styles.textInfo}>
                RECORDS
              </Text>
            </View>
            <View style={styles.itemInfo}>
              <Text style={styles.textBoldInfo}>
                0
              </Text>
              <Text style={styles.textInfo}>
                MARCAS
              </Text>
            </View>
          </View>
          <View style={styles.menu}>
            <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('MyPublicProfile')}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: 130, alignItems: 'center' }}>
                <FontAwesome name="user" size={30} color='#928f8f' />
                <Text style={styles.menuItemText}>Perfil Público</Text>
              </View>
              <IconMaterialIcons name="keyboard-arrow-right" size={30} color='#928f8f' />
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('HelpAndSupport')}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: 80, alignItems: 'center' }}>
                <IconFeather name="help-circle" size={30} color='#928f8f' />
                <Text style={styles.menuItemText}>Ajuda</Text>
              </View>
              <IconMaterialIcons name="keyboard-arrow-right" size={30} color='#928f8f' />
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Opinion')}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: 140, alignItems: 'center' }}>
                <IconIonicons name="chatbubble-ellipses-outline" size={30} color='#928f8f' />
                <Text style={styles.menuItemText}>Enviar opinião</Text>
              </View>
              <IconMaterialIcons name="keyboard-arrow-right" size={30} color='#928f8f' />
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: 140, alignItems: 'center' }}>
                <IconAntDesign name="sharealt" size={30} color='#928f8f' />
                <Text style={styles.menuItemText}>Compartilhar</Text>
              </View>
              <IconMaterialIcons name="keyboard-arrow-right" size={30} color='#928f8f' />
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Notifications')}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: 140, alignItems: 'center' }}>
                <IconAntDesign name="infocirlce" size={30} color='#928f8f' />
                <Text style={styles.menuItemText}>Notificações</Text>
              </View>
              <IconMaterialIcons name="keyboard-arrow-right" size={30} color='#928f8f' />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'space-between',
    height: Dimensions.get("window").height,
  },
  header: {
    width: '100%',
    height: 60,
    backgroundColor: 'transparent',
    position: 'absolute',
    top: 0,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 15,
    marginTop: 5,
    flex: 1,
  },
  btnHeader: {
    width: 40,
    height: 30,
  },
  body: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 40,
    paddingTop: 20
  },
  boxBanner: {
    alignItems: 'center',
    width: '100%', 
    height: 50,
  },
  banner: { 
    width: 225, 
    height: 60,
    position: 'relative',
    bottom: 20
  },
  textBanner: {
    position: 'relative',
    fontFamily: 'roboto-bold',
    fontSize: 14,
    bottom: 68,
    color: '#fff'
  },
  text: {
    fontFamily: 'roboto-medium',
    fontSize: 14,
    color: '#928f8f'
  },
  boxMenu: {
    flex: 1,
    width: '100%',
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
  menu: {
    flexDirection: 'column',
    marginTop: 20,
    marginBottom: 20
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    alignItems: 'center',
    width: '100%',
    height: 50
  },
  menuItemText: {
    fontFamily: 'roboto-medium',
    fontSize: 16,
    color: '#928f8f'
  },
  boxNotifications: {
    flexDirection: 'column',
    marginTop: 20,
    padding: 15
  },
  titleNotifications: {
    fontFamily: 'roboto-bold',
    fontSize: 18,
    color: '#000'
  },
  cardNotifications: {
    flexDirection: 'row',
    marginTop:10
  },
  cardItemNotifications: {
    marginLeft: 15,
    flexDirection: 'column',
  },
  titleCardItemNotifications: {
    fontFamily: 'roboto-bold',
  },
  descriptionCardItemNotifications: {
    fontFamily: 'roboto-regular',
  },
});
