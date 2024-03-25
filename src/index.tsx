import React, { useEffect } from 'react';
import { Alert, AuthProvider } from './components';
import { RootNavigation } from './screens';
import SplashScreen from 'react-native-splash-screen';

export default function App() {
    useEffect(() => {
        SplashScreen.hide()
    }, [])
    return (
        <AuthProvider PersistVersion={0}>
            <RootNavigation />
            <Alert />
        </AuthProvider>
    );
}
