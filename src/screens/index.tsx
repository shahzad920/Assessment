
import React from 'react';
import { useAuth } from '@components';
import { NavigationContainer } from '@react-navigation/native';
import { MainStack } from './Main';
import { AuthStack } from './Auth';
// import { _Blank } from './_Blank';

export const RootNavigation = () => {
    const { isLoggedIn } = useAuth();
    // return <_Blank />
    return (
        <NavigationContainer>
            {isLoggedIn ? <MainStack /> : <AuthStack />}
        </NavigationContainer>
    );
};
