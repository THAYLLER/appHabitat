import React from 'react';
import { StyleSheet, View, TextInput, TextInputProps, Text } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'

interface InputProps extends TextInputProps {
  name: string;
  label: string;
  icon?: any,
  type?: string,
  iconName?: any,
}

const Input: React.FC<InputProps> = ({ type="text", iconName,icon="", label, name, ...rest }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput placeholderTextColor="#C0C1C1" {...rest} style={styles.input} />
      {
        icon != "" &&
          <Icon name={iconName} size={19} color="#8E8E8F" style={ styles.icon}  />
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 'auto'
  },
  label: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 16,
    lineHeight: 19,
    color: '#8E8E8F'
  },
  input: {
    width: '100%',
    height: 42,
    borderWidth: 1,
    borderColor: '#8E8E8F',
    borderRadius: 8,
    paddingLeft: 20,
    marginTop: 5,
    marginBottom: 16
  },
  icon: {
    position: 'absolute',
    bottom: 27,
    left: 240
  }
});

export default Input;