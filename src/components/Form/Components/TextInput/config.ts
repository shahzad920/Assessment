import { Animated, ImageStyle, TextStyle, ViewStyle } from "react-native";
import { Colors } from "../../../../config/colors";
import { useBoolAnimation } from "../../../useBoolAnimation";
import { TextInputProps } from ".";

type InputStyleType = (animateOnFocus: ReturnType<typeof useBoolAnimation>, animateOnError: ReturnType<typeof useBoolAnimation>,props:TextInputProps) => ({
    shouldShowFloatingLabel:boolean,
    container: Animated.WithAnimatedObject<ViewStyle>,
    inputContainer: Animated.WithAnimatedObject<ViewStyle>,
    icon: Animated.WithAnimatedObject<ImageStyle>,
    label: Animated.WithAnimatedObject<TextStyle>,
    floatingLabel: Animated.WithAnimatedObject<TextStyle>,
    errorContainer: Animated.WithAnimatedObject<ViewStyle>,
    errorText: Animated.WithAnimatedObject<TextStyle>,
})


export const style: InputStyleType = (animateOnFocus, animateOnError) => ({
    shouldShowFloatingLabel:true,
    container: {
        borderRadius: 4,
        paddingTop: 5,
        marginTop: 10,
        backgroundColor: animateOnError("#ffffff00", Colors.errorContainer,)
    },
    inputContainer: {
        borderRadius: 8,
        minHeight:52,padding:10,
        flexDirection: 'row',
        marginVertical: 6,
        maxHeight: 52,
        alignItems: 'center',
        borderWidth: 1,
        backgroundColor: animateOnFocus(Colors.outlineVariant, Colors.primary),
        borderColor: animateOnFocus(Colors.outlineVariant, Colors.primary),
    },
    icon: {
        tintColor: animateOnFocus(Colors.primary, Colors.outlineVariant),
        margin: 12,
        height: 25,
        width: 25,
    },
    label: {
        color: animateOnFocus(Colors.primary, Colors.outlineVariant),
    },
    floatingLabel: {
        position: 'absolute',
        paddingRight: 5,
        paddingLeft: 5,
        alignSelf: 'center',
        top: animateOnFocus(5, -8),
        left: animateOnFocus(6, -6),
        fontSize: animateOnFocus(17, 10),
        color: animateOnFocus(Colors.primary, Colors.outlineVariant),
    },
    errorContainer: {},
    errorText: {},
});



const EMPTY = (label: string, value: string) => (value.length < 3) && label + " is required"
export const InputTypes = Object.freeze({
    Text: {
        validate: (label: string, value: string, form: any) => ([
            EMPTY(label, value)
        ].filter(s => !!s))
    },
    Email: {
        validate: (label: string, value: string, form: any) => ([
            EMPTY(label, value),
            !(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value)) && label + " is not valid"
        ].filter(s => !!s))
    },
    Password: {
        validate: (label: string, value: string, form: any) => ([
            EMPTY(label, value),
            !(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/.test(value)) && label + " is easy"
        ].filter(s => !!s))
    },
    ConfirmPassword: {
        validate: (label: string, value: string, form: any) => ([
            EMPTY(label, value),
            form.password != value && "Password Does Not Match!"
        ].filter(s => !!s))
    },
    Number: {
        validate: (label: string, value: string, form: any) => ([
            EMPTY(label, value)
        ].filter(s => !!s))
    },
    Decimal: {
        validate: (label: string, value: string, form: any) => ([
            EMPTY(label, value)
        ].filter(s => !!s))
    },
    Memo: {
        validate: (label: string, value: string, form: any) => ([
            EMPTY(label, value)
        ].filter(s => !!s))
    }
});
