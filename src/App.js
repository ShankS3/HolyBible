import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './containers/HomeContainer';
import Testament from './containers/TestamentContainer';
import Book from './containers/BookContainer';
import Chapter from './containers/ChapterContainer';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Testament" component={Testament} />
        <Stack.Screen name="Book" component={Book} />
        <Stack.Screen name="Chapter" component={Chapter} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
