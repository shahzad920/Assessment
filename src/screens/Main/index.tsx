import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Tabs, WebView} from './_FileGroup';

export type MainStackType = {
  Tabs: undefined;
  WebView: {
    uri: string;
    title: string;
  };
};

const Stack = createStackNavigator<MainStackType>();

export const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Group screenOptions={{headerShown: false}}>
        <Stack.Screen component={Tabs} name={'Tabs'} />
      </Stack.Group>
      <Stack.Screen component={WebView} name={'WebView'} />
    </Stack.Navigator>
  );
};
