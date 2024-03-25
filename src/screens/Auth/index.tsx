import React from 'react';
import { createStackNavigator, StackScreenProps } from '@react-navigation/stack';
import { SignIn, Forgot, SignUp, _Blank } from './_FileGroup';
import { Colors } from '../../config/colors';
import { Block, Image, Text } from '@components';
import { Icons } from '../../config/icons';
import { Images } from '../../config/images';

type AuthStackType = {
    _Blank: undefined;
    SignIn: undefined;
    SignUp: undefined;
    Forgot: undefined;
};

const Stack = createStackNavigator<AuthStackType>();

export const AuthStack = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerStyle: {
                height: 140,
                backgroundColor: Colors.primary
            },
            headerShadowVisible: false,
            headerLeft: () => <Image source={Icons['icBack']} margin={{ Left: 12 }} />,
            headerRight: () => <Image source={Images['icProfile']} margin={{ Right: 12 }} />

        }}>
            <Stack.Screen component={_Blank} name="_Blank"
                options={{
                    headerTitle: () => <Block align='center'>
                        <Text color={'onPrimary'} size={'H5'}>Media management</Text>
                        <Text color={'onPrimary'} size={'H6'}>Draft campaign</Text>

                    </Block>
                }} />
            {/* <Stack.Screen component={SignIn} name="SignIn" />
            <Stack.Screen component={SignUp} name="SignUp" />
            <Stack.Screen component={Forgot} name="Forgot" /> */}
        </Stack.Navigator>
    );
};

export type AuthProps<ScreenName extends keyof AuthStackType> =
    StackScreenProps<AuthStackType, ScreenName>;
