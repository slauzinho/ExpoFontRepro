/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {useFonts} from 'expo-font';
import Constants from 'expo-constants';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [fontsLoaded, error] = useFonts({
    BasicSansLight: require('./assets/fonts/basic-sans-light.ttf'),
    BasicSansRegular: require('./assets/fonts/basic-sans-regular.ttf'),
    BasicSansSemiBold: require('./assets/fonts/basic-sans-semibold.ttf'),
    FortescueMedian: require('./assets/fonts/FortescueMedian.ttf'),
    FortescueMedianItalic: require('./assets/fonts/FortescueMedian-Italic.ttf'),
    FrauncesLight: require('./assets/fonts/FrauncesLight.ttf'),
    FrauncesLightItalic: require('./assets/fonts/FrauncesLightItalic.ttf'),
  });

  console.log('===============>', fontsLoaded, error);

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Text style={styles.title}>Testing title</Text>
        <Text style={styles.section}>This is a body text</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontFamily: 'FrauncesLight',
    fontSize: 24,
    fontWeight: 'bold',
  },
  section: {
    fontFamily: 'BasicSansRegular',
    fontSize: 18,
    fontWeight: 'normal',
  },
});

export default App;
