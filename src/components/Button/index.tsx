import {
    ActivityIndicator,
    Image,
    ImageSourcePropType,
    Pressable,
    PressableProps,
    StyleSheet,
    ViewStyle,
} from 'react-native';
import React, { useState } from 'react';
import { Colors, Sizes } from '../../config';
import { Text } from '../Text';
import { Block } from '../Layout';
export interface ButtonProps extends PressableProps {
    type?: 'Solid' | 'Outline' | 'Danger' | 'UnSelected' | 'DullSecondary';
    label?: string;
    loading?: boolean;
    icon?: ImageSourcePropType;
    iconRight?: ImageSourcePropType;
    style?: ViewStyle
}

export const Button = ({
    type = 'Solid',
    label,
    icon,
    iconRight,
    style,
    ...props
}: ButtonProps) => {
    const [loading, setLoading] = useState(false)
    const color = (type => {
        switch (type) {
            case 'Solid':
                return "onPrimary";
            case 'Outline':
                return "primary";
            case 'Danger':
                return "onError";
            default:
                return "onPrimary";
        }
    })(type)
    return (
        <Pressable
            disabled={props.loading || loading}
            style={[
                styles.container,
                styles[type],
                style
            ]}
            {...props}
            onPress={async (e) => {
                setLoading(true)
                await props.onPress?.(e)
                setLoading(false)
            }}
        >
            {icon && <Image style={styles.iconStyle} source={icon} />}
            <Block flex row align="center">
                {props.loading || loading ? (
                    <ActivityIndicator color={Colors[color]} />
                ) : (<Text
                    size="H4"
                    font="SemiBold"
                    color={color}>
                    {label}
                </Text>)}
            </Block>
            {iconRight && <Image style={styles.iconRightStyle} source={iconRight} />}
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        minHeight: Sizes.Button.height,
        maxHeight: Sizes.Button.height,
        margin: Sizes.Base / 2,
        alignItems: 'center',
        borderRadius: 13,
        borderWidth: 1,
        borderColor: Colors.primary,
    },
    Solid: { borderColor: Colors.primary, backgroundColor: Colors.primary },
    Outline: { borderColor: Colors.primary, backgroundColor: Colors.onPrimary },
    Danger: {
        borderColor: Colors.error,
        backgroundColor: Colors.error,
    },
    UnSelected: {
        borderColor: Colors.surfaceVariant,
        backgroundColor: Colors.surfaceVariant,
    },
    DullSecondary: {
        borderColor: Colors.secondaryContainer,
        backgroundColor: Colors.secondaryContainer,
    },
    IconCircle: { borderColor: Colors.primary, backgroundColor: Colors.primary },
    iconStyle: {
        position: 'absolute',
        left: 16,
        top: 20,
    }, iconRightStyle: {
        position: 'absolute',
        right: 16,
        top: 18,
    }
});
