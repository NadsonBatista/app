import React from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './src/components/header';
import Content from './src/components/content';
import Menu from './src/components/Menu';

export default function App() {
  return (
    <View style={styles.container}>
      <Header/>
      <Content/>
      <Menu/>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
