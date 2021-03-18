import { Image } from 'react-native';
import React from 'react';

import Onboarding from 'react-native-onboarding-swiper';
import { useNavigation } from '@react-navigation/native';

const OnboardingSwiper = () => {
  const navigation = useNavigation();

  
  
  return (
    <Onboarding
      onDone={() => navigation.navigate('SignIn')}
      onSkip={() => navigation.navigate('SignIn')}
      nextLabel=""
      pages={[
        {
          backgroundColor: '#24aaff',
          titleStyles: {color: '#fff', fontFamily: 'roboto-bold', fontSize: 20},
          subTitleStyles: {color: '#fff', fontFamily: 'roboto-regular', fontSize: 15},
          image: <Image source={require('../../assets/resumo.png')} style={{ width: 200, height: 200, backgroundColor: '#24aaff',position: 'relative', bottom: 15 }} />,
          title: 'Torne-se um você melhor',
          subtitle: 'permite que você se concentre nas rotinas que terá hoje. combinando o rastreador de metas e o rastreador de hábitos',
        },
        {
          backgroundColor: '#24aaff',
          titleStyles: {color: '#fff', fontFamily: 'roboto-bold', fontSize: 20},
          subTitleStyles: {color: '#fff', fontFamily: 'roboto-regular', fontSize: 15},
          image: <Image source={require('../../assets/calendar.png')} style={{ width: 200, height: 200, backgroundColor: '#24aaff',position: 'relative', bottom: 15 }} />,
          title: 'Planeje todos os dias',
          subtitle: 'veja seus planos para meses, semanas, use o planejador diário e a programação. Encontre o momento mais adequado para tarefas futuras',
        },
        {
          backgroundColor: '#24aaff',
          titleStyles: {color: '#fff', fontFamily: 'roboto-bold', fontSize: 20},
          subTitleStyles: {color: '#fff', fontFamily: 'roboto-regular', fontSize: 15},
          image: <Image source={require('../../assets/grafic.png')} style={{ width: 300, height: 200, backgroundColor: '#24aaff',position: 'relative', bottom: 15 }} />,
          title: 'Alcance seus objetivos',
          subtitle: 'Acompanhe seu progresso em várias áreas. Melhore sua produtividade criando um sistema flexível de habilidades',
        },
      ]}
    />
  );
}

export default OnboardingSwiper;