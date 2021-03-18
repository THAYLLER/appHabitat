import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView, Dimensions } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Notifications: React.FC = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
      <View style={styles.boxNotifications}>
        <Text style={styles.titleNotifications}>
          Suas Notificações
        </Text>
        <View style={styles.cardNotifications}>
          <FontAwesome name="user-circle-o" color="#bdbdbe" size={40} />
          <View style={styles.cardItemNotifications}>
            <Text style={styles.titleCardItemNotifications}>Thayller vilela cintra</Text>
            <Text style={styles.descriptionCardItemNotifications}>
              It is a long established fact that a reader will be distracted by 
              the readable content of a page when looking at its layout. The 
              point of using Lorem Ipsum is that it has a more-or-less normal 
              distribution
            </Text>
          </View>
        </View>
        <View style={styles.cardNotifications}>
          <FontAwesome name="user-circle-o" color="#bdbdbe" size={40} />
          <View style={styles.cardItemNotifications}>
            <Text style={styles.titleCardItemNotifications}>Thayller vilela cintra</Text>
            <Text style={styles.descriptionCardItemNotifications}>
              It is a long established fact that a reader will be distracted by 
              the readable content of a page when looking at its layout. The 
              point of using Lorem Ipsum is that it has a more-or-less normal 
              distribution
            </Text>
          </View>
        </View>
        <View style={styles.cardNotifications}>
          <FontAwesome name="user-circle-o" color="#bdbdbe" size={40} />
          <View style={styles.cardItemNotifications}>
            <Text style={styles.titleCardItemNotifications}>Thayller vilela cintra</Text>
            <Text style={styles.descriptionCardItemNotifications}>
              It is a long established fact that a reader will be distracted by 
              the readable content of a page when looking at its layout. The 
              point of using Lorem Ipsum is that it has a more-or-less normal 
              distribution
            </Text>
          </View>
        </View>
      </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'space-between',
    height: Dimensions.get("window").height,
  },
  boxNotifications: {
    flexDirection: 'column',
    marginTop: 20,
    paddingLeft: 10,
    paddingRight: 10
  },
  titleNotifications: {
    fontFamily: 'roboto-bold',
    fontSize: 22,
    color: '#000',
    textAlign:'center',
    paddingBottom: 10
  },
  cardNotifications: {
    flexDirection: 'row',
    marginTop:10
  },
  cardItemNotifications: {
    marginLeft: 15,
    flexDirection: 'column',
    width: 300
  },
  titleCardItemNotifications: {
    fontFamily: 'roboto-bold',
  },
  descriptionCardItemNotifications: {
    fontFamily: 'roboto-regular',
  },
});


export default Notifications;