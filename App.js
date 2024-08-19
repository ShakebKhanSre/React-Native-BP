import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';

import 'react-native-gesture-handler';
import MyStack from './src/Navigation/StackNavigator';

const App = () => {
  return (
    <SafeAreaView>
      <MyStack />
    </SafeAreaView>
  );
};

export default App;
