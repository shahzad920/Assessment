
import React from 'react';
import { useAuth } from '@components';
import { NavigationContainer } from '@react-navigation/native';
import { MainStack } from './Main';
import { AuthStack } from './Auth';

export const RootNavigation = () => {
    const { isLoggedIn } = useAuth();
    return (
        <NavigationContainer>
            {isLoggedIn ? <MainStack /> : <AuthStack />}
        </NavigationContainer>
    );
};
