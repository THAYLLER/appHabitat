import React, { useState } from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesignIcons from 'react-native-vector-icons/AntDesign';
import { TouchableOpacity,View, StyleSheet, Text, CheckBox } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { BottomSheet } from 'react-native-btr';
import { TextInput } from 'react-native-paper';
import { Link } from '@react-navigation/native';


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
          activeTintColor: '#24aaff',
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
              label="Quantas vezes ao dia você quer realziar o hábito"
              value={text}
              onChangeText={text => setText(text)}
              underlineColor="transparent"
            />
            <View style={styles.containerPicker}>
              <RNPickerSelect
                placeholder={{
                  label: 'Construir ou abandonar este hábito',
                  value: null,
                  color: '#9EA0A4',
                }}
                items={[
                  {
                    label: 'Construir',
                    value: 1
                  },
                  {
                    label: 'Abandonar',
                    value: 0
                  }
                ]}
                onValueChange={value => {}}
                onUpArrow={() => {}}
                onDownArrow={() => {}}
                style={pickerSelectStyles}
                value={{}}
                ref={el => {}}
              />
            </View>
            <View style={styles.containerPicker}>
              <RNPickerSelect
                placeholder={{
                  label: 'Escolha um período de meta',
                  value: null,
                  color: '#9EA0A4',
                }}
                items={[
                  {
                    label: 'Diariamente',
                    value: 'Diariamente'
                  },
                  {
                    label: 'Semanalmente',
                    value: 'Semanalmente'
                  },
                  {
                    label: 'Por mês',
                    value: 'Por mês'
                  },
                  {
                    label: 'Anual',
                    value: 'Anual'
                  }
                ]}
                onValueChange={value => {}}
                onUpArrow={() => {}}
                onDownArrow={() => {}}
                style={pickerSelectStyles}
                value={{}}
                ref={el => {}}
              />
            </View>
            <TextInput
              style={styles.input}
              mode="outlined"
              label="Adicione uma anotação"
              multiline
              numberOfLines={3}
              value={text}
              onChangeText={text => setText(text)}
              underlineColor="transparent"
              theme={{colors: {primary: '#24aaff'}}}
            />
            <View style={styles.boxTitleSetDate}>
              <FontAwesome name="calendar" size={20} color="#bdbdbe"/>
              <Text style={styles.titleSetDate}> Acompanhar as metas em que dias</Text>
            </View>
            <View style={styles.box}>
              <TouchableOpacity style={{ 
                  height: 30,
                  width: 30,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 10,
                  backgroundColor: `#${day.length  > 0 ? '24aaff' : 'bdbdbe'}`
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
                  backgroundColor: `#${day.length  > 0 ? '24aaff' : 'bdbdbe'}`
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
                  backgroundColor: `#${day.length  > 0 ? '24aaff' : 'bdbdbe'}`
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
                  backgroundColor: `#${day.length  > 0 ? '24aaff' : 'bdbdbe'}`
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
                  backgroundColor: `#${day.length  > 0 ? '24aaff' : 'bdbdbe'}`
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
                  backgroundColor: `#${day.length  > 0 ? '24aaff' : 'bdbdbe'}`
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
                  backgroundColor: `#${day.length  > 0 ? '24aaff' : 'bdbdbe'}`
                  }}>
                <Text style={styles.buttonSetDayText}>
                  S
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.boxReminders}>
              <Text style={styles.titleReminders}>Lembretes</Text>
              <Link to="/" style={styles.linkReminders}> Nenhum</Link> 
            </View>
            <View style={styles.boxAddCancel}>
              <TouchableOpacity style={styles.buttonCancel} onPress={toggleBottomNavigationView}>
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
    height: 720,
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
  box: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignContent: 'center',
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
  boxAddCancel: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    position: 'absolute',
    bottom: 15,
    left: 15,
    padding: 10
  },
  buttonCancel: {
    backgroundColor: '#fff',
    height: 60,
    width: 150,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: '#24aaff',
    borderStyle: 'solid',
    borderRadius: 10    
  },
  buttonCancelText: {
    fontFamily: 'roboto-regular',
    fontSize: 22,
    color: '#24aaff'
  },
  buttonAdd: {
    backgroundColor: '#24aaff',
    height: 60,
    width: 150,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 10
  },
  buttonAddText: {
    fontFamily: 'roboto-regular',
    fontSize: 22,
    color: '#fff'
  },
  notification: { 
    borderRadius: 600, 
    width: 6, 
    height: 6, 
    backgroundColor: '#24aaff', 
    top: 5, 
    left: 1 
  },
  containerPicker: { 
    width: '100%', 
    height: 60, 
    borderWidth: 1, 
    borderColor: '#696666', 
    borderStyle: 'solid',
    marginTop: 20 ,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5
  },
  boxReminders: {
    width: '100%',
    paddingTop: 20,
    flex: 1,
    paddingBottom: 20
  },
  titleReminders: {
    fontFamily: 'roboto-regular',
    fontSize: 15,
  },
  linkReminders: {
    fontFamily: 'roboto-regular',
    fontSize: 15,
    color: '#24aaff',
  }
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    color: '#000',
    fontFamily: 'roboto-regular',
    height: 50
  },
  inputAndroid: {
    fontSize: 16,
    color: '#000',
    fontFamily: 'roboto-regular',
    height: 50
  },
});
