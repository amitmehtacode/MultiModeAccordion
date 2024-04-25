import {SafeAreaView, StyleSheet, Text} from 'react-native';
import React from 'react';
import {MultiAccordion} from 'react-native-multi-mode-accordion';
import {DATA} from './src/data';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <MultiAccordion data={DATA} />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000'
  },
});
