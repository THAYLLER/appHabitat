import React, { useState, useEffect } from 'react';

import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { useNavigation } from '@react-navigation/native';

import { StyleSheet, View, Text, Modal, ScrollView, TouchableOpacity, TouchableHighlight } from 'react-native';

const Home: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={{ width: '100%', flexDirection: 'row' }}>
        <View style={{ width: '90%' }}>
          <Text style={styles.title}>Hoje</Text>
        </View>
        <View 
          style={{ 
            width: '10%', 
            alignItems: 'center', 
            justifyContent: 'center' 
          }}
          >
          
            <IconAntDesign name="filter" size={20} color="#696666" onPress={() => setModalVisible(true)} />
          
        </View>
      </View>
      <View style={styles.habitList}>
        <TouchableOpacity style={styles.habitItemIncomplete} onPress={() => navigation.navigate('Habit')}>
          <View style={styles.habitItemColumn}>
            <Text style={styles.habitItemTitle}>
              um presente para si mesmo
            </Text>
            <Text style={styles.habitItemText}>
              termina em 1-1-1
            </Text>
          </View>  
          <View style={styles.habitItemColumnRow}>
          <Text style={styles.habitItemTextNumber} />
            <IconMaterialIcons name="arrow-forward-ios" size={25} color="#fff" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.habitItemComplete} onPress={() => navigation.navigate('Habit')}>
          <View style={styles.habitItemColumn}>
            <Text style={styles.habitItemTitle}>
              um presente para si mesmo
            </Text>
            <Text style={styles.habitItemText}>
              termina em 1-1-1
            </Text>
          </View>  
          <View style={styles.habitItemColumnRow}>
          <Text style={styles.habitItemTextNumber}>
              1
            </Text>
            <IconMaterialIcons name="keyboard-arrow-down" size={25} color="#fff" />
          </View>
        </TouchableOpacity>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Hello World!</Text>

              <TouchableHighlight
                style={{ ...styles.openButton, backgroundColor: '#2196F3' }}
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}>
                <Text style={styles.textStyle}>Hide Modal</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    padding: 20
  },
  title: {
    fontFamily: 'roboto-medium',
    fontSize: 30,
    color: '#000',
    textAlign: 'center'
  },
  habitList: { 
    width: '100%', 
    flexDirection: 'column', 
    paddingTop: 20, 
    justifyContent: 'space-between',
  },
  habitItemIncomplete: {  
    width: '100%', 
    height: 80, 
    backgroundColor:"#acacac", 
    borderRadius: 10,
    flexDirection: 'row', 
    justifyContent: 'space-between',
    padding: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  habitItemComplete: {  
    width: '100%', 
    height: 80, 
    backgroundColor:"#24aaff", 
    borderRadius: 10,
    flexDirection: 'row', 
    justifyContent: 'space-between',
    padding: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  habitItemColumn: {
    flexDirection: 'column',
  },
  habitItemColumnRow: {
    flexDirection: 'row',
  },
  habitItemTitle: {
    fontFamily: 'roboto-bold',
    color: '#fff',
    fontSize: 16
  },
  habitItemText: {
    fontFamily: 'roboto-medium',
    color: '#fff',
    fontSize: 14
  },
  habitItemTextNumber: {
    fontFamily: 'roboto-medium',
    color: '#fff',
    fontSize: 22,
    paddingRight: 10
  },

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default Home;
