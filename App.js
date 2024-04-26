import {SafeAreaView, StyleSheet, View} from 'react-native';
import React from 'react';
import {DATA} from './src/data';
import MultiModeAccordion from './src/components/MultiModeAccordion';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <MultiModeAccordion data={DATA} />
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    marginTop: 60,
  },
});
