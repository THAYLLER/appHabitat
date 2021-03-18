import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconAntFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconAntFontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Ranking: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={{ marginBottom: 30,flexDirection: 'row', justifyContent: 'space-between' }}>
        <View style={styles.avatarCircle} >
          <IconAntDesign size={30} color='#bdbdbe' name="user" />
        </View>
        <View style={styles.boxInfo}>
          <Text style={styles.nameCircle}>Teste</Text>
          <Text style={styles.infoCircle}>Classificação Nº1</Text>
        </View>
        <View style={{ width: 50, height: 50, justifyContent: 'center', paddingTop: 15 }}>
          <IconAntFontAwesome5 name="medal" size={40} color="#ffd700" />
        </View>
      </View>
      <View style={{ marginBottom: 30,flexDirection: 'row', justifyContent: 'space-between' }}>
        <View style={styles.avatarCircle} >
          <IconAntDesign size={30} color='#bdbdbe' name="user" />
        </View>
        <View style={styles.boxInfo}>
          <Text style={styles.nameCircle}>Teste</Text>
          <Text style={styles.infoCircle}>Classificação Nº2</Text>
        </View>
        <View style={{ width: 50, height: 50, justifyContent: 'center', paddingTop: 15 }}>
          <IconAntFontAwesome5 name="medal" size={40} color="#cd7f32" />
        </View>
      </View>
      <View style={{ marginBottom: 30,flexDirection: 'row', justifyContent: 'space-between' }}>
        <View style={styles.avatarCircle} >
          <IconAntDesign size={30} color='#bdbdbe' name="user" />
        </View>
        <View style={styles.boxInfo}>
          <Text style={styles.nameCircle}>Teste</Text>
          <Text style={styles.infoCircle}>Classificação Nº3</Text>
        </View>
        <View style={{ width: 50, height: 50, justifyContent: 'center', paddingTop: 15 }}>
          <IconAntFontAwesome5 name="medal" size={40} color="#c0c0c0" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    height: Dimensions.get("window").height,
  },
  avatarCircle: {
    width: 50,
    height: 50,
    borderRadius: 60000,
    borderWidth: 1,
    borderColor: '#bdbdbe',
    justifyContent: 'center',
    alignItems: 'center'
  },
  boxInfo: {
    flexDirection: 'column',
    width: 175,
    marginLeft: 10
  },
  nameCircle: {
    fontFamily: 'roboto-bold',
    fontSize: 20
  },
  infoCircle: {
    fontFamily: 'roboto-regular',
    fontSize: 18,
    color: '#daa520',
  }
});

export default Ranking;