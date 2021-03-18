import React from 'react';
import { StyleSheet, Text, View , Dimensions } from 'react-native';

const HelpAndSupport: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perguntas Frequentes</Text>
      <View style={styles.box}>
        <View style={styles.line}>
          <Text style={styles.lineText}>It is a long established fac</Text>
        </View>
        <View style={styles.line}>
          <Text style={styles.lineText}>It is a long established fac</Text>
        </View>
        <View style={styles.line}>
          <Text style={styles.lineText}>It is a long established fac</Text>
        </View>
        <View style={styles.line}>
          <Text style={styles.lineText}>It is a long established fac</Text>
        </View>
        <View style={styles.line}>
          <Text style={styles.lineText}>It is a long established fac</Text>
        </View>
        <View style={styles.line}>
          <Text style={styles.lineText}>It is a long established fac</Text>
        </View>
        <View style={styles.line}>
          <Text style={styles.lineText}>It is a long established fac</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    height: Dimensions.get("window").height,
    paddingTop: 20
  },
  title: {
    fontFamily: 'roboto-bold',
    fontSize: 26,
    textAlign: 'center'
  },
  box: {
    marginTop: 30,
    width: '100%',
    borderTopColor: 'rgb(236, 236, 236)',
    borderTopWidth: 1,
  },
  line: {
    width: '100%',
    height: 60,
    borderBottomColor: 'rgb(236, 236, 236)',
    borderBottomWidth: 1,
    paddingLeft: 20,
    justifyContent: 'center'
  },
  lineText: {
    fontFamily: 'roboto-regular',
    fontSize: 16,
  },
});

export default HelpAndSupport;