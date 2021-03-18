import React, { useState } from 'react';

import { TextInput } from 'react-native-paper';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconAntFontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

export default function SignIn() {
  const [text, setText] = useState('');
  const navigation = useNavigation();

  function handleNavigateRegister() { 
    navigation.navigate('SignUp');
  }
  function handleNavigateForgotPassword() {
    navigation.navigate('ForgotPassword');
  }
  function handleNavigateWelcomeScrean() {
    navigation.navigate('WelcomeScrean');
  }
  return (
    <View style={styles.containerComponent}>
      <View style={styles.container}>
        <View style={styles.boxTitle}>
          <Text style={styles.title}>Login</Text>
        </View>
        <TextInput
          style={styles.input}
          mode="outlined"
          label="Email"
          value={text}
          onChangeText={text => setText(text)}
          underlineColor="transparent"
          theme={{colors: {primary: '#24aaff'}}}
        />
        <TextInput
          style={styles.input}
          mode="outlined"
          label="Senha"
          value={text}
          secureTextEntry={true}
          onChangeText={text => setText(text)}
          theme={{colors: {primary: '#24aaff'}}}
          right={<TextInput.Icon name="eye" color='#9b9ea0' onPress={() => {}} />}  
        />
        <TouchableOpacity onPress={handleNavigateForgotPassword}>
          <Text style={styles.forgotPasswordText}>Esqueceu a sua senha?</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.buttonLogin} onPress={handleNavigateWelcomeScrean}>
          <Text style={styles.buttonLoginText}>
            Login
          </Text>
        </TouchableOpacity>
        <View style={styles.boxNewAccount}>
          <Text style={styles.textNewAccount}>Você ainda não tem uma conta?</Text>
          <TouchableOpacity style={styles.linkNewAccount} onPress={handleNavigateRegister}> 
            <Text style={styles.linkNewAccountText}>
              Registre-se
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.boxSignInSocialMedia}>
          <Text style={styles.signInSocialMediaText}>
            Ou conecte-se com
          </Text>
          <View style={styles.boxButtons}>
            <TouchableOpacity style={styles.buttonSocialMediaGoogle}>
                <IconAntDesign name="google" size={20} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonSocialMediaFacebook}>
                <IconAntFontAwesome name="facebook" size={20} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>
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
    paddingTop: 20,
    paddingBottom: 20,
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
  forgotPasswordText: {
    paddingTop: 5,
    color: '#abacad',
    fontFamily: 'roboto-medium'
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
  boxNewAccount: {
    marginTop: 30,
    flexDirection: 'row'
  },
  textNewAccount: {
    fontFamily: 'roboto-regular',
    fontSize: 15,
  },
  linkNewAccount: {
    paddingStart: 10
  },
  linkNewAccountText: {
    fontFamily: 'roboto-medium',
    fontSize: 15,
    color: '#24aaff',
  },
  boxSignInSocialMedia: {
    borderTopColor: '#abacad',
    borderTopWidth: 1,
    bottom: 0,
    marginTop: 90,
    alignItems: 'center'
  },
  signInSocialMediaText: {
    fontFamily: 'roboto-regular',
    fontSize: 15,
    marginTop: 10
  },
  boxButtons: {
    marginTop: 15,
    flexDirection: 'row',
    paddingTop: 10
  },
  buttonSocialMediaGoogle: {
    backgroundColor: '#ea534e',
    height: 50,
    width: 120,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginEnd: 20
  },
  buttonSocialMediaFacebook: {
    backgroundColor: '#3c5a99',
    height: 50,
    width: 120,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
});
