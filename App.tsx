/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  useColorScheme,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {useFonts} from 'expo-font';
import Constants from 'expo-constants';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [fontsLoaded] = useFonts({
    BasicSansLight: require('./assets/fonts/basic-sans-light.ttf'),
    BasicSansRegular: require('./assets/fonts/basic-sans-regular.ttf'),
    BasicSansSemiBold: require('./assets/fonts/basic-sans-semibold.ttf'),
    FortescueMedian: require('./assets/fonts/FortescueMedian.ttf'),
    FortescueMedianItalic: require('./assets/fonts/FortescueMedian-Italic.ttf'),
    FrauncesLight: require('./assets/fonts/FrauncesLight.ttf'),
    FrauncesLightItalic: require('./assets/fonts/FrauncesLightItalic.ttf'),
  });

  const [isOpen, setIsOpen] = useState(false);

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
        <Text style={styles.para}>random text </Text>
        <Text style={styles.section}>This is a body text</Text>
        <Button title="Toggle" onPress={() => setIsOpen(!isOpen)} />

        {isOpen && (
          <View>
            <Text style={styles.title}>Testing title</Text>
            <Text style={styles.para}>random text </Text>
            <Text style={styles.section}>This is a body text</Text>
          </View>
        )}
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
  para: {
    fontFamily: 'FortescueMedian',
    fontSize: 16,
    fontWeight: 'normal',
  },
});

export default App;
