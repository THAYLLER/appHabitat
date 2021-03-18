import React, { useState, useEffect } from 'react';

import { LocaleConfig, Calendar, CalendarList, Agenda } from 'react-native-calendars';

import IconAntDesign from 'react-native-vector-icons/AntDesign';


import { StyleSheet, View, Text, CheckBox, ScrollView, Dimensions } from 'react-native';

const Habit: React.FC = () => {
  LocaleConfig.locales['pt-br'] = {
    monthNames: ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],
    monthNamesShort: ['Jan.','Fev.','Mar.','Abril','Maio','Jun.','Jul.','Ago.','Set.','Out.','Nov.','Dez.'],
    dayNames: ['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sabado'],
    dayNamesShort: ['Dom.','Seg.','Ter.','Quar.','Quin.','Sex.','Sab.']
  };

  LocaleConfig.defaultLocale = 'pt-br';
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={{ width: '100%', height: 212, backgroundColor:'#24aaff' }}></View>
      <View style={{ width: '100%', height: 50, backgroundColor:'#acacac' }}></View>
      <Calendar 
        current='2012-05-01'
        onDayPress={(day) => console.log('selected day', day)}
        onMonthChange={(month) => console.log('month changed', month)}
        markingType='period'
        theme={{
          textSectionTitleColor: '#000',
          dayTextColor: '#000',
          todayTextColor: '#000',
          selectedDayTextColor: '#24aaff',
          monthTextColor: '#000',
          indicatorColor: '#000',
          selectedDayBackgroundColor: '#24aaff',
          arrowColor: '#24aaff',
          'stylesheet.calendar.header': {
            week: {
              marginTop: 30,
              marginHorizontal: 12,
              flexDirection: 'row',
              justifyContent: 'space-between'
            }
          }
        }}
        // markedDates={{
        //   '2012-05-17': {disabled: true},
        //   '2012-05-08': {textColor: 'pink'},
        //   '2012-05-09': {textColor: 'pink'},
        //   '2012-05-14': {startingDay: true, color: 'green', endingDay: true},
        //   '2012-05-21': {startingDay: true, color: 'green'},
        //   '2012-05-22': {endingDay: true, color: 'gray'},
        //   '2012-05-24': {startingDay: true, color: 'gray'},
        //   '2012-05-25': {color: 'gray'},
        //   '2012-05-26': {endingDay: true, color: 'gray'}
        // }}
      />
      <View style={{ width: '100%', height: 50, backgroundColor:'#acacac' }}></View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    height: Dimensions.get("window").height,
  },
});

export default Habit;

{/*
import React, { useState, useEffect } from 'react';

import IconAntDesign from 'react-native-vector-icons/AntDesign';

import { StyleSheet, View, Text, CheckBox, ScrollView, Dimensions } from 'react-native';

import CalendarStrip from 'react-native-calendar-strip';
import 'moment';
import 'moment/locale/pt-br';
import moment from 'moment-timezone';

const Habit: React.FC = () => {
  const [selectedDate,] = useState(moment());
  const [markedDates, setMarkedDates] = useState();
  const [startDate,] = useState(moment());
  const [, setDateSelected] = useState({});
  const locale = {
    name: 'pt-br',
    config: {
      months : 'janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro'.split('_'),
      monthsShort : 'jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez'.split('_'),
      weekdays : 'domingo_segunda-feira_terça-feira_quarta-feira_quinta-feira_sexta-feira_sábado'.split('_'),
      weekdaysShort : 'dom_seg_ter_qua_qui_sex_sáb'.split('_'),
      weekdaysMin : 'dom_2ª_3ª_4ª_5ª_6ª_sáb'.split('_'),
      longDateFormat : {
          LT : 'HH:mm',
          L : 'DD/MM/YYYY',
          LL : 'D [de] MMMM [de] YYYY',
          LLL : 'D [de] MMMM [de] YYYY [às] LT',
          LLLL : 'dddd, D [de] MMMM [de] YYYY [às] LT'
      },
      calendar : {
          sameDay: '[Hoje às] LT',
          nextDay: '[Amanhã às] LT',
          nextWeek: 'dddd [às] LT',
          lastDay: '[Ontem às] LT',
          lastWeek: 'dddd [dernier à] LT',
          sameElse: 'L'
      },
      relativeTime : {
          future : 'em %s',
          past : '%s atrás',
          s : 'segundos',
          m : 'um minuto',
          mm : '%d minutos',
          h : 'uma hora',
          hh : '%d horas',
          d : 'um dia',
          dd : '%d dias',
          M : 'um mês',
          MM : '%d meses',
          y : 'um ano',
          yy : '%d anos'
      },
      ordinal : '%dº'
    }
  }
  useEffect(() => {
    for (let i=0; i<7; i++) {
      let date = startDate.clone().add(i, 'days');

      let dots = [];
      let lines = [];

      if (i % 2) {
        lines.push({
          color: '#24aaff',
          selectedColor: '#fff',
        });
      }
      else {
        dots.push({
          color: '#24aaff',
          selectedColor: '#fff',
        });
      }

      let m: any = [];

      m.push({
        date,
        dots,
        lines
      });

      setMarkedDates(m);
    }

  }, []);

  const onDateSelected = (date: { format: (arg0: string) => any; }) => {
    setDateSelected({ formattedDate: date.format('YYYY-MM-DD')});
  }

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View>
        <CalendarStrip
          scrollable
          calendarAnimation={{type: 'sequence', duration: 30}}
          daySelectionAnimation={{type: 'background', duration: 300, highlightColor: '#24aaff' }}
          style={{height:100, paddingTop: 10, paddingBottom: 0}}
          calendarHeaderStyle={{color: '#24aaff'}}
          calendarColor={'#fff'}
          dateNumberStyle={{color: '#24aaff'}}
          dateNameStyle={{color: '#24aaff'}}
          highlightDateNumberStyle={{color: '#fff'}}
          highlightDateNameStyle={{color: '#fff'}}
          disabledDateNameStyle={{color: '#24aaff'}}
          disabledDateNumberStyle={{color: '#24aaff'}}
          iconContainer={{flex: 0.1}}
          selectedDate={selectedDate}
          markedDates={markedDates}
          onDateSelected={onDateSelected}
          useIsoWeekday={false}
          locale={locale}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    height: Dimensions.get("window").height,
  },
});

export default Habit;

*/}