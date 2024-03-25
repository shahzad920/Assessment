import React from 'react';
import { TouchableOpacity, View, StyleSheet, } from 'react-native';
import { Text } from '@components';

export function BorderButton(props: any) {

    const styles = makeStyles(props);
    const { btnStyle, textStyle, onPress, title, isDisable } = props;
    return (
        <TouchableOpacity
            style={styles.touchable}
            onPress={onPress}
            disabled={isDisable ? true : false}>
            <View style={[styles.view, btnStyle]}>

                <Text style={[styles.text, textStyle]}>
                    {title}
                </Text>
            </View>
        </TouchableOpacity>
    );
}


const makeStyles = (props: any) => {
    return StyleSheet.create({
        view: {
            borderColor: props.borderColor
                ? props.borderColor
                : 'white',
            borderWidth: 1,
            backgroundColor: props.backgroundColor
                ? props.backgroundColor
                : 'white',
            paddingHorizontal: 32,

            height: 50,
            borderRadius: 30,

            justifyContent: 'center',
        },
        touchable: {
            marginHorizontal: 4,
            marginVertical: 8,
        },
        image: {
            marginRight: 8,
        },
        text: {
            fontSize: 14,
            textAlign: 'center',
            color: props.textColor ? props.textColor : 'white',
        },
    });
}

