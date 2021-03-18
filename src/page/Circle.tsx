import React, { useState } from 'react';

import { Searchbar } from 'react-native-paper';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconAntFontAwesome from 'react-native-vector-icons/FontAwesome';
import { BottomSheet } from 'react-native-btr';
import { TextInput } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

export default function Circle() {
  const [searchQuery, setSearchQuery] = useState('');
  const [text, setText] = useState('');
  const [typeCircleVisible, settypeCircleVisible] = useState(false);
  const [stage, setStage] = useState(2);

  const onChangeSearch = (query: React.SetStateAction<string>) => setSearchQuery(query);
  const navigation = useNavigation();

  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.btnHeader}>
            <IconAntFontAwesome size={25} color='#bdbdbe' name="bell" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnHeader} onPress={() => settypeCircleVisible(!typeCircleVisible)}>
            <IconAntDesign size={25} color='#000' name="plus" />
          </TouchableOpacity>
        </View>
        <View style={styles.body}>
          <Text style={styles.titleBody}>Círculos</Text>
          <Searchbar
            placeholder="Procurar"
            onChangeText={onChangeSearch}
            value={searchQuery}
            style={{ backgroundColor: '#e7e7e7', marginBottom: 30 }}
          />
          <TouchableOpacity style={styles.boxAddCircle} onPress={() => settypeCircleVisible(!typeCircleVisible)}>
            <View style={styles.circleAvatar}>
              <IconAntFontAwesome name="briefcase" size={30} color="#666666" style={{ left: 15 }} />
            </View>
            <Text style={styles.textAddCircle}> Adicione uma empresa</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.boxAddCircle} onPress={() => settypeCircleVisible(!typeCircleVisible)}>
            <View style={styles.circleAvatar}>
              <IconAntFontAwesome name="users" size={30} color="#666666" style={{ left: 14 }} />
            </View>
            <Text style={styles.textAddCircle}> Criar um Círculo</Text>
          </TouchableOpacity>
        </View>
      </View>
      <BottomSheet
        visible={typeCircleVisible}
        onBackButtonPress={() => settypeCircleVisible(!typeCircleVisible)}
        onBackdropPress={() => settypeCircleVisible(!typeCircleVisible)}
      >
        <View style={ styles.containerSheet}>
          <View style={styles.header}>
            <TouchableOpacity style={styles.btnHeaderSheet} onPress={() => settypeCircleVisible(!typeCircleVisible)}>
              <IconAntDesign size={25} color='#000' name="closecircleo" />
            </TouchableOpacity>
          </View>
            {
              stage === 0 && 
                <View style={styles.bodySheet}>
                  <Text style={styles.titleBodySheet}>Criar um Círculos</Text>
                  <TouchableOpacity style={styles.boxAddCircleSheet} onPress={() => setStage(1)}>
                    <View style={styles.circleAvatar} onPress={() => setStage(1)}>
                      <IconAntFontAwesome name="briefcase" size={30} color="#666666" style={{ left: 14 }} />
                    </View>
                    <View style={{ flexDirection: 'column' }}>
                      <Text style={styles.textAddCircle}> Sua empresa</Text>
                      <Text style={styles.descriptionAddCircle}> Específico para sua empresa</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.boxAddCircleSheet} onPress={() => setStage(1)}>
                    <View style={styles.circleAvatar}>
                      <IconAntFontAwesome name="users" size={30} color="#666666" style={{ left: 13 }} />
                    </View>
                    <View style={{ flexDirection: 'column' }}>
                      <Text style={styles.textAddCircle}> Público</Text>
                      <Text style={styles.descriptionAddCircle}> Qualquer pessoa pode participar</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.boxAddCircleSheet} onPress={() => setStage(1)}>
                    <View style={styles.circleAvatar}>
                      <IconAntFontAwesome name="lock" size={30} color="#666666" style={{ left: 20 }} />
                    </View>
                    <View style={{ flexDirection: 'column' }}>
                      <Text style={styles.textAddCircle}> Privado</Text>
                      <Text style={styles.descriptionAddCircle}> Escolha quem pode participar</Text>
                    </View>
                  </TouchableOpacity>
                </View>
            }
            {
              stage === 1 &&
                <View style={styles.bodySheetStageOne}>
                  <Text style={styles.titleBodySheet}>Você quer ativar o sistema de pontos?</Text>
                  <TouchableOpacity style={styles.buttonSucess} onPress={() => navigation.navigate('MyCircle')}>
                    <Text style={styles.buttonConcluirText}>
                      Sim
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.buttonDanger} onPress={() => navigation.navigate('MyCircle')}>
                    <Text style={styles.buttonDangerText}>
                      Não
                    </Text>
                  </TouchableOpacity>
                </View>
            }
            {
              stage === 2 &&
                <View style={styles.bodySheetStageOne}>
                  <Text style={styles.titleBodySheet}>Nomeie seu Círculos</Text>
                  <TextInput
                    style={styles.input}
                    mode="outlined"
                    label="Nome do Círculo"
                    value={text}
                    onChangeText={text => setText(text)}
                    theme={{colors: {primary: '#24aaff'}}}
                  />
                  <TouchableOpacity style={styles.buttonConcluir} onPress={() => navigation.navigate('MyCircle')}>
                    <Text style={styles.buttonConcluirText}>
                      Concluir
                    </Text>
                  </TouchableOpacity>
                </View>
            }
        </View>
      </BottomSheet>
    </>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fff',
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
    flex: 1,
  },
  btnHeader: {
    width: 50,
    height: 30
  },
  btnHeaderSheet: {
    width: 30,
    height: 30
  },
  body: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'flex-start',
    position: 'absolute',
    top: 60,
    padding: 20
  },
  bodySheet: {
    flex: 1,
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 60,
    padding: 20
  },
  bodySheetStageOne: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 60,
    padding: 20
  },
  titleBody: {
    fontFamily: 'roboto-medium',
    fontSize: 35,
    color: '#000',
    paddingBottom: 15
  },
  titleBodySheet: {
    fontFamily: 'roboto-medium',
    fontSize: 25,
    color: '#000',
    paddingBottom: 15
  },
  boxAddCircle: {
    flexDirection: 'row',
    width: '100%',
    height: 60,
    padding: 10,
    textAlign: 'center',
    marginBottom: 20
  },
  boxAddCircleSheet: {
    flexDirection: 'row',
    width: '100%',
    height: 60,
    marginTop: 10,
    marginBottom: 10,
    textAlign: 'center'
  },
  circleAvatar: {
    borderRadius: 900,
    width: 60,
    height: 60,
    backgroundColor: '#e7e7e7',
    justifyContent: 'center',
  },
  textAddCircle: {
    fontFamily: 'roboto-medium',
    fontSize: 17,
    color: '#000',
    top: 10,
    left: 15
  },
  descriptionAddCircle: {
    fontFamily: 'roboto-regular',
    fontSize: 13,
    color: '#666666',
    top: 13,
    left: 15
  },
  containerSheet:{
    backgroundColor: '#fff',
    width: '100%',
    height: 390,
    alignItems: 'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20
  },
  headerSheet: {
    width: '100%',
    height: 30,
    backgroundColor: 'transparent',
    position: 'absolute',
    top: 0,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 15,
    flex: 1,
  },
  containerNewCircleSheet:{
    backgroundColor: '#fff',
    width: '100%',
    height: 320,
    alignItems: 'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20
  },
  
  input: {
    backgroundColor: '#fff',
    paddingTop: 20
  },
  buttonSucess: {
    backgroundColor: '#24aaff',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 50,
  },
  buttonDanger: {
    backgroundColor: '#fff',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#24aaff',
    borderStyle: 'solid',
  },
  buttonConcluir: {
    backgroundColor: '#24aaff',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 80,
  },
  buttonConcluirText: {
    fontFamily: 'roboto-regular',
    fontSize: 20,
    color: '#fff'
  },
  buttonDangerText: {
    fontFamily: 'roboto-regular',
    fontSize: 20,
    color: '#24aaff'
  },
  
});
