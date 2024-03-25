import React from 'react';
import { SafeAreaView, ViewProps } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

interface ContentProps extends ViewProps {
    contentContainerStyle?: any;
    keyboardShouldPersistTaps?: 'always' | 'handle' | 'never';
    bounces?: boolean;
    padder?: boolean;
    style?: any;
}
export function Content(props: ContentProps) {
    const {
        contentContainerStyle,
        keyboardShouldPersistTaps,
        bounces,
        padder,
        style,
        ...rest
    } = props;

    const containerStyle = {
        flex: 1,
    };
    return (
        <SafeAreaView style={[containerStyle, style]}>
            <KeyboardAwareScrollView
                enableResetScrollToCoords={false}
                showsVerticalScrollIndicator={false}
                automaticallyAdjustContentInsets={false}
                resetScrollToCoords={{ x: 0, y: 0 }}
                keyboardShouldPersistTaps={'handled'}
                bounces={bounces}
                {...rest}
                contentContainerStyle={[
                    { padding: padder ? 16 : 0 },
                    contentContainerStyle,
                ]}>
                {props.children}
            </KeyboardAwareScrollView>
        </SafeAreaView>
    );
}
