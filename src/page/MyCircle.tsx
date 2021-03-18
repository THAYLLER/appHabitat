import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconAntFontAwesome from 'react-native-vector-icons/FontAwesome';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Home from '../page/Home';
import Messages from '../page/Message';
import Ranking from '../page/Ranking';

const Tab = createMaterialTopTabNavigator();

const MyCircle: React.FC = (): JSX.Element => {
  

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.btnHeader} onPress={() => {}}>
          <IconAntFontAwesome size={35} color='#000' name="angle-left" />
        </TouchableOpacity>
        <View style={styles.avatarCircle} >
          <IconAntDesign size={25} color='#000' name="user" />
        </View>
        <View style={styles.boxInfo}>
          <Text style={styles.nameCircle}>Teste</Text>
          <Text style={styles.infoCircle}>Membros & Configurações</Text>
        </View>
        <TouchableOpacity style={styles.btnHeader}>
          <IconAntFontAwesome size={20} color='#000' name="bell" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnHeader} onPress={() => {}}>
          <IconAntFontAwesome size={20} color='#000' name="share" />
        </TouchableOpacity>
      </View>
      <View style={styles.body}>
        <Tab.Navigator>
          <Tab.Screen name="Mensagens" component={Messages} />
          <Tab.Screen name="Meus Habitos" component={Home} />
          <Tab.Screen name="Ranking" component={Ranking} />
        </Tab.Navigator>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fff',
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
    alignContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    marginTop: 5,
    flex: 1,
  },
  boxInfo: {
    flexDirection: 'column',
    width: 175,
    marginLeft: 10
  },
  btnHeader: {
    width: 40,
    height: 30,
  },
  avatarCircle: {
    width: 40,
    height: 40,
    borderRadius: 60000,
    borderWidth: 1,
    borderColor: '#000',
    justifyContent: 'center',
    alignItems: 'center'
  },
  body: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'flex-start',
    position: 'absolute',
    top: 60,
    paddingTop: 20
  },
  nameCircle: {
    fontFamily: 'roboto-bold',
    fontSize: 20
  },
  infoCircle: {
    fontFamily: 'roboto-regular',
    fontSize: 14,
    color: '#bdbdbe',
  },
  tab: {
    backgroundColor: 'transparent',
    color: '#000',
    fontFamily: 'roboto-regular',
  }
});

export default MyCircle;