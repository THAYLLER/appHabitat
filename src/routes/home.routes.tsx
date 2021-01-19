import React, { useState } from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesignIcons from 'react-native-vector-icons/AntDesign';
import { TouchableOpacity,View, StyleSheet, Text, CheckBox } from 'react-native';
import { BottomSheet } from 'react-native-btr';
import { TextInput } from 'react-native-paper';


const Tab = createBottomTabNavigator();

import Home from '../page/Home';
import Graphics from '../page/Graphics';
import AddTasksOrHabits from '../page/AddTasksOrHabits';
import MyProfile from '../page/MyProfile';
import Circle from '../page/Circle';

export default function HomeRoutes() {
  const [visible, setVisible] = useState(false);
  const [option, setOption] = useState('tarefa');
  const [day, setDay] = useState([]);
  const [text, setText] = useState('');

  const toggleBottomNavigationView = () => {
    setVisible(!visible);
  };

  return (
    <>
      <Tab.Navigator
        initialRouteName="Home"
        tabBarOptions={{
          style: {
            backgroundColor: '#fff',
          },
          activeTintColor: '#fa3c22',
          inactiveTintColor: '#bdbdbe',
          
        }}
      >
        <Tab.Screen 
          name="Graphics"  
          component={Graphics} 
          options={{
            tabBarLabel: '',
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="bar-chart" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({ color, size }) => (
              <AntDesignIcons name="appstore-o" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen 
          name="AddTasksOrHabits"  
          component={AddTasksOrHabits} 
          options={{
            tabBarLabel: '',
            tabBarButton: () => (
              <TouchableOpacity
                  style={{ height: 50, width: 80, top: 3 }}      
                  onPress={toggleBottomNavigationView}
                >
                  <FontAwesome name="plus-circle" color="#bdbdbe" size={30} style={{ marginLeft: 30 }}/>
                </TouchableOpacity>
            ),
            
          }}
        />
        <Tab.Screen 
          name="Circle"  
          component={Circle} 
          options={{
            tabBarLabel: '',
            tabBarIcon: ({ color, size }) => (
              <>
                <FontAwesome name="circle-o" color={color} size={size} />
                <View style={styles.notification} />
              </>
            ),
          }}
        />
        <Tab.Screen 
          name="MyProfile"  
          component={MyProfile} 
          options={{
            tabBarLabel: '',
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="user-circle-o" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
      
      <BottomSheet
        visible={visible}
        onBackButtonPress={toggleBottomNavigationView}
        onBackdropPress={toggleBottomNavigationView}
      >
        <View style={styles.container}>
          <View style={styles.body}>
            <View style={styles.box}>
              <TouchableOpacity style={styles.buttonOption}>
                <Text style={{ 
                  fontFamily: 'roboto-medium',
                  fontSize: 18, 
                  color: `#${option === 'tarefa' ? 'fa3c22' : '000'}`
                  }}>
                  Tarefa
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonOption}>
                <Text style={{ 
                  fontFamily: 'roboto-medium',
                  fontSize: 18,
                  color: `#${option === 'habilidade' ? 'fa3c22' : '000'}`
                  }}>
                  Hábitos
                </Text>
              </TouchableOpacity>
            </View>
            <TextInput
              style={styles.input}
              mode="outlined"
              label="Nome"
              value={text}
              onChangeText={text => setText(text)}
              underlineColor="transparent"
            />
            <View style={styles.boxTitleSetDate}>
              <FontAwesome name="calendar" size={20} color="#bdbdbe"/>
              <Text style={styles.titleSetDate}> Todos os dias</Text>
            </View>
            <View style={styles.box}>
              <TouchableOpacity style={{ 
                  height: 30,
                  width: 30,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 10,
                  backgroundColor: `#${day.length  > 0 ? 'fa3c22' : 'bdbdbe'}`
                  }}>
                <Text style={styles.buttonSetDayText}>
                  D
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ 
                  height: 30,
                  width: 30,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 10,
                  backgroundColor: `#${day.length  > 0 ? 'fa3c22' : 'bdbdbe'}`
                  }}>
                <Text style={styles.buttonSetDayText}>
                  S
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ 
                  height: 30,
                  width: 30,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 10,
                  backgroundColor: `#${day.length  > 0 ? 'fa3c22' : 'bdbdbe'}`
                  }}>
                <Text style={styles.buttonSetDayText}>
                  T
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ 
                  height: 30,
                  width: 30,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 10,
                  backgroundColor: `#${day.length  > 0 ? 'fa3c22' : 'bdbdbe'}`
                  }}>
                <Text style={styles.buttonSetDayText}>
                  Q
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ 
                  height: 30,
                  width: 30,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 10,
                  backgroundColor: `#${day.length  > 0 ? 'fa3c22' : 'bdbdbe'}`
                  }}>
                <Text style={styles.buttonSetDayText}>
                  Q
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ 
                  height: 30,
                  width: 30,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 10,
                  backgroundColor: `#${day.length  > 0 ? 'fa3c22' : 'bdbdbe'}`
                  }}>
                <Text style={styles.buttonSetDayText}>
                  S
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ 
                  height: 30,
                  width: 30,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 10,
                  backgroundColor: `#${day.length  > 0 ? 'fa3c22' : 'bdbdbe'}`
                  }}>
                <Text style={styles.buttonSetDayText}>
                  S
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.checkboxAlertContainer}>
              <CheckBox
                value={false}
                onValueChange={() => {}}
              />
              <Text style={styles.checkboxAlertText}>Criar lembrete?</Text>
            </View>
            <View style={styles.boxHouer}>
              <TextInput
                style={styles.inputHouer}
                mode="outlined"
                label="Hora"
                value={text}
                onChangeText={text => setText(text)}
                underlineColor="transparent"
              />
              <Text style={styles.houerText}>
                :
              </Text>
              <TextInput
              style={styles.inputHouer}
              mode="outlined"
              label="Min"
              value={text}
              onChangeText={text => setText(text)}
              underlineColor="transparent"
            />
            </View>
            <View style={styles.boxAddCancel}>
              <TouchableOpacity style={styles.buttonCancel}>
                <Text style={styles.buttonCancelText}>
                   Cancelar
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonAdd}>
                <Text style={styles.buttonAddText}>
                  Adicionar
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>    
      </BottomSheet>
  </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: '100%',
    height: 470,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20
  },
  body:{
    flex: 1,
    width: '100%',
    height: 470,
    padding: 20
  },
  input: {
    backgroundColor: '#fff',
    paddingTop: 20
  },
  inputHouer: {
    backgroundColor: '#ffff',
    width: 100,
  },
  box: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center'
  },
  boxHouer: {
    flexDirection: 'row',
    width: 250,
    justifyContent: 'space-around',
    alignContent: 'center',
    alignItems: 'center'
  },
  buttonOption: {
    backgroundColor: '#fff',
    height: 40,
    width: '50%',
    alignItems: 'center'
  },
  boxTitleSetDate: {
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 20
  },
  titleSetDate: {
    fontFamily: 'roboto-regular',
    fontSize: 15,
    marginStart: 15
  },
  buttonSetDayText: {
    fontFamily: 'roboto-bold',
    fontSize: 15,
    color: '#fff'
  },
  houerText: {
    fontFamily: 'roboto-bold',
    fontSize: 40,
  },
  checkboxAlertContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    color:'#fa3c22',
    marginTop: 15,
    marginBottom: 15,
  },
  checkboxAlertText: {
    fontFamily: 'roboto-regular',
    fontSize: 15,
    color: '#bdbdbe',
  },
  boxAddCancel: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
    position: 'relative',
    top: 40
  },
  buttonCancel: {
    backgroundColor: '#ff0000',
    height: 40,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    padding: 10,
    borderRadius: 10    
  },
  buttonCancelText: {
    fontFamily: 'roboto-regular',
    fontSize: 18,
    color: '#fff'
  },
  buttonAdd: {
    backgroundColor: '#008000',
    height: 40,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    padding: 10,
    borderRadius: 10
  },
  buttonAddText: {
    fontFamily: 'roboto-regular',
    fontSize: 18,
    color: '#fff'
  },
  notification: { 
    borderRadius: 600, 
    width: 6, 
    height: 6, 
    backgroundColor: '#fa3c22', 
    top: 5, 
    left: 1 
  },
});
