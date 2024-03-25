/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import StepIndicator from 'react-native-step-indicator';
import { Icons } from '../../config/icons';

const secondIndicatorStyles = {
    stepIndicatorSize: 50,
    currentStepIndicatorSize: 60,
    separatorStrokeWidth: 4,
    currentStepStrokeWidth: 0,
    separatorStrokeFinishedWidth: 6,
    separatorFinishedColor: '#00B67A',
    separatorUnFinishedColor: '#3A3940',
    stepIndicatorFinishedColor: '#00B67A',
    stepIndicatorUnFinishedColor: '#3A3940',
    stepIndicatorCurrentColor: '#00B67A',

};


const getStepIndicatorIconConfig = ({
    position,
    stepStatus,
}: {
    position: number;
    stepStatus: string;
}) => {
    const iconConfig = {
        source: Icons['icUser'],
    };
    switch (position) {
        case 0: {
            iconConfig.source = Icons['icUser'];
            break;
        }
        case 1: {
            iconConfig.source = Icons['icTarget'];
            break;
        }
        case 2: {
            iconConfig.source = Icons['icFile'];
            break;
        }
        case 3: {
            iconConfig.source = Icons['icDetailed'];
            break;
        }
        case 4: {
            iconConfig.source = Icons['icHelp'];
            break;
        }
        default: {
            break;
        }
    }
    return iconConfig;
};

export function StepIndicatorHandler() {
    const [currentPage, setCurrentPage] = React.useState<number>(0);

    const onStepPress = (position: number) => {
        setCurrentPage(position);
    };



    const renderStepIndicator = (params: any) => (
        <Image {...getStepIndicatorIconConfig(params)} style={{ width: 25, height: 25 }} />
    );

    return (
        <View style={styles.container}>
            <StepIndicator
                customStyles={secondIndicatorStyles}
                currentPosition={currentPage}
                onPress={onStepPress}
                renderStepIndicator={renderStepIndicator}

            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    page: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },


});