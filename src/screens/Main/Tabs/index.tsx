import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Blank } from '../../_Blank';
import { StackScreenProps } from '@react-navigation/stack';
import { MainStackType } from '..';
import { WebView } from '../Webview';

export type RootStackParamList = {
    Home: undefined;
    Hopper: undefined;
};

const Tab = createBottomTabNavigator<RootStackParamList>();
export const Tabs = (props: StackScreenProps<MainStackType, 'Tabs'>) => {
    return (
        <Tab.Navigator>
            <Tab.Screen component={Blank} name={'Home'} />
            <Tab.Screen component={Blank} name={'Hopper'} />
        </Tab.Navigator>
    );
};
