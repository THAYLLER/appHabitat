import React, { useState } from 'react';
import Toggle from 'react-native-toggle-element';
import { StyleSheet, Text, View, TouchableOpacity , Dimensions, Linking } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

const SettingsPanel: React.FC = () => {
  const [toggleValue, setToggleValue] = useState(false);
  const navigation = useNavigation();
  
  return (
    <View style={styles.container}>
      <View style={styles.menu}>
        <TouchableOpacity style={styles.menuItem} onPress={() => {}}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: 130, alignItems: 'center' }}>
            <FontAwesome name="bell-slash" size={25} color='#928f8f' />
            <Text style={styles.menuItemText}>Não perturbe</Text>
          </View>
          <Toggle
            value={toggleValue}
            onToggle={() => setToggleValue(!toggleValue)}
            thumbActiveComponent={
              <FontAwesome name="bell" size={25} color='#fff'  style={{ paddingLeft: 8, paddingTop: 7 }}/>
            }
            thumbInActiveComponent={
              <FontAwesome name="bell-slash" size={25} color='#fff' style={{ paddingLeft: 5, paddingTop: 7 }} />
            }
            thumbButton={{
              inActiveBackgroundColor: '#898b8d',
              activeBackgroundColor: '#3c4145',
            }}
            trackBar={{
              activeBackgroundColor: '#898b8d',
              inActiveBackgroundColor: '#bdbdbd',
              borderActiveColor: '#898b8d',
              borderInActiveColor: '#bdbdbd',
              borderWidth: 5,
              width: 100,
            }}
          
          /> 
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: 80, alignItems: 'center' }}>
            <IconMaterialIcons name="calendar-view-day" size={30} color='#928f8f' />
            <Text style={styles.menuItemText}>Tema</Text>
          </View>
          <Toggle
              value={toggleValue}
              onToggle={() => setToggleValue(!toggleValue)}
              thumbActiveComponent={
                <IconFontAwesome name="sun-o" size={40} color='#3BD2B5' />
              }
              thumbInActiveComponent={
                <IconMaterialIcons name="nightlight-round" size={40} color='#03452C' />
              }
              thumbButton={{
                inActiveBackgroundColor: '#fff',
                activeBackgroundColor: '#fff',
                
              }}
              trackBar={{
                activeBackgroundColor: '#9ee3fb',
                inActiveBackgroundColor: '#3c4145',
                borderActiveColor: '#86c3d7',
                borderInActiveColor: '#1c1c1c',
                borderWidth: 5,
                width: 100,
              }}
            />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: 140, alignItems: 'center' }}>
            <IconFontAwesome5 name="signature" size={30} color='#928f8f' />
            <Text style={styles.menuItemText}>Minha Assinatura</Text>
            
          </View>
          <IconMaterialIcons name="keyboard-arrow-right" size={30} color='#928f8f' />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItemL}>
          <View style={styles.signatureCard}>
            <Text style={styles.signatureCardTitle}>Aderir á um dos nossos planos</Text>
            <TouchableOpacity style={styles.signatureCardButton}>
              <Text style={styles.signatureCardButtonText}>Veja nossos planos</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('HelpAndSupport')}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: 140, alignItems: 'center' }}>
            <IconFontAwesome name="support" size={30} color='#928f8f' />
            <Text style={styles.menuItemText}>Ajuda & Suporte</Text>
          </View>
          <IconMaterialIcons name="keyboard-arrow-right" size={30} color='#928f8f' />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={() => Linking.openURL('mailto: contato@contato.com.br')}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: 140, alignItems: 'center' }}>
            <IconAntDesign name="mail" size={30} color='#928f8f' />
            <Text style={styles.menuItemText}>Entre em contato</Text>
          </View>
          <IconMaterialIcons name="keyboard-arrow-right" size={30} color='#928f8f' />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('PrivacyPolicies')}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: 200, alignItems: 'center' }}>
            <IconAntDesign name="eye" size={30} color='#928f8f' />
            <Text style={styles.menuItemText}>Política de Privacidade</Text>
          </View>
          <IconMaterialIcons name="keyboard-arrow-right" size={30} color='#928f8f' />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('TermsAndConditions')}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: 200, alignItems: 'center' }}>
            <IconFontAwesome name="globe" size={30} color='#928f8f' />
            <Text style={styles.menuItemText}>Termos & Condições</Text>
          </View>
          <IconMaterialIcons name="keyboard-arrow-right" size={30} color='#928f8f' />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: 80, alignItems: 'center' }}>
            <IconFontAwesome5 name="sign-out-alt" size={30} color='#928f8f' />
            <Text style={styles.menuItemText}>Sair</Text>
          </View>
        </TouchableOpacity>
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
    height: 50,
    marginTop: 10
  },
  menuItemL: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    alignItems: 'center',
    width: '100%',
    height: 'auto',
    marginTop: 10
  },
  menuItemText: {
    fontFamily: 'roboto-medium',
    fontSize: 16,
    color: '#928f8f',
    paddingLeft: 10
  },
  signatureCard: {
    backgroundColor: '#000',
    width: '100%',
    height: 120,
    borderRadius: 10,
    paddingTop: 20,
    paddingBottom: 20,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  signatureCardTitle: {
    fontFamily: 'roboto-bold',
    fontSize: 18,
    color: '#fff',
    textAlign: 'center'
  },
  signatureCardButton: {
    width: 250,
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 5,
    justifyContent: 'center',
  },
  signatureCardButtonText: {
    fontFamily: 'roboto-regular',
    color: '#000',
    textAlign: 'center',
    fontSize: 16,
  },
});


export default SettingsPanel;