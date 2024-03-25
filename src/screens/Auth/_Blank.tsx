import React, { useEffect, useState } from 'react';
import { Block, Button, Content, StepIndicatorHandler, Text, } from '@components';
import { Colors } from '../../config/colors';
import { TagsView } from '@components'
import { content, dropdownContent } from '../../AppData';
import { StyleSheet } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import Slider from '@react-native-community/slider';
import { Icons } from '../../config/icons';

export const _Blank = () => {
    const [selectedContent, setSelectedContent] = useState([content[0]])
    const [contentList, setContentList] = useState([])
    const [value, setValue] = useState<string>();
    const [isFocus, setIsFocus] = useState<boolean>(false);

    useEffect(() => {
        let filter = dropdownContent.filter((ele, index) => ele['type'] == selectedContent[0]['type']);
        setContentList(filter);
    }, [selectedContent]);

    function onItemSelect(item: any, type: any) {
        setSelectedContent(item);
    }
    return (
        <Block flex backgroundColor={Colors.primary}>
            <Content padder>
                <StepIndicatorHandler />
                <Text color={'onPrimary'} margin={{ Top: 24 }} size="H2" >
                    Content type
                </Text>
                <Text color={'onPrimary'} size='H6' margin={{ Top: 8 }} >
                    Choose a content type that best fits your needs.
                </Text>
                <Block height={1} backgroundColor='#3A3940' margin={{ Vertical: 32 }} />
                <Text color={'onPrimary'} margin={{ Bottom: 12 }} size="H5" >
                    What type of content are you creating?
                </Text>

                <TagsView
                    all={content}
                    selected={selectedContent}
                    onItemSelect={onItemSelect}
                    bgColorOnActive={'#523FD7'}
                    type={'tag'}
                />
                <Text color={'onPrimary'} margin={{ Vertical: 24 }} size="H5" >
                    {`Which type of “${selectedContent[0]['title']}“ content are you\ncreating?`}
                </Text>
                <Dropdown
                    style={[styles.dropdown, isFocus && {
                        borderTopColor: '#523FD7',
                        borderRightColor: '#523FD7',
                        borderBottomColor: '#523FD7',
                        borderLeftColor: '#523FD7',
                    }]}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    inputSearchStyle={styles.inputSearchStyle}

                    containerStyle={{ backgroundColor: '#3A3940', borderWidth: 0, borderRadius: 12, marginTop: 8 }}
                    itemTextStyle={{ color: Colors.onPrimary, }}
                    activeColor={'#09090D'}
                    data={contentList}
                    search
                    maxHeight={300}
                    minHeight={100}
                    labelField="label"
                    valueField="value"
                    searchField="search"
                    placeholder={!isFocus ? 'Select' : '...'}
                    searchPlaceholder="Search"

                    value={value}
                    onFocus={() => setIsFocus(true)}
                    onBlur={() => setIsFocus(false)}
                    onChange={(item) => {
                        setValue(item?.value);
                        setIsFocus(false);
                    }}

                />
                <Text color={'onPrimary'} margin={{ Top: 24 }} size="H5" >
                    Set the number of words for output text.
                </Text>
                <Block height={55} row align='center' margin={{ Vertical: 16 }} padding={{ Horizontal: 12 }} backgroundColor='#09090D' style={{ borderRadius: 12 }}>
                    <Text color={'onPrimary'} size="H6" >
                        100
                    </Text>
                    <Slider
                        style={{ flex: 1, marginHorizontal: 8 }}
                        minimumValue={100}
                        maximumValue={1000}
                        minimumTrackTintColor='#523FD7'
                        maximumTrackTintColor="#3A3940"
                        thumbImage={require('../../../assets/icons/ic_thumb.png')}
                        trackImage={require('../../../assets/icons/ic_track.png')}
                    />
                    <Text color={'onPrimary'} size="H6" >
                        1000
                    </Text>
                </Block>


                <Button icon={Icons['icNext']} iconRight={Icons['icArrowRight']} loading={false}
                    style={{ backgroundColor: Colors.onPrimary, borderRadius: 32, minHeight: 55, }} />

            </Content>
        </Block >
    );
};

const styles = StyleSheet.create({
    dropdown: {
        height: 56,
        borderColor: '#3A3940',
        borderWidth: 0.5,
        borderRadius: 12,
        paddingHorizontal: 16,
        backgroundColor: '#3A3940'
    },
    placeholderStyle: {
        fontSize: 14,
        color: Colors.onPrimary
    },
    selectedTextStyle: {
        fontSize: 16,
        color: Colors.onPrimary
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        // height: 40,
        fontSize: 16,
        borderRadius: 0,
        borderWidth: 0,
        color: Colors.onPrimary,
        backgroundColor: '#3A3940'
    }, outerSmall: {
        width: 4,
        height: 4,
        top: 6,
        borderRadius: 2,
        backgroundColor: '#003366',
        justifyContent: 'center',
        alignItems: 'center',
    },
    outerTrueSmall: {
        width: 8,
        height: 8,
        borderRadius: 2,
        backgroundColor: '#ABCDEF',
        justifyContent: 'center',
        alignItems: 'center',
    }, innerSmall: {
        width: 7,
        height: 7,
        borderRadius: 1,
        backgroundColor: '#223366',
    },
    innerTrueSmall: {
        width: 7,
        height: 7,
        borderRadius: 1,
        backgroundColor: '#334488',
    },
});