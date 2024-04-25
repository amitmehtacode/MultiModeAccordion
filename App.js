import {SafeAreaView, StyleSheet, Text} from 'react-native';
import React from 'react';
import {DATA} from './src/data';
import {MultiAccordion} from 'react-native-multi-mode-accordion';
// import MultiModeAccordion from './src/components/MultiModeAccordion';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* <MultiAccordion data={DATA} soloAccordion /> */}
      <MultiAccordion data={DATA} persistentAccordion withAnimation />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
