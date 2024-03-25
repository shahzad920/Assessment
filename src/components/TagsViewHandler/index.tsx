import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { BorderButton } from '@components';
import _ from 'lodash';

export function TagsView(props: any) {
    const {
        all,
        bgColorOnActive,
        txtColorOnInActive,
        btnStyle,
        isDisable,
        bgColorOnInActive = 'transparent',
        style
    } = props

    const [selected, setSelected] = useState(props.selected);

    const makeButtons = () => {
        return all.map((tag: any, i: number) => {
            let filteredData = selected.find((ele: any) => ele._id === tag._id);
            const on = filteredData ? true : false;

            const backgroundColor = on ? bgColorOnActive : bgColorOnInActive;
            const textColor = on
                ? txtColorOnInActive
                    ? txtColorOnInActive
                    : 'white'
                : 'white'
            const borderColor = on ? bgColorOnActive : 'white';

            return (
                <BorderButton
                    backgroundColor={backgroundColor}
                    textColor={textColor}
                    borderColor={borderColor}
                    onPress={() => {
                        onPress(tag);
                    }}
                    key={i}
                    btnStyle={btnStyle}
                    showImage={on}
                    title={tag.title}

                    isDisable={isDisable}
                />
            );
        });
    }
    const onPress = (tag: any) => {
        let selected = [];
        const { isExclusive, type } = props;
        if (isExclusive) {
            selected = [tag];
        } else {
            selected = addOrRemove(selected, tag);
        }
        setSelected(selected)


        const { onItemSelect } = props;
        onItemSelect(selected, type);
    };
    const addOrRemove = (array: any, item: any) => {
        let temp_arr = _.cloneDeep(array);

        const filteredData = temp_arr.find((ele: any) => ele._id === item._id);
        const on = filteredData ? true : false;

        if (on) {
            return temp_arr.filter((x: any) => {
                return x._id !== item._id;
            });
        } else {
            const result = temp_arr;
            result.push(item);
            return result;
        }
    };
    return (
        <View style={[styles.container, style]}>
            {makeButtons()}

        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
});
