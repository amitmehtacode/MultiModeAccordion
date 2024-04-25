import {SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import {DATA} from './src/data';
import MultiModeAccordion from './src/components/MultiModeAccordion';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <MultiModeAccordion data={DATA} persistentAccordion withAnimation />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
