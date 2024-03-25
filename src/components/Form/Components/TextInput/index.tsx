import {
  Animated,
  TextInput as TextInputBase,
  TextInputProps as TextInputBaseProps,
} from 'react-native';
import React, { forwardRef, useRef } from 'react';
import { InputTypes, style} from './config';
import { IconSourceType } from '../../../Icon';
import { useForm } from '../..';
import { useBoolAnimation } from '../../../useBoolAnimation';
import { Icons } from '@config';

export interface TextInputProps extends TextInputBaseProps {
  type: keyof typeof InputTypes;
  label: string;
  leftIcon?: IconSourceType;
  rightIcon?: IconSourceType;
  next?: string;
}

export const TextInput = forwardRef<any, TextInputProps>(
  ({ leftIcon, rightIcon, ...props }, upRef) => {
    const textInputRef = useRef<TextInputBase>(null);
    const { State, setState } = useForm({
      upRef,
      focus() {
        textInputRef.current?.focus();
      },
      validate: (value, form) =>
        InputTypes[props.type].validate(props.label, value, form),
      initialValue: ""
    });
    const animateOnFocus = useBoolAnimation(State.isFocused);
    const animateOnError = useBoolAnimation(State.isError);

    const styles = style(animateOnFocus, animateOnError,props);
    return (
      <Animated.View style={styles.container}>
        {!styles.shouldShowFloatingLabel && (
          <Animated.Text style={styles.label}>
            {props.label}
          </Animated.Text>
        )}
        <Animated.View style={styles.inputContainer}>
          {!!leftIcon && (
            <Animated.Image style={styles.icon} source={Icons[leftIcon]} />
          )}
          <Animated.View style={{ flex: 1 }}>
            {styles.shouldShowFloatingLabel &&(<Animated.Text style={styles.floatingLabel}>{props.label}</Animated.Text>)}
            <TextInputBase
              ref={textInputRef}
              style={{ flex: 1 }}
              //@ts-ignore
              enterKeyHint={!!props.next ? 'next' : 'done'}
              onFocus={() => {
                setState(s => ({ ...s, isFocused: true }));
              }}
              onBlur={() => {
                setState(s => ({ ...s, isFocused: s.value != '' }));
              }}
              onChangeText={value => {
                setState(s => ({ ...s, isError: false, ErrorText: [], value }));
              }}
              onSubmitEditing={e => {
                props.onSubmitEditing?.(e);
              }}
              {...props}
            />
          </Animated.View>
          {!!rightIcon && (
            <Animated.Image style={styles.icon} source={Icons[rightIcon]} />
          )}
        </Animated.View>
        <Animated.View style={styles.errorContainer}>
          {!!State.isError &&
            State.ErrorText.map((e) => (<Animated.Text
              style={styles.errorText}
            >{e}</Animated.Text>))
          }
        </Animated.View>
      </Animated.View>
    );
  },
);

