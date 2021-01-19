import React, { useState } from 'react';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

import Routes from './src/routes/routes';

const fetchFonts = () => {
  return Font.loadAsync({
    'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf'),
    'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'roboto-medium': require('./assets/fonts/Roboto-Medium.ttf'),
    'roboto-light': require('./assets/fonts/Roboto-Light.ttf'),
  });
};

export default function App() {
  const [dataLoading, setDataLoading] = useState(false);

  if(!dataLoading) {
    return(
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoading(true)}
        onError={console.warn}
      />
    );
  }
  return <Routes />;
  
}
