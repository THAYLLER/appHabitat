import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView, Dimensions, TextInput } from 'react-native';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';

const Message: React.FC = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.body} showsVerticalScrollIndicator={false}>
        <View style={styles.containerMessage}>
          <IconFontAwesome size={50} color='#000' name="user-circle-o" />
          <View style={styles.boxMessage}>
            <Text style={styles.nameUser}>Thayller vilela cintra</Text>
            <Text style={styles.message}>
              It is a long established fact that a reader will be distracted by 
              the readable content of a page when looking at its layout. 
              The point of using Lorem Ipsum is that it has a more-or-less 
              normal distribution of letters, as opposed to using 'Content here, 
              content here', making it look like readable English. Many desktop 
              publishing packages and web page editors now use Lorem Ipsum as 
              their default model text, and a search for 'lorem ipsum' will 
              uncover many web sites still in their infancy.
            </Text>
          </View>
        </View>
        <View style={styles.containerMessage}>
          <IconFontAwesome size={50} color='#000' name="user-circle-o" />
          <View style={styles.boxMessage}>
            <Text style={styles.nameUser}>Thayller vilela cintra</Text>
            <Text style={styles.message}>
              It is a long established fact that a reader will be distracted by 
              the readable content of a page when looking at its layout. 
              The point of using Lorem Ipsum is that it has a more-or-less 
              normal distribution of letters, as opposed to using 'Content here, 
              content here', making it look like readable English. Many desktop 
              publishing packages and web page editors now use Lorem Ipsum as 
              their default model text, and a search for 'lorem ipsum' will 
              uncover many web sites still in their infancy.
            </Text>
          </View>
        </View>
        <View style={styles.containerMessage}>
          <IconFontAwesome size={50} color='#000' name="user-circle-o" />
          <View style={styles.boxMessage}>
            <Text style={styles.nameUser}>Thayller vilela cintra</Text>
            <Text style={styles.message}>
              It is a long established fact that a reader will be distracted by 
              the readable content of a page when looking at its layout. 
              The point of using Lorem Ipsum is that it has a more-or-less 
              normal distribution of letters, as opposed to using 'Content here, 
              content here', making it look like readable English. Many desktop 
              publishing packages and web page editors now use Lorem Ipsum as 
              their default model text, and a search for 'lorem ipsum' will 
              uncover many web sites still in their infancy.
            </Text>
          </View>
        </View>
        <View style={styles.containerMessage}>
          <IconFontAwesome size={50} color='#000' name="user-circle-o" />
          <View style={styles.boxMessage}>
            <Text style={styles.nameUser}>Thayller vilela cintra</Text>
            <Text style={styles.message}>
              It is a long established fact that a reader will be distracted by 
              the readable content of a page when looking at its layout. 
              The point of using Lorem Ipsum is that it has a more-or-less 
              normal distribution of letters, as opposed to using 'Content here, 
              content here', making it look like readable English. Many desktop 
              publishing packages and web page editors now use Lorem Ipsum as 
              their default model text, and a search for 'lorem ipsum' will 
              uncover many web sites still in their infancy.
            </Text>
          </View>
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <View style={styles.containerInput}>
          <TextInput placeholderTextColor="#68686b" placeholder="Messagem" style={styles.input} />
          <IconIonicons name="send" size={19} color="#68686b" style={styles.icon}  />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: Dimensions.get("window").height,
    backgroundColor: '#fff'
  },
  footer: {
    width: '100%',
    height: '20%',
    position: 'relative',
    bottom: 0
  },
  body: {
    width: '100%',
    height: '80%',
    padding: 10,
  },
  containerInput: {
    width: '100%',
    height: 'auto',
    padding: 1
  },
  input: {
    width: '100%',
    height: 42,
    borderWidth: 1,
    borderColor: '#d4d4d4',
    backgroundColor: '#d4d4d4',
    borderRadius: 80,
    paddingLeft: 20,
    alignItems: 'center'
  },
  icon: {
    position: 'absolute',
    bottom: 13,
    left: 330
  },
  containerMessage: {
    width: '100%',
    height: 'auto',
    flexDirection: 'row',
    paddingTop: 15
  },
  boxMessage: {
    width: 300,
    paddingLeft: 15,
    paddingBottom: 15,
    height: 'auto',
    flexDirection: 'column'
  },
  nameUser: {
    fontFamily: 'roboto-bold',
    fontSize: 16,
  },
  message: {
    fontFamily: 'roboto-regular',
    fontSize: 14,
  }
});

export default Message;