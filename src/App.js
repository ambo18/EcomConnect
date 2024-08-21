import React from 'react';
import { Platform, Text, View } from 'react-native';

const App = () => (
  <View>
    <Text>Hello, {Platform.OS === 'web' ? 'Web' : 'Mobile'}!</Text>
  </View>
);

export default App;
