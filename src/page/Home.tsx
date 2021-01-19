import React, { Component } from 'react';

import IconAntDesign from 'react-native-vector-icons/AntDesign';

import { StyleSheet, View, Text, CheckBox } from 'react-native';

import CalendarStrip from 'react-native-calendar-strip';
import moment from 'moment';

export default class Home extends Component<{}> {
  constructor(props: {} | Readonly<{}>) {
    super(props);

    let startDate = moment(); // today

    // Create a week's worth of custom date styles and marked dates.
    let customDatesStyles = [];
    let markedDates = [];
    for (let i=0; i<7; i++) {
      let date = startDate.clone().add(i, 'days');

      customDatesStyles.push({
        startDate: date, // Single date since no endDate provided
        dateNameStyle: {color: 'blue'},
        dateNumberStyle: {color: 'purple'},
        highlightDateNameStyle: {color: 'pink'},
        highlightDateNumberStyle: {color: 'yellow'},
        // Random color...
        dateContainerStyle: { backgroundColor: `#${(`#00000${(Math.random() * (1 << 24) | 0).toString(16)}`).slice(-6)}` },
      });

      let dots = [];
      let lines = [];

      if (i % 2) {
        lines.push({
          color: 'cyan',
          selectedColor: 'orange',
        });
      }
      else {
        dots.push({
          color: 'red',
          selectedColor: 'yellow',
        });
      }
      markedDates.push({
        date,
        dots,
        lines
      });
    }

    this.state = {
      selectedDate: '',
      customDatesStyles,
      markedDates,
      startDate,
    };
  }

  datesBlacklistFunc = (date: { isoWeekday: () => number; }) => {
    return date.isoWeekday() === 6; // disable Saturdays
  }

  onDateSelected = (date: { format: (arg0: string) => any; }) => {
    this.setState({ formattedDate: date.format('YYYY-MM-DD')});
  }

  render() {
    return (
      <>
        <View>
          <CalendarStrip
            scrollable
            calendarAnimation={{type: 'sequence', duration: 30}}
            daySelectionAnimation={{type: 'background', duration: 300, highlightColor: '#fa3b22' }}
            style={{height:100, paddingTop: 10, paddingBottom: 0}}
            calendarHeaderStyle={{color: '#fa3c22'}}
            calendarColor={'#fff'}
            dateNumberStyle={{color: '#fa3c22'}}
            dateNameStyle={{color: '#fa3c22'}}
            highlightDateNumberStyle={{color: '#fff'}}
            highlightDateNameStyle={{color: '#fff'}}
            disabledDateNameStyle={{color: '#fa3c22'}}
            disabledDateNumberStyle={{color: '#fa3c22'}}
            iconContainer={{flex: 0.1}}
            // customDatesStyles={this.state.customDatesStyles}
            // markedDates={this.state.markedDates}
            datesBlacklist={this.datesBlacklistFunc}
            onDateSelected={this.onDateSelected}
            useIsoWeekday={false}
          />
        </View>
        <View style={styles.container}>
          <View style={styles.ListHabits}>
            <Text style={styles.titleListHabits}>Hábitos para hoje</Text>
            <View style={styles.cardListItemHabits}>
              <Text style={styles.cardListItemHabitsTitle}>Meditar pela manhã</Text>
              <View style={styles.boxDays}>
                <IconAntDesign name="check" size={20} color="#fff" />
                <IconAntDesign name="check" size={20} color="#fff" />
                <IconAntDesign name="check" size={20} color="#fff" />
                <IconAntDesign name="check" size={20} color="#fff" />
                <IconAntDesign name="close" size={20} color="#851a0c" />
                <IconAntDesign name="close" size={20} color="#851a0c" />
                <IconAntDesign name="close" size={20} color="#851a0c" />
              </View>
            </View>
            <View style={styles.footerListHabits}>
              <Text style={styles.descriptListHabits}>Tem apenas </Text>
              <Text style={styles.descriptListHabitsFocus}>1 hábito </Text>
              <Text style={styles.descriptListHabits}>para hoje!</Text>
            </View>  
          </View>
          <View style={styles.listTasks}>   
            <View style={styles.titleTasksBox}>
              <Text style={styles.titleTasks}>SUAS TAREFAS PARA HOJES</Text>
              <Text style={styles.titleTasksFocus}>2 de Novembro</Text>
            </View>
            <View style={styles.checkboxTasksContainer}>
                <CheckBox
                  value={false}
                  onValueChange={() => {}}
                />
                <Text style={styles.checkboxTasksText}>Do you like React Native?</Text>
            </View>
            <View style={styles.checkboxTasksContainer}>
                <CheckBox
                  value={false}
                  onValueChange={() => {}}
                />
                <Text style={styles.checkboxTasksText}>Do you like React Native?</Text>
            </View>
            <View style={styles.checkboxTasksContainer}>
                <CheckBox
                  value={false}
                  onValueChange={() => {}}
                />
                <Text style={styles.checkboxTasksText}>Do you like React Native?</Text>
            </View>
            <View style={styles.checkboxTasksContainer}>
                <CheckBox
                  value={false}
                  onValueChange={() => {}}
                />
                <Text style={styles.checkboxTasksText}>Do you like React Native?</Text>
            </View>
            <Text style={styles.titleTasks}>FEITOS</Text>
            <View style={styles.checkboxTasksTextFinishedBox}>
              <View style={styles.checkboxTasksContainer}>
                  <CheckBox
                    value={true}
                    disabled
                    onValueChange={() => {}}
                  />
                  <Text style={styles.checkboxTasksTextFinished}>Do you like React Native?</Text>
              </View>
              <Text style={styles.checkboxTasksTextFinished}>1 de Novembro</Text>
            </View>
          </View>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  ListHabits: {
    width: '100%',
    height: 200,
    padding: 20
  },
  titleListHabits: {
    fontFamily: 'roboto-medium',
    fontSize: 15,
    color: '#bdbdbe',
    textTransform: 'uppercase'
  },
  cardListItemHabits: {
    width: '100%',
    height: 90,
    backgroundColor: '#fa3c22',
    marginTop: 15,
    padding: 10,
    borderRadius: 10
  },
  cardListItemHabitsTitle: {
    fontFamily: 'roboto-regular',
    fontSize: 15,
    color: '#fff',
  },
  boxDays: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10
  },
  footerListHabits: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 20
  },
  descriptListHabits: {
    fontFamily: 'roboto-medium',
    fontSize: 15,
  },
  descriptListHabitsFocus: {
    fontFamily: 'roboto-medium',
    fontSize: 15,
    color: '#fa3c22',    
  },
  listTasks: {
    width: '100%',
    height: 'auto',
    padding: 20
  },
  titleTasksBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10
  },
  titleTasks: {
    fontFamily: 'roboto-regular',
    color: '#bdbdbe',
    fontSize: 15,
  },
  titleTasksFocus: {
    fontFamily: 'roboto-medium',
    color: '#fa3c22',   
    fontSize: 15,
  },
  checkboxTasksContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    color:'#fa3c22',
    marginBottom: 15
  },
  checkboxTasks: {
    borderColor:'#fa3c22',
    borderWidth: 1, 
    borderRadius: 10   
  },
  checkboxTasksText: {
    fontFamily: 'roboto-regular',
    fontSize: 15,
  },
  checkboxTasksTextFinished: {
    fontFamily: 'roboto-regular',
    fontSize: 15,
    color: '#bdbdbe',
  },
  checkboxTasksTextFinishedBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginBottom: 10
  }
});
